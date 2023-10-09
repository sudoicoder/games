import { useMemo } from "react"

import getPossibleMoves from "../services/getPossibleMoves"

export default function usePossibleMoves(
  board: Board,
  selectedPosition: Position
): Map<Position, Move> {
  return useMemo(
    () =>
      selectedPosition !== -1
        ? getPossibleMoves(board, selectedPosition)
        : new Map(),
    [board, selectedPosition]
  )
}
