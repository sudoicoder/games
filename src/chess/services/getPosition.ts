import getBoardSize from "./getBoardSize"

export default function getPosition(
  row: number,
  col: number
): Nullish<Position> {
  if (!isIndexWithinBounds(row)) {
    return null
  }
  if (!isIndexWithinBounds(col)) {
    return null
  }
  return positions[row][col]
}

function isIndexWithinBounds(index: number): boolean {
  return index >= 0 && index < getBoardSize()
}

const positions = Array(getBoardSize())
  .fill(null)
  .map((_, row) =>
    Array(getBoardSize())
      .fill(null)
      .map((_, col): Position => [row, col])
  )
