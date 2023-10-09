import getForwardDirection from "./getForwardDirection"
import getOffset from "./getOffset"
import getOpposition from "./getOpposition"

export default function getAttackStrategies(
  alliance: Piece["alliance"]
): AttackStrategy[] {
  const forward = getForwardDirection(alliance)
  const backward = getForwardDirection(getOpposition(alliance))
  return [
    [getOffset("EAST"), 1, ["KING"]],
    [getOffset("NORTH"), 1, ["KING"]],
    [getOffset("SOUTH"), 1, ["KING"]],
    [getOffset("WEST"), 1, ["KING"]],
    [getOffset(`${backward} > EAST`), 1, ["KING"]],
    [getOffset(`${backward} > WEST`), 1, ["KING"]],
    [getOffset(`${forward} > EAST`), 1, ["KING", "PAWN"]],
    [getOffset(`${forward} > WEST`), 1, ["KING", "PAWN"]],
    [getOffset("NORTH > EAST > EAST"), 1, ["KNIGHT"]],
    [getOffset("NORTH > EAST > NORTH"), 1, ["KNIGHT"]],
    [getOffset("NORTH > WEST > NORTH"), 1, ["KNIGHT"]],
    [getOffset("NORTH > WEST > WEST"), 1, ["KNIGHT"]],
    [getOffset("SOUTH > EAST > EAST"), 1, ["KNIGHT"]],
    [getOffset("SOUTH > EAST > SOUTH"), 1, ["KNIGHT"]],
    [getOffset("SOUTH > WEST > SOUTH"), 1, ["KNIGHT"]],
    [getOffset("SOUTH > WEST > WEST"), 1, ["KNIGHT"]],
    [getOffset("EAST"), Infinity, ["ROOK", "QUEEN"]],
    [getOffset("NORTH"), Infinity, ["ROOK", "QUEEN"]],
    [getOffset("SOUTH"), Infinity, ["ROOK", "QUEEN"]],
    [getOffset("WEST"), Infinity, ["ROOK", "QUEEN"]],
    [getOffset("NORTH > EAST"), Infinity, ["BISHOP", "QUEEN"]],
    [getOffset("NORTH > WEST"), Infinity, ["BISHOP", "QUEEN"]],
    [getOffset("SOUTH > EAST"), Infinity, ["BISHOP", "QUEEN"]],
    [getOffset("SOUTH > WEST"), Infinity, ["BISHOP", "QUEEN"]],
  ]
}
