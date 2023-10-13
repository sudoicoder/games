import { useMemo } from "react"

import type Board from "../services/board/types/Board"
import type Influence from "../services/influence/types/Influence"
import type Piece from "../services/piece/types/Piece"

import computeInfluence from "../services/influence/computeInfluence"

export default function useOpponentInfluence(
  board: Board,
  opposition: Piece["alliance"]
): Influence {
  return useMemo(() => computeInfluence(board, opposition), [board, opposition])
}
