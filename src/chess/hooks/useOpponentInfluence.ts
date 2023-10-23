import useMemo from "@/common/hooks/useMemo"

import type Board from "../services/board/types/Board"
import type Influence from "../services/influence/types/Influence"
import type Piece from "../services/piece/types/Piece"

import getOpposition from "../services/alliance/getOpposition"
import computeInfluence from "../services/influence/computeInfluence"

function useOpponentInfluence(
  board: Board,
  alliance: Piece["alliance"]
): Influence {
  return useMemo(
    () => computeInfluence(board, getOpposition(alliance)),
    [board, alliance]
  )
}

export default useOpponentInfluence
