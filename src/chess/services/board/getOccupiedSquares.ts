import type Piece from "../piece/types/Piece"
import type Square from "../square/types/Square"
import getSquares from "./getSquares"
import type Board from "./types/Board"

export default function getOccupiedSquares(
  board: Board,
  alliance: Piece["alliance"]
): Map<Piece["designation"], Square[]> {
  const occupiedSquares = new Map<Piece["designation"], Square[]>()
  for (const square of getSquares(board)) {
    if (square.piece === null) {
      continue
    }
    if (square.piece.alliance !== alliance) {
      continue
    }
    const squares = occupiedSquares.get(square.piece.designation) ?? []
    squares.push(square)
    occupiedSquares.set(square.piece.designation, squares)
  }
  return occupiedSquares
}
