import type Piece from "../../piece/types/Piece"
import type Square from "../../square/types/Square"
import type ExecutableMove from "../types/ExecutableMove"

function description(
  fromPiece: Piece,
  fromSquare: Square,
  toSquare: Square,
  designation: Piece["designation"]
): string {
  return `Moved ${fromPiece.notation} from ${fromSquare.notation} to ${toSquare.notation} and promoted into ${designation}`
}

function createPromotionWalk(
  fromPiece: Piece,
  fromSquare: Square,
  toSquare: Square
): ExecutableMove {
  return {
    type: "promotion/walk",
    execute: designation => {
      const designationBeforePromotion = fromPiece.designation
      fromPiece.move(toSquare, "increment/moves")
      fromPiece.designate(designation)
      return {
        description: description(fromPiece, fromSquare, toSquare, designation),
        undo: () => {
          fromPiece.designate(designationBeforePromotion)
          fromPiece.move(fromSquare, "decrement/moves")
        },
      }
    },
  }
}

export default createPromotionWalk
