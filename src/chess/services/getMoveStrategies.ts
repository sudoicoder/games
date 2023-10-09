import getForwardDirection from "./getForwardDirection"
import getOffset from "./getOffset"

export default function getMoveStrategies(
  piece: Piece,
  hasPieceBeenMoved: boolean
): MoveStrategy[] {
  switch (piece.type) {
    case "BISHOP":
      return [
        [getOffset("NORTH > EAST"), Infinity, ["ATTACK", "WALK"]],
        [getOffset("NORTH > WEST"), Infinity, ["ATTACK", "WALK"]],
        [getOffset("SOUTH > EAST"), Infinity, ["ATTACK", "WALK"]],
        [getOffset("SOUTH > WEST"), Infinity, ["ATTACK", "WALK"]],
      ]
    case "KING":
      return [
        [getOffset("EAST"), 1, ["ATTACK", "WALK"]],
        [getOffset("NORTH"), 1, ["ATTACK", "WALK"]],
        [getOffset("SOUTH"), 1, ["ATTACK", "WALK"]],
        [getOffset("WEST"), 1, ["ATTACK", "WALK"]],
        [getOffset("NORTH > EAST"), 1, ["ATTACK", "WALK"]],
        [getOffset("NORTH > WEST"), 1, ["ATTACK", "WALK"]],
        [getOffset("SOUTH > EAST"), 1, ["ATTACK", "WALK"]],
        [getOffset("SOUTH > WEST"), 1, ["ATTACK", "WALK"]],
      ]
    case "KNIGHT":
      return [
        [getOffset("NORTH > EAST > NORTH"), 1, ["ATTACK", "WALK"]],
        [getOffset("NORTH > EAST > EAST"), 1, ["ATTACK", "WALK"]],
        [getOffset("NORTH > WEST > NORTH"), 1, ["ATTACK", "WALK"]],
        [getOffset("NORTH > WEST > WEST"), 1, ["ATTACK", "WALK"]],
        [getOffset("SOUTH > EAST > SOUTH"), 1, ["ATTACK", "WALK"]],
        [getOffset("SOUTH > EAST > EAST"), 1, ["ATTACK", "WALK"]],
        [getOffset("SOUTH > WEST > SOUTH"), 1, ["ATTACK", "WALK"]],
        [getOffset("SOUTH > WEST > WEST"), 1, ["ATTACK", "WALK"]],
      ]
    case "PAWN":
      const forward = getForwardDirection(piece.alliance)
      return [
        [getOffset(forward), hasPieceBeenMoved ? 1 : 2, ["WALK"]],
        [getOffset(`${forward} > EAST`), 1, ["ATTACK"]],
        [getOffset(`${forward} > WEST`), 1, ["ATTACK"]],
      ]
    case "QUEEN":
      return [
        [getOffset("EAST"), Infinity, ["ATTACK", "WALK"]],
        [getOffset("NORTH"), Infinity, ["ATTACK", "WALK"]],
        [getOffset("SOUTH"), Infinity, ["ATTACK", "WALK"]],
        [getOffset("WEST"), Infinity, ["ATTACK", "WALK"]],
        [getOffset("NORTH > EAST"), Infinity, ["ATTACK", "WALK"]],
        [getOffset("NORTH > WEST"), Infinity, ["ATTACK", "WALK"]],
        [getOffset("SOUTH > EAST"), Infinity, ["ATTACK", "WALK"]],
        [getOffset("SOUTH > WEST"), Infinity, ["ATTACK", "WALK"]],
      ]
    case "ROOK":
      return [
        [getOffset("EAST"), Infinity, ["ATTACK", "WALK"]],
        [getOffset("NORTH"), Infinity, ["ATTACK", "WALK"]],
        [getOffset("SOUTH"), Infinity, ["ATTACK", "WALK"]],
        [getOffset("WEST"), Infinity, ["ATTACK", "WALK"]],
      ]
  }
}
