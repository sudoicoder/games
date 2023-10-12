import type Square from "../square/types/Square"
import type Board from "./types/Board"

import createSquare from "../square/createSquare"

export default function createBoard(): Board {
  const squares = Array<Square[]>(8)
  for (let row = 0; row < squares.length; row++) {
    squares[row] = Array<Square>(8)
    for (let column = 0; column < squares[row].length; column++) {
      squares[row][column] = createSquare({ row, column })
    }
  }
  return { squares }
}
