import { useMemo } from "react"

import type Board from "../services/board/types/Board"
import type Piece from "../services/piece/types/Piece"
import type Square from "../services/square/types/Square"

import computeInfluence from "../services/influence/computeInfluence"

export default function useOpponentInfluence(
  board: Board,
  opposition: Piece["alliance"],
  opponentSquares: Map<Piece["designation"], Set<Square>>
) {
  return useMemo(
    () => computeInfluence(board, opposition, opponentSquares),
    [board, opposition, opponentSquares]
  )
}
