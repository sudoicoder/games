import getMoveStrategies from "./getMoveStrategies"
import getOffsettedPosition from "./getOffsettedPosition"

export default function getPossibleMoves(
  board: Board,
  position: Position
): Map<Position, Move> {
  const possibleMoves = new Map<Position, Move>()
  const piece = board.getPiece(position)
  if (piece === null) {
    return possibleMoves
  }
  const moveStrategies = getMoveStrategies(piece, board.hasPieceMoved(piece))
  for (const [offset, extent, behaviours] of moveStrategies) {
    let offsetted: Nullish<Position> = position
    let currentExtent = extent
    while (
      currentExtent > 0 &&
      (offsetted = getOffsettedPosition(offsetted, offset)) !== null
    ) {
      currentExtent--
      const other = board.getPiece(offsetted)
      if (other === null) {
        if (behaviours.includes("WALK")) {
          possibleMoves.set(offsetted, [[position, offsetted]])
        }
        continue
      }
      if (other.alliance !== piece.alliance) {
        if (behaviours.includes("ATTACK")) {
          possibleMoves.set(offsetted, [[position, offsetted]])
        }
      }
      break
    }
  }
  return possibleMoves
}
