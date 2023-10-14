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
      const square = createSquare(position)
      if (piece !== null) {
        piece.place(square)
        pieces[piece.alliance].add(piece)
      }
      squares[row][column] = square
    }
  }

  function square(position: Square["position"]): Optional<Square> {
    return squares[position.row]?.[position.column]
  }

  function stash() {
    pieces.dark.forEach(piece => piece.stash())
    pieces.light.forEach(piece => piece.stash())
  }

  return {
    pieces,
    squares,
    square,
    stash,
  }
}
