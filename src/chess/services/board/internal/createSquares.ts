import type Square from "../../square/types/Square"

import createSquare from "../../square/createSquare"

function createSquares(): Square[][] {
  const squares = new Array<Square[]>(8)
  for (let row = 0; row < squares.length; row++) {
    squares[row] = new Array<Square>(8)
    for (let column = 0; column < squares[row].length; column++) {
      squares[row][column] = createSquare({ row, column })
    }
  }
  return squares
}

export default createSquares
