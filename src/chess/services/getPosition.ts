export type Position = [number, number]

const POSITIONS = Array(8)
  .fill(null)
  .map((_, row) => {
    return Array(8)
      .fill(null)
      .map((_, col): Position => {
        return [row, col]
      })
  })

export default function getPosition(row: number, col: number): Position {
  return POSITIONS[row][col]
}
