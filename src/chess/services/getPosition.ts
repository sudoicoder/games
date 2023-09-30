export type Position = [number, number]

const POSITIONS = Array(8)
  .fill(null)
  .map((_, row) => {
    return Array(8)
      .fill(null)
      .map((_, col) => {
        return [row, col]
      })
  })

export default function getPosition(row: number, col: number) {
  return POSITIONS[row][col]
}
