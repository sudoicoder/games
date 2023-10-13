import type Piece from "../piece/types/Piece"
import type Square from "../square/types/Square"
import type PossibleMove from "./types/PossibleMove"

export default function createPromotionWalk(
  fromPiece: Piece,
  fromSquare: Square,
  toSquare: Square
): PossibleMove {
  return {
    type: "promotion/walk",
    execute: designation => {
      const designationBeforePromotion = fromPiece.designation
      fromSquare.piece = null
      toSquare.piece = fromPiece
      fromPiece.designation = designation
      fromPiece.square = toSquare
      fromPiece.moves++
      return {
        description: description(fromPiece, fromSquare, toSquare, designation),
        undo: () => {
          fromSquare.piece = fromPiece
          toSquare.piece = null
          fromPiece.designation = designationBeforePromotion
          fromPiece.square = fromSquare
          fromPiece.moves--
        },
      }
    },
  }
}

function description(
  fromPiece: Piece,
  fromSquare: Square,
  toSquare: Square,
  designation: Piece["designation"]
): string {
  return `Moved ${fromPiece.notation} from ${fromSquare.notation} to ${toSquare.notation} and promoted into ${designation}`
}
