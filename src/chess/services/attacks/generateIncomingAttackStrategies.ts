import type Piece from "../piece/types/Piece"
import type IncomingAttackStrategy from "./types/IncomingAttackStrategy"

import getOpposition from "../alliance/getOpposition"
import getForwardDirection from "../direction/getForwardDirection"
import getOffset from "../offset/getOffset"

export default function* generateIncomingAttackStrategies(
  alliance: Piece["alliance"]
): Generator<IncomingAttackStrategy, void, void> {
  yield [getOffset("east"), Infinity, ["queen", "rook"]]
  yield [getOffset("north"), Infinity, ["queen", "rook"]]
  yield [getOffset("south"), Infinity, ["queen", "rook"]]
  yield [getOffset("west"), Infinity, ["queen", "rook"]]

  yield [getOffset("north > east"), Infinity, ["queen", "bishop"]]
  yield [getOffset("north > west"), Infinity, ["queen", "bishop"]]
  yield [getOffset("south > east"), Infinity, ["queen", "bishop"]]
  yield [getOffset("south > west"), Infinity, ["queen", "bishop"]]

  yield [getOffset("north > east > east"), 1, ["knight"]]
  yield [getOffset("north > east > north"), 1, ["knight"]]
  yield [getOffset("north > west > north"), 1, ["knight"]]
  yield [getOffset("north > west > west"), 1, ["knight"]]
  yield [getOffset("south > east > east"), 1, ["knight"]]
  yield [getOffset("south > east > south"), 1, ["knight"]]
  yield [getOffset("south > west > south"), 1, ["knight"]]
  yield [getOffset("south > west > west"), 1, ["knight"]]

  yield [getOffset("east"), 1, ["king"]]
  yield [getOffset("north"), 1, ["king"]]
  yield [getOffset("south"), 1, ["king"]]
  yield [getOffset("west"), 1, ["king"]]

  const forward = getForwardDirection(alliance)
  yield [getOffset(`${forward} > east`), 1, ["king", "pawn"]]
  yield [getOffset(`${forward} > west`), 1, ["king", "pawn"]]

  const backward = getForwardDirection(getOpposition(alliance))
  yield [getOffset(`${backward} > east`), 1, ["king", "pawn"]]
  yield [getOffset(`${backward} > west`), 1, ["king", "pawn"]]
}
