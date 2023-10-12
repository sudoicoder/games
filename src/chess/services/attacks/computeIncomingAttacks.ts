import type Board from "../board/types/Board"
import generateOffsettedSquares from "../offset/generateOffsettedSquares"
import type Piece from "../piece/types/Piece"
import type Square from "../square/types/Square"

import generateIncomingAttackStrategies from "./generateIncomingAttackStrategies"

export default function computeIncomingAttacks(
  board: Board,
  square: Square,
  alliance: Piece["alliance"]
): Square[] {
  const incomingAttacks = Array<Square>()
  const incomingAttackStrategies = generateIncomingAttackStrategies(alliance)
  for (const [offset, extent, attackers] of incomingAttackStrategies) {
    const incomings = generateOffsettedSquares(board, square, offset, extent)
    for (const incoming of incomings) {
      if (incoming.piece === null) {
        continue
      }
      if (incoming.piece.alliance === alliance) {
        break
      }
      if (!attackers.includes(incoming.piece.designation)) {
        break
      }
      incomingAttacks.push(incoming)
    }
  }
  return incomingAttacks
}
