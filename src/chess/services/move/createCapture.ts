import type Piece from "../piece/types/Piece"
import type Square from "../square/types/Square"
import type PossibleMove from "./types/PossibleMove"

export default function createCapture(
  capturingPiece: Piece,
  capturePiece: Piece,
  fromSquare: Square,
  toSquare: Square
): PossibleMove {
  return {
    type: "capture",
    execute: () => {
      fromSquare.piece = null
      toSquare.piece = capturingPiece
      capturingPiece.moves++
      return {
        description: description(
          capturingPiece,
          capturePiece,
          fromSquare,
          toSquare
        ),
        undo: () => {
          toSquare.piece = capturePiece
          fromSquare.piece = capturingPiece
          capturingPiece.moves--
        },
      }
    },
  }
}

function description(
  capturingPiece: Piece,
  capturePiece: Piece,
  fromSquare: Square,
  toSquare: Square
): string {
  return `Moved ${capturingPiece.notation} from ${fromSquare.notation} to ${toSquare.notation} with capture of ${capturePiece.notation}`
}
