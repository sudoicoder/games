import type Extent from "../../offset/types/Extent"
import type Offset from "../../offset/types/Offset"
import type Piece from "../../piece/types/Piece"

import getForwardDirection from "../../direction/getForwardDirection"
import getOffset from "../../offset/getOffset"

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

export default generateInfluenceStrategies
