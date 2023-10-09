import getPosition from "./getPosition"

export default function getOffsettedPosition(
  position: Position,
  offset: Offset
): Nullish<Position> {
  const [row, col] = position
  const [rowOffset, colOffset] = offset
  return getPosition(row + rowOffset, col + colOffset)
}
