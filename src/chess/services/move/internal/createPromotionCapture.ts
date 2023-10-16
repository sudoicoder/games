import type Piece from "../../piece/types/Piece"
import type Square from "../../square/types/Square"
import type ExecutableMove from "../types/ExecutableMove"

export default function createPromotionCapture(
  fromPiece: Piece,
  toPiece: Piece,
  fromSquare: Square,
  toSquare: Square
): ExecutableMove {
  return {
    type: "promotion/capture",
    execute: designation => {
      const designationBeforePromotion = fromPiece.designation
      toPiece.stash()
      fromPiece.move(toSquare, "increment/moves")
      fromPiece.designate(designation)
      return {
        description: description(
          fromPiece,
          toPiece,
          fromSquare,
          toSquare,
          designation
        ),
        undo: () => {
          fromPiece.designate(designationBeforePromotion)
          fromPiece.move(fromSquare, "decrement/moves")
          toPiece.place(toSquare)
        },
      }
    },
  }
}

function description(
  fromPiece: Piece,
  toPiece: Piece,
  fromSquare: Square,
  toSquare: Square,
  designation: Piece["designation"]
): string {
  return `Moved ${fromPiece.notation} from ${fromSquare.notation} to ${toSquare.notation} with capture of ${toPiece.notation} and promoted into ${designation}`
}
