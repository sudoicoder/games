export default function getCastlingMoves(
  board: Board,
  position: Position
): [Position, Move][] {
  const piece = board.getPiece(position)
  if (piece === null) {
    return []
  }
  if (piece.type !== "KING") {
    return []
  }
  const castles = new Array<[Position, Move]>()
  return castles
}
