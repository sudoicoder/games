import type Square from "../square/types/Square"
import type Board from "./types/Board"

import createSquare from "../square/createSquare"
import createInitialPiece from "../piece/createInitialPiece"

export default function createBoard(): Board {
  const squares = Array<Square[]>(8)
  for (let row = 0; row < squares.length; row++) {
    squares[row] = Array<Square>(8)
    for (let column = 0; column < squares[row].length; column++) {
      const position = { row, column }
      const piece = createInitialPiece(position)
      squares[row][column] = createSquare(position, piece)
    }
  }
  return squares
}
