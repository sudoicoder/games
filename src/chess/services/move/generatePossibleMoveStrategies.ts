import type Piece from "../piece/types/Piece"
import type MoveStrategy from "./types/MoveStrategy"

import getForwardDirection from "../direction/getForwardDirection"
import getOffset from "../offset/getOffset"

export default function* generatePossibleMoveStrategies(
  piece: Piece
): Generator<MoveStrategy, void, void> {
  switch (piece.designation) {
    case "bishop":
      yield [getOffset("north > east"), Infinity, ["attack", "walk"]]
      yield [getOffset("north > west"), Infinity, ["attack", "walk"]]
      yield [getOffset("south > east"), Infinity, ["attack", "walk"]]
      yield [getOffset("south > west"), Infinity, ["attack", "walk"]]
      return
    case "knight":
      yield [getOffset("north > east > east"), 1, ["attack", "walk"]]
      yield [getOffset("north > east > north"), 1, ["attack", "walk"]]
      yield [getOffset("north > west > north"), 1, ["attack", "walk"]]
      yield [getOffset("north > west > west"), 1, ["attack", "walk"]]
      yield [getOffset("south > east > east"), 1, ["attack", "walk"]]
      yield [getOffset("south > east > south"), 1, ["attack", "walk"]]
      yield [getOffset("south > west > south"), 1, ["attack", "walk"]]
      yield [getOffset("south > west > west"), 1, ["attack", "walk"]]
      return
    case "queen":
      yield [getOffset("east"), Infinity, ["attack", "walk"]]
      yield [getOffset("north"), Infinity, ["attack", "walk"]]
      yield [getOffset("west"), Infinity, ["attack", "walk"]]
      yield [getOffset("south"), Infinity, ["attack", "walk"]]
      yield [getOffset("north > east"), Infinity, ["attack", "walk"]]
      yield [getOffset("north > west"), Infinity, ["attack", "walk"]]
      yield [getOffset("south > east"), Infinity, ["attack", "walk"]]
      yield [getOffset("south > west"), Infinity, ["attack", "walk"]]
      return
    case "king":
      yield [getOffset("east"), 1, ["attack", "walk"]]
      yield [getOffset("north"), 1, ["attack", "walk"]]
      yield [getOffset("west"), 1, ["attack", "walk"]]
      yield [getOffset("south"), 1, ["attack", "walk"]]
      yield [getOffset("north > east"), 1, ["attack", "walk"]]
      yield [getOffset("north > west"), 1, ["attack", "walk"]]
      yield [getOffset("south > east"), 1, ["attack", "walk"]]
      yield [getOffset("south > west"), 1, ["attack", "walk"]]
      if (piece.moves > 0) {
        return
      }
      yield [getOffset("east"), 3, ["castle"]]
      yield [getOffset("west"), 4, ["castle"]]
      return
    case "pawn":
      const forward = getForwardDirection(piece.alliance)
      yield [getOffset(forward), piece.moves > 0 ? 1 : 2, ["walk"]]
      yield [getOffset(`${forward} > east`), 1, ["attack"]]
      yield [getOffset(`${forward} > west`), 1, ["attack"]]
      return
    case "rook":
      yield [getOffset("east"), Infinity, ["attack", "walk"]]
      yield [getOffset("north"), Infinity, ["attack", "walk"]]
      yield [getOffset("west"), Infinity, ["attack", "walk"]]
      yield [getOffset("south"), Infinity, ["attack", "walk"]]
      return
  }
}
