import type Piece from "../piece/types/Piece"
import type Square from "../square/types/Square"
import type PossibleMove from "./types/PossibleMove"

export default function createEnPassant(
  fromPiece: Piece,
  capturePiece: Piece,
  fromSquare: Square,
  toSquare: Square,
  captureSquare: Square
): PossibleMove {
  return {
    type: "enpassant",
    execute: () => {
      fromSquare.piece = null
      toSquare.piece = fromPiece
      captureSquare.piece = null
      fromPiece.square = toSquare
      capturePiece.square = null
      fromPiece.moves++
      return {
        description: description(
          fromPiece,
          capturePiece,
          fromSquare,
          toSquare,
          captureSquare
        ),
        undo: () => {
          fromSquare.piece = fromPiece
          toSquare.piece = null
          captureSquare.piece = capturePiece
          fromPiece.square = fromSquare
          capturePiece.square = captureSquare
          fromPiece.moves--
        },
      }
    },
  }
}

function description(
  fromPiece: Piece,
  capturePiece: Piece,
  fromSquare: Square,
  toSquare: Square,
  captureSquare: Square
): string {
  return `Moved ${fromPiece.notation} from ${fromSquare.notation} to ${toSquare.notation} with capture of ${capturePiece.notation} at ${captureSquare.notation} enpassant`
}
