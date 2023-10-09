import getAttackStrategies from "./getAttackStrategies"
import getOffsettedPosition from "./getOffsettedPosition"

export default function getAttacks(
  board: Board,
  alliance: Piece["alliance"],
  position: Position
): Set<Position> {
  const attacks = new Set<Position>()
  const attackStrategies = getAttackStrategies(alliance)
  for (const [offset, extent, againsts] of attackStrategies) {
    let offsetted: Nullish<Position> = position
    let currentExtent = extent
    while (
      currentExtent > 0 &&
      (offsetted = getOffsettedPosition(offsetted, offset)) !== -1
    ) {
      currentExtent--
      const piece = board.getPiece(offsetted)
      if (piece === null) {
        continue
      }
      if (piece.alliance !== alliance) {
        if (againsts.includes(piece.type)) {
          attacks.add(offsetted)
        }
      }
      break
    }
  }
  return attacks
}
