import type { Board } from "./createBoard"
import type { Alliance } from "./getAlliance"
import type { Position } from "./getOffsetedPosition"
import type { Direction } from "./getStepsAlong"

import getOffsetedPosition from "./getOffsetedPosition"
import getStepsAlong from "./getStepsAlong"

export default function getPossibleMoves(
  board: Board,
  position: Position
): PossibleMove[] {
  return []
}

export function _getPossibleMoves(
  board: Board,
  position: Position,
  alliance: Alliance,
  directions: Direction[],
  behaviors: ("Walk" | "Attack")[],
  extent: number = Number.POSITIVE_INFINITY
): PossibleMove[] {
  const moves = Array<PossibleMove>()
  for (const direction of directions) {
    const steps = getStepsAlong(direction)
    let offsetted: Position | null = position
    while ((offsetted = getOffsetedPosition(offsetted, steps))) {
      if (moves.length === extent) {
        break
      }
      const other = board[offsetted[0]][offsetted[1]]
      if (other === null) {
        if (behaviors.includes("Walk")) {
          moves.push(offsetted)
        }
        continue
      }
      if (!other.includes(alliance)) {
        if (behaviors.includes("Attack")) {
          moves.push(offsetted)
        }
      }
      break
    }
  }
  return moves
}

export type PossibleMove = [number, number]
