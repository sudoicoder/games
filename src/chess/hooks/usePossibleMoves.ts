import { useMemo } from "react"

import getPossibleMoves from "../services/getPossibleMoves"

export default function usePossibleMoves(
  board: Board,
  selectedPosition: Nullish<Position>
): Set<Position> {
  return useMemo(
    () =>
      selectedPosition !== null
        ? getPossibleMoves(board, selectedPosition)
        : new Set(),
    [board, selectedPosition]
  )
}
