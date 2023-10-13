import { useMemo } from "react"

import type Board from "../services/board/types/Board"
import type Influence from "../services/influence/types/Influence"
import type PossibleMoves from "../services/move/types/PossibleMoves"
import type Piece from "../services/piece/types/Piece"

import computePossibleMoves from "../services/move/computePossibleMoves"

export default function usePossibleMoves(
  board: Board,
  selectedPiece: Nullish<Piece>,
  opponentInfluence: Influence
): PossibleMoves {
  return useMemo(() => {
    if (selectedPiece === null) {
      return new Map()
    }
    return computePossibleMoves(board, selectedPiece, opponentInfluence)
  }, [board, selectedPiece])
}
