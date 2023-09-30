import { useMemo } from "react"

import type { Board } from "../services/createBoard"
import type { Position } from "../services/getPosition"

import getPossibleMoves from "../services/getPossibleMoves"

export default function usePossibleMoves(
  board: Board,
  selectedPosition: Position | undefined
) {
  return useMemo(
    () => (selectedPosition ? getPossibleMoves(board, selectedPosition) : []),
    [board, selectedPosition]
  )
}
