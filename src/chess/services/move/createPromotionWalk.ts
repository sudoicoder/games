import createPiece from "../piece/createPiece"
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
      fromSquare.piece = null
      toSquare.piece = createPiece(fromPiece.alliance, designation)
      return {
        description: description(fromPiece, fromSquare, toSquare, designation),
        undo: () => {
          toSquare.piece = null
          fromSquare.piece = fromPiece
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
