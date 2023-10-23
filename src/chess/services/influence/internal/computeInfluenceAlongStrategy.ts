import type Piece from "../../piece/types/Piece"
import type Square from "../../square/types/Square"

function computeInfluenceAlongStrategy(
  alliance: string,
  offsetteds: Generator<Square, void, void>
) {
  const controlAlongStrategy = new Set<Square>()
  let checkAlongStrategy: Nullish<Set<Square>> = null
  let pinAlongStrategy: Nullish<[Piece, Set<Square>]> = null
  let pinnable: Nullish<Piece> = null
  for (const offsetted of offsetteds) {
    if (offsetted.piece === null) {
      if (pinnable === null) {
        controlAlongStrategy.add(offsetted)
      }
      continue
    }
    if (offsetted.piece.alliance === alliance) {
      if (pinnable === null) {
        controlAlongStrategy.add(offsetted)
      }
      break
    }
    if (pinnable === null) {
      if (offsetted.piece.designation === "king") {
        checkAlongStrategy = controlAlongStrategy
        break
      }
      pinnable = offsetted.piece
      continue
    }
    if (offsetted.piece.designation === "king") {
      pinAlongStrategy = [pinnable, controlAlongStrategy]
    }
    break
  }
  return { checkAlongStrategy, controlAlongStrategy, pinAlongStrategy }
}

export default computeInfluenceAlongStrategy
