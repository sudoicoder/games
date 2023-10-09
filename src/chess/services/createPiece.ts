export default function createPiece(
  alliance: Piece["alliance"],
  type: Piece["type"]
): Piece {
  return {
    alliance,
    type,
  }
}
