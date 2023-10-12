import type Board from "../board/types/Board"
import type Extent from "../offset/types/Extent"
import type Offset from "../offset/types/Offset"
import type Piece from "../piece/types/Piece"
import type Square from "../square/types/Square"
import type Influence from "./types/Influence"

import getForwardDirection from "../direction/getForwardDirection"
import generateOffsettedSquares from "../offset/generateOffsettedSquares"
import getOffset from "../offset/getOffset"

export default function computeInfluence(
  board: Board,
  alliance: Piece["alliance"],
  occupiedSquares: Map<Piece["designation"], Set<Square>>
): Influence {
  const influence: Influence = {
    pinned: [],
    checking: [],
    controlled: [],
  }
  for (const [designation, squares] of occupiedSquares) {
    const strategies = generateInfluenceStrategies(alliance, designation)
    for (const square of squares) {
      const controlled: Square[] = []
      for (const [offset, extent] of strategies) {
        const offsetteds = generateOffsettedSquares(
          board,
          square,
          offset,
          extent
        )
        let pinnable: Nullish<Square> = null
        for (const offsetted of offsetteds) {
          const piece = offsetted.piece
          if (piece === null) {
            controlled.push(offsetted)
            continue
          }
          if (piece.alliance === alliance) {
            break
          }
          if (pinnable === null) {
            controlled.push(offsetted)
            if (piece.designation === "king") {
              influence.checking.push(square)
              break
            }
            pinnable = offsetted
            continue
          }
          if (piece.designation === "king") {
            influence.pinned.push(pinnable)
          }
          break
        }
      }
      influence.controlled.push([square, controlled])
    }
  }
  return influence
}

function* generateInfluenceStrategies(
  alliance: Piece["alliance"],
  designation: Piece["designation"]
): Generator<[Offset, Extent], void, void> {
  switch (designation) {
    case "bishop":
      yield [getOffset("north > east"), Infinity]
      yield [getOffset("north > west"), Infinity]
      yield [getOffset("south > east"), Infinity]
      yield [getOffset("south > west"), Infinity]
      return
    case "king":
      yield [getOffset("east"), 1]
      yield [getOffset("north"), 1]
      yield [getOffset("south"), 1]
      yield [getOffset("west"), 1]
      yield [getOffset("north > east"), 1]
      yield [getOffset("north > west"), 1]
      yield [getOffset("south > east"), 1]
      yield [getOffset("south > west"), 1]
      return
    case "knight":
      yield [getOffset("north > east > east"), 1]
      yield [getOffset("north > east > north"), 1]
      yield [getOffset("north > west > west"), 1]
      yield [getOffset("north > west > north"), 1]
      yield [getOffset("south > east > east"), 1]
      yield [getOffset("south > east > south"), 1]
      yield [getOffset("south > west > west"), 1]
      yield [getOffset("south > west > south"), 1]
      return
    case "pawn":
      const forward = getForwardDirection(alliance)
      yield [getOffset(`${forward} > east`), 1]
      yield [getOffset(`${forward} > west`), 1]
      return
    case "queen":
      yield* generateInfluenceStrategies(alliance, "bishop")
      yield* generateInfluenceStrategies(alliance, "rook")
      return
    case "rook":
      yield [getOffset("east"), Infinity]
      yield [getOffset("north"), Infinity]
      yield [getOffset("south"), Infinity]
      yield [getOffset("west"), Infinity]
      return
  }
}
