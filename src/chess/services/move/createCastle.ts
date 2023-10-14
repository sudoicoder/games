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
      king.move(kingToSquare, "increment/moves")
      rook.move(rookToSquare, "increment/moves")
      return {
        description: description(kingFromSquare, rookFromSquare),
        undo: () => {
          rook.move(rookFromSquare, "decrement/moves")
          king.move(kingFromSquare, "decrement/moves")
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
