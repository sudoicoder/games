import { useMemo } from "react"

import type Board from "../services/board/types/Board"
import type Influence from "../services/influence/types/Influence"
import type PossibleMoves from "../services/move/types/PossibleMoves"

import computePossibleMoves from "../services/move/computePossibleMoves"
import Piece from "../services/piece/types/Piece"

export default function usePossibleMoves(
  board: Board,
  opponentInfluence: Influence,
  lastMovedPiece: Nullish<Piece>
): PossibleMoves {
  return useMemo(
    () => computePossibleMoves(board, opponentInfluence, lastMovedPiece),
    [board, opponentInfluence]
  )
}
