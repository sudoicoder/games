import { useMemo } from "react"

import type Board from "../services/board/types/Board"
import type Square from "../services/square/types/Square"

import computePossibleMoves from "../services/move/computePossibleMoves"

export default function usePossibleMoves(
  board: Board,
  selectedSquare: Nullish<Square>
): ReturnType<typeof computePossibleMoves> {
  return useMemo(
    () =>
      selectedSquare !== null
        ? computePossibleMoves(board, selectedSquare)
        : new Map(),
    [board, selectedSquare]
  )
}
