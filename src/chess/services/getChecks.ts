import getAttacks from "./getAttacks"

export default function getChecks(
  board: Board,
  alliance: Piece["alliance"]
): Set<Position> {
  return getAttacks(board, alliance, board.getKingPosition(alliance))
}
