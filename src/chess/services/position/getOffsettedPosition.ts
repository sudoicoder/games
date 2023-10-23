import type Offset from "../offset/types/Offset"
import type Square from "../square/types/Square"

function getOffsettedPosition(
  position: Square["position"],
  offset: Offset
): Square["position"] {
  const row = position.row + offset.alongRow
  const column = position.column + offset.alongColumn
  return { row, column }
}

export default getOffsettedPosition
