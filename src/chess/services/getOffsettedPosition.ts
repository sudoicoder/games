import getColIndex from "./getColIndex"
import getRowIndex from "./getRowIndex"

export default function getOffsettedPosition(
  position: Position,
  offset: Offset
): Position {
  const row = getRowIndex(position) + offset[0]
  if (row < 0 || row >= 8) {
    return -1
  }
  const col = getColIndex(position) + offset[1]
  if (col < 0 || col >= 8) {
    return -1
  }
  return row * 8 + col
}
