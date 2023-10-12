import type Piece from "../piece/types/Piece"
import type Square from "../square/types/Square"
import type PossibleMove from "./types/PossibleMove"

export default function createEnPassant(
  capturingPiece: Piece,
  capturePiece: Piece,
  fromSquare: Square,
  toSquare: Square,
  captureSquare: Square
): PossibleMove {
  return {
    type: "enpassant",
    execute: () => {
      fromSquare.piece = null
      captureSquare.piece = null
      toSquare.piece = capturingPiece
      capturingPiece.moves++
      return {
        description: description(
          capturingPiece,
          capturePiece,
          fromSquare,
          toSquare,
          captureSquare
        ),
        undo: () => {
          toSquare.piece = null
          captureSquare.piece = capturePiece
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
  toSquare: Square,
  captureSquare: Square
): string {
  return `Moved ${capturingPiece.notation} from ${fromSquare.notation} to ${toSquare.notation} with capture of ${capturePiece.notation} at ${captureSquare.notation} enpassant`
}
