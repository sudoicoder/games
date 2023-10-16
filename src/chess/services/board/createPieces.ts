import type Piece from "../piece/types/Piece"
import type Square from "../square/types/Square"

import createInitialPiece from "../piece/createInitialPiece"

export default function createPieces(
  squares: Square[][]
): Record<Piece["alliance"], Set<Piece>> {
  const pieces = { dark: new Set<Piece>(), light: new Set<Piece>() }
  for (const rank of squares) {
    for (const square of rank) {
      const piece = createInitialPiece(square.position)
      if (piece === null) {
        continue
      }
      piece.place(square)
      pieces[piece.alliance].add(piece)
    }
  }
  return pieces
}
