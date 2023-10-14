import type Square from "../square/types/Square"
import type Grid from "./types/Grid"

import createSquare from "../square/createSquare"

export default function createGrid(size: number): Grid {
  const squares = new Array<Square[]>(size)
  for (let row = 0; row < squares.length; row++) {
    squares[row] = new Array<Square>(size)
    for (let column = 0; column < squares[row].length; column++) {
      squares[row][column] = createSquare(row, column)
    }
  }

  return {
    size,
    squares,
    get hasUnmarkedSquares() {
      return squares.some(row => row.some(squares => squares.marker === null))
    },
  }
}
