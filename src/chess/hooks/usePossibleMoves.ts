import { useMemo } from "react"

import getPossibleMoves from "../services/getPossibleMoves"

export default function usePossibleMoves(
  board: Board,
  selectedPosition: Nullish<Position>
): Map<Position, Move> {
  return useMemo(
    () =>
      selectedPosition !== null
        ? getPossibleMoves(board, selectedPosition)
        : new Map(),
    [board, selectedPosition]
  )
}
