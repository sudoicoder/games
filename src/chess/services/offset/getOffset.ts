import type Direction from "../direction/types/Direction"
import type Offset from "./types/Offset"

export default function getOffset(direction: Direction) {
  return offsets[direction]
}

const offsets: Record<Direction, Offset> = {
  north: { alongRow: -1, alongColumn: 0 },
  south: { alongRow: +1, alongColumn: 0 },
  east: { alongRow: 0, alongColumn: +1 },
  west: { alongRow: 0, alongColumn: -1 },
  "north > east": { alongRow: -1, alongColumn: +1 },
  "north > west": { alongRow: -1, alongColumn: -1 },
  "south > east": { alongRow: +1, alongColumn: +1 },
  "south > west": { alongRow: +1, alongColumn: -1 },
  "north > east > east": { alongRow: -1, alongColumn: +2 },
  "north > east > north": { alongRow: -2, alongColumn: +1 },
  "north > west > north": { alongRow: -2, alongColumn: -1 },
  "north > west > west": { alongRow: -1, alongColumn: -2 },
  "south > east > east": { alongRow: +1, alongColumn: +2 },
  "south > east > south": { alongRow: +2, alongColumn: +1 },
  "south > west > south": { alongRow: +2, alongColumn: -1 },
  "south > west > west": { alongRow: +1, alongColumn: -2 },
}
