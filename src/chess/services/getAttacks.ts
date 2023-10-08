import getAttackStrategies from "./getAttackStrategies"
import getOffsettedPosition from "./getOffsettedPosition"

export default function getAttacks(
  board: Board,
  alliance: Piece["alliance"],
  position: Position
): Set<Position> {
  const attacks = new Set<Position>()
  const attackStrategies = getAttackStrategies(alliance)
  for (let [offset, extent, againsts] of attackStrategies) {
    let offsetted = position
    while (
      extent > 0 &&
      (offsetted = getOffsettedPosition(offsetted, offset)) !== -1
    ) {
      extent--
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
