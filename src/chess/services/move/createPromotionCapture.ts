import type Piece from "../piece/types/Piece"
import type Square from "../square/types/Square"
import type ExecutableMove from "./types/ExecutableMove"

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
      fromSquare.piece = null
      toSquare.piece = fromPiece
      fromPiece.designation = designation
      fromPiece.square = toSquare
      toPiece.square = null
      fromPiece.moves++
      return {
        description: description(
          fromPiece,
          toPiece,
          fromSquare,
          toSquare,
          designation
        ),
        undo: () => {
          fromSquare.piece = fromPiece
          toSquare.piece = toPiece
          fromPiece.designation = designationBeforePromotion
          fromPiece.square = fromSquare
          toPiece.square = toSquare
          fromPiece.moves--
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
