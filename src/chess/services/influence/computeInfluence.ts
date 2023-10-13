import type Board from "../board/types/Board"
import type Piece from "../piece/types/Piece"
import type Square from "../square/types/Square"
import type Influence from "./types/Influence"

import generateOffsettedSquares from "../offset/generateOffsettedSquares"
import generateInfluenceStrategies from "./generateInfluenceStrategies"

export default function computeInfluence(
  board: Board,
  alliance: Piece["alliance"]
): Influence {
  const checks = new Map<Piece, Set<Square>>()
  const controls = new Map<Piece, Set<Square>>()
  const pins = new Set<Piece>()
  for (const piece of board.pieces[alliance]) {
    if (piece.square === null) {
      continue
    }
    const controlsForPiece = new Set<Square>()
    const strategies = generateInfluenceStrategies(alliance, piece.designation)
    for (const [offset, extent] of strategies) {
      const offsetteds = generateOffsettedSquares(
        board,
        piece.square,
        offset,
        extent
      )
      const controlsForStrategy = new Set<Square>()
      let pinnable: Nullish<Piece> = null
      for (const offsetted of offsetteds) {
        if (offsetted.piece === null) {
          if (pinnable === null) {
            controlsForStrategy.add(offsetted)
          }
          continue
        }
        if (offsetted.piece.alliance === alliance) {
          if (pinnable === null) {
            controlsForStrategy.add(offsetted)
          }
          break
        }
        if (pinnable === null) {
          if (offsetted.piece.designation === "king") {
            checks.set(piece, controlsForStrategy)
            break
          }
          pinnable = offsetted.piece
          continue
        }
        if (offsetted.piece.designation === "king") {
          pins.add(pinnable)
        }
        break
      }
      controlsForStrategy.forEach(a => controlsForPiece.add(a))
    }
    controls.set(piece, controlsForPiece)
  }
  return { checks, controls, pins }
}
