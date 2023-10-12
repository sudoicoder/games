import { useMemo } from "react"

import type Board from "../services/board/types/Board"
import type Piece from "../services/piece/types/Piece"
import type Square from "../services/square/types/Square"

import getKingSquare from "../services/board/getKingSquare"

export default function useKingSquare(
  board: Board,
  alliance: Piece["alliance"]
): Square {
  return useMemo(() => getKingSquare(board, alliance), [board, alliance])
}
