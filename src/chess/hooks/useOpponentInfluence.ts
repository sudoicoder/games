import { useMemo } from "react"

import type Board from "../services/board/types/Board"
import type Influence from "../services/influence/types/Influence"
import type Piece from "../services/piece/types/Piece"

import getOpposition from "../services/alliance/getOpposition"
import computeInfluence from "../services/influence/computeInfluence"

export default function useOpponentInfluence(
  board: Board,
  alliance: Piece["alliance"]
): Influence {
  return useMemo(
    () => computeInfluence(board, getOpposition(alliance)),
    [board, alliance]
  )
}
