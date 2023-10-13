import type Piece from "../piece/types/Piece"
import type Square from "../square/types/Square"
import type PossibleMove from "./types/PossibleMove"

export default function createWalk(
  fromPiece: Piece,
  fromSquare: Square,
  toSquare: Square
): PossibleMove {
  return {
    type: "walk",
    execute: () => {
      fromSquare.piece = null
      toSquare.piece = fromPiece
      fromPiece.square = toSquare
      fromPiece.moves++
      return {
        description: description(fromPiece, fromSquare, toSquare),
        undo: () => {
          fromSquare.piece = fromPiece
          toSquare.piece = null
          fromPiece.square = fromSquare
          fromPiece.moves--
        },
      }
    },
  }
}

function description(piece: Piece, from: Square, to: Square): string {
  return `Moved ${piece.notation} from ${from.notation} to ${to.notation}`
}
