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

  function hasUnmarkedSquares() {
    return squares.some(row => row.some(square => square.marker === null))
  }

  function reset() {
    for (const row of squares) {
      for (const square of row) {
        square.reset()
      }
    }
  }

  return { hasUnmarkedSquares, reset, size, squares }
}
