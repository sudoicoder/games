import Square from "../square/types/Square"
import type Board from "./types/Board"

export default function* getSquares(
  board: Board
): Generator<Square, void, void> {
  for (const rank of board) {
    for (const square of rank) {
      yield square
    }
  }
}
