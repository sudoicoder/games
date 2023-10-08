import getMoveStrategies from "./getMoveStrategies"
import getOffsettedPosition from "./getOffsettedPosition"

export default function getPossibleMoves(
  board: Board,
  position: Position
): Set<Position> {
  const possibleMoves = new Set<Position>()
  const piece = board.getPiece(position)
  if (piece === null) {
    return possibleMoves
  }
  const moveStrategies = getMoveStrategies(piece, board.hasPieceMoved(piece))
  for (let [offset, extent, behaviours] of moveStrategies) {
    let offsetted = position
    while (
      extent > 0 &&
      (offsetted = getOffsettedPosition(offsetted, offset)) !== -1
    ) {
      extent--
      const other = board.getPiece(offsetted)
      if (other === null) {
        if (behaviours.includes("WALK")) {
          possibleMoves.add(offsetted)
        }
        continue
      }
      if (other.alliance !== piece.alliance) {
        if (behaviours.includes("ATTACK")) {
          possibleMoves.add(offsetted)
        }
      }
      break
    }
  }
  return possibleMoves
}
