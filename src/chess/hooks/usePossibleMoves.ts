import { useMemo } from "react"

import getPossibleMoves from "../services/getPossibleMoves"

export default function usePossibleMoves(
  board: Board,
  selectedPosition: Position
): Set<Position> {
  return useMemo(
    () =>
      selectedPosition !== -1
        ? getPossibleMoves(board, selectedPosition)
        : new Set(),
    [board, selectedPosition]
  )
}
