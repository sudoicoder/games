import type Piece from "../piece/types/Piece"
import type Square from "../square/types/Square"
import type PossibleMove from "./types/PossibleMove"

export default function createCapture(
  fromPiece: Piece,
  toPiece: Piece,
  fromSquare: Square,
  toSquare: Square
): PossibleMove {
  return {
    type: "capture",
    execute: () => {
      fromSquare.piece = null
      toSquare.piece = fromPiece
      fromPiece.square = toSquare
      toPiece.square = null
      fromPiece.moves++
      return {
        description: description(fromPiece, toPiece, fromSquare, toSquare),
        undo: () => {
          fromSquare.piece = fromPiece
          toSquare.piece = toPiece
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
  toSquare: Square
): string {
  return `Moved ${fromPiece.notation} from ${fromSquare.notation} to ${toSquare.notation} with capture of ${toPiece.notation}`
}
