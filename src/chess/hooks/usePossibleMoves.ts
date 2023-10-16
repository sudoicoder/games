import useMemo from "@/common/hooks/useMemo"

import type Board from "../services/board/types/Board"
import type Influence from "../services/influence/types/Influence"
import type PossibleMoves from "../services/move/types/PossibleMoves"
import type Piece from "../services/piece/types/Piece"

import computePossibleMoves from "../services/move/computePossibleMoves"

export default function usePossibleMoves(
  board: Board,
  opponentInfluence: Influence,
  lastMovedPiece: Nullish<Piece>
): PossibleMoves {
  return useMemo(
    () => computePossibleMoves(board, opponentInfluence, lastMovedPiece),
    [board, opponentInfluence, lastMovedPiece]
  )
}
