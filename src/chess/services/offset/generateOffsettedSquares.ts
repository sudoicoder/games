import type Board from "../board/types/Board"
import type Extent from "./types/Extent"
import type Offset from "./types/Offset"
import type Square from "../square/types/Square"
import getOffsettedPosition from "../position/getOffsettedPosition"
import getSquare from "../board/getSquare"

export default function* generateOffsettedSquares(
  board: Board,
  square: Square,
  offset: Offset,
  extent: Extent
): Generator<Square, void, void> {
  while (extent-- > 0) {
    const offsettedPosition = getOffsettedPosition(square.position, offset)
    const offsettedSquare = getSquare(board, offsettedPosition)
    if (offsettedSquare === undefined) {
      return
    }
    yield (square = offsettedSquare)
  }
}
