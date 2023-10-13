import type Piece from "../piece/types/Piece"
import type Square from "../square/types/Square"
import type Board from "./types/Board"

import createInitialPiece from "../piece/createInitialPiece"
import createSquare from "../square/createSquare"

export default function createBoard(): Board {
  const squares = new Array<Square[]>(8)
  const pieces = new Set<Piece>()
  for (let row = 0; row < squares.length; row++) {
    squares[row] = new Array<Square>(8)
    for (let column = 0; column < squares[row].length; column++) {
      const position = { row, column }
      const piece = createInitialPiece(position)
      squares[row][column] = createSquare(position, piece)
      if (piece !== null) {
        pieces.add(piece)
      }
    }
  }
  return { squares, pieces }
}
