import type Piece from "../piece/types/Piece"
import type Square from "../square/types/Square"
import type Board from "./types/Board"

import createInitialPiece from "../piece/createInitialPiece"
import createSquare from "../square/createSquare"

export default function createBoard(): Board {
  const pieces = {
    dark: new Set<Piece>(),
    light: new Set<Piece>(),
  }
  const squares = new Array<Square[]>(8)
  for (let row = 0; row < squares.length; row++) {
    squares[row] = new Array<Square>(8)
    for (let column = 0; column < squares[row].length; column++) {
      const position = { row, column }
      const piece = createInitialPiece(position)
      const square = createSquare(position, piece)
      if (piece !== null) {
        piece.square = square
        pieces[piece.alliance].add(piece)
      }
      squares[row][column] = square
    }
  }
  return { pieces, squares }
}
