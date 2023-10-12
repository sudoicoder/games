import type Square from "../square/types/Square"
import type Board from "./types/Board"

export default function getSquare(
  board: Board,
  position: Square["position"]
): Optional<Square> {
  return board[position.row]?.[position.column]
}
