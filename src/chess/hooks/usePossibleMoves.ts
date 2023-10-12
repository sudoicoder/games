import { useMemo } from "react"

import type Board from "../services/board/types/Board"
import type Influence from "../services/influence/types/Influence"
import type Square from "../services/square/types/Square"

import computePossibleMoves from "../services/move/computePossibleMoves"

export default function usePossibleMoves(
  board: Board,
  selectedSquare: Nullish<Square>,
  opponentInfluence: Influence
): ReturnType<typeof computePossibleMoves> {
  return useMemo(
    () =>
      selectedSquare !== null
        ? computePossibleMoves(board, selectedSquare, opponentInfluence)
        : [],
    [board, selectedSquare]
  )
}
