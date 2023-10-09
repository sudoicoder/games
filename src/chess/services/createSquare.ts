export default function createSquare(
  row: number,
  col: number,
  piece: Nullish<Piece>
): Square {
  return {
    piece,
    shade: (row + col) % 2 ? "DARK" : "LIGHT",
  }
}
