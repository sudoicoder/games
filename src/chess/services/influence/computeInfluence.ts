import type Board from "../board/types/Board"
import type Piece from "../piece/types/Piece"
import type Square from "../square/types/Square"
import type Influence from "./types/Influence"

import computeInfluenceForPiece from "./internal/computeInfluenceForPiece"
import generateInfluenceStrategies from "./internal/generateInfluenceStrategies"

function computeInfluence(
  board: Board,
  alliance: Piece["alliance"]
): Influence {
  const checks = new Map<Piece, Set<Square>>()
  const controls = new Map<Piece, Set<Square>>()
  const pins = new Map<Piece, Set<Square>>()
  for (const piece of board.pieces[alliance]) {
    if (piece.square === null) {
      continue
    }
    const strategies = generateInfluenceStrategies(alliance, piece.designation)
    const { checkByPiece, controlByPiece, pinByPiece } =
      computeInfluenceForPiece(board, piece, piece.square, strategies)
    controls.set(piece, controlByPiece)
    if (checkByPiece !== null) {
      checks.set(piece, checkByPiece)
    }
    if (pinByPiece !== null) {
      pins.set(...pinByPiece)
    }
  }
  return { alliance, checks, controls, pins }
}

export default computeInfluence
