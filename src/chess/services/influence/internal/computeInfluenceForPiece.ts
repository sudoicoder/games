import type Board from "../../board/types/Board"
import type Extent from "../../offset/types/Extent"
import type Offset from "../../offset/types/Offset"
import type Piece from "../../piece/types/Piece"
import type Square from "../../square/types/Square"

import generateOffsettedSquares from "../../offset/generateOffsettedSquares"
import computeInfluenceAlongStrategy from "./computeInfluenceAlongStrategy"

function computeInfluenceForPiece(
  board: Board,
  piece: Piece,
  square: Square,
  strategies: Generator<[Offset, Extent], void, void>
) {
  const controlByPiece = new Set<Square>()
  let checkByPiece: Nullish<Set<Square>> = null
  let pinByPiece: Nullish<[Piece, Set<Square>]> = null
  for (const [offset, extent] of strategies) {
    const offsetteds = generateOffsettedSquares(board, square, offset, extent)
    const { checkAlongStrategy, controlAlongStrategy, pinAlongStrategy } =
      computeInfluenceAlongStrategy(piece.alliance, offsetteds)
    controlAlongStrategy.forEach(a => controlByPiece.add(a))
    if (checkAlongStrategy !== null) {
      checkByPiece = checkAlongStrategy
    }
    if (pinAlongStrategy !== null) {
      pinByPiece = pinAlongStrategy
    }
  }
  return { checkByPiece, controlByPiece, pinByPiece }
}

export default computeInfluenceForPiece
