import type Piece from "../piece/types/Piece"
import type Square from "../square/types/Square"
import type PossibleMove from "./types/PossibleMove"

import createPiece from "../piece/createPiece"

export default function createPromotionCapture(
  fromPiece: Piece,
  toPiece: Piece,
  fromSquare: Square,
  toSquare: Square
): PossibleMove {
  return {
    type: "promotion/capture",
    execute: designation => {
      fromSquare.piece = null
      toSquare.piece = createPiece(fromPiece.alliance, designation)
      return {
        description: description(
          fromPiece,
          toPiece,
          fromSquare,
          toSquare,
          designation
        ),
        undo: () => {
          toSquare.piece = toPiece
          fromSquare.piece = fromPiece
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
