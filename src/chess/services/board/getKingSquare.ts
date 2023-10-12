import type Piece from "../piece/types/Piece"
import type Square from "../square/types/Square"
import type Board from "./types/Board"

export default function getKingSquare(
  board: Board,
  alliance: Piece["alliance"]
): Optional<Square> {
  for (const rank of board) {
    for (const square of rank) {
      if (
        square.piece &&
        square.piece.alliance === alliance &&
        square.piece.designation === "king"
      ) {
        return square
      }
    }
  }
  return undefined
}
