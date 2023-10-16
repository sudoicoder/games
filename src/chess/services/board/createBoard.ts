import type Square from "../square/types/Square"
import type Board from "./types/Board"

import createSquares from "./internal/createSquares"
import createPieces from "./internal/createPieces"

export default function createBoard(): Board {
  const squares = createSquares()
  const pieces = createPieces(squares)

  function square(position: Square["position"]): Optional<Square> {
    return squares[position.row]?.[position.column]
  }

  return {
    pieces,
    squares,
    square,
  }
}
