import { useMemo } from "react"

import type Board from "../services/board/types/Board"
import type Piece from "../services/piece/types/Piece"

import getOccupiedSquares from "../services/board/getOccupiedSquares"

export default function useOccupiedSquares(
  board: Board,
  opposition: Piece["alliance"]
) {
  return useMemo(
    () => getOccupiedSquares(board, opposition),
    [board, opposition]
  )
}
