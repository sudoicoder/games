import type Piece from "../piece/types/Piece"
import type Square from "../square/types/Square"
import type ExecutableMove from "./types/ExecutableMove"

export default function createCastle(
  king: Piece,
  rook: Piece,
  kingFromSquare: Square,
  kingToSquare: Square,
  rookFromSquare: Square,
  rookToSquare: Square
): ExecutableMove {
  return {
    type: "castle",
    execute: () => {
      kingFromSquare.piece = null
      kingToSquare.piece = king
      rookFromSquare.piece = null
      rookToSquare.piece = rook
      king.square = kingToSquare
      rook.square = rookToSquare
      king.moves++
      rook.moves++
      return {
        description: description(kingFromSquare, rookFromSquare),
        undo: () => {
          kingFromSquare.piece = king
          kingToSquare.piece = null
          rookFromSquare.piece = rook
          rookToSquare.piece = null
          king.square = kingFromSquare
          rook.square = rookFromSquare
          king.moves--
          rook.moves--
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
