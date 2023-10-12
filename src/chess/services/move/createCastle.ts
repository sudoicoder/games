import type Piece from "../piece/types/Piece"
import type Square from "../square/types/Square"
import type PossibleMove from "./types/PossibleMove"

export default function createCastle(
  king: Piece,
  rook: Piece,
  kingFromSquare: Square,
  kingToSquare: Square,
  rookFromSquare: Square,
  rookToSquare: Square
): PossibleMove {
  return {
    type: "castle",
    execute: () => {
      kingFromSquare.piece = null
      kingToSquare.piece = king
      rookFromSquare.piece = null
      rookToSquare.piece = rook
      king.moves++
      rook.moves++
      return {
        description: description(kingFromSquare, rookFromSquare),
        undo: () => {
          rookToSquare.piece = null
          rookFromSquare.piece = rook
          kingToSquare.piece = null
          kingFromSquare.piece = king
          rook.moves--
          king.moves--
        },
      }
    },
  }
}

function description(kingFromSquare: Square, rookFromSquare: Square): string {
  const deviation = Math.abs(
    kingFromSquare.position.column - rookFromSquare.position.column
  )
  return `Castled ${deviation > 2 ? "0-0" : "0-0-0"}`
}
