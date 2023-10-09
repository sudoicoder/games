export default function getOffset(direction: Direction) {
  return offsets[direction]
}

const offsets: Record<Direction, Offset> = {
  "NORTH > EAST > EAST": [-1, +2],
  "NORTH > EAST > NORTH": [-2, +1],
  "NORTH > EAST": [-1, +1],
  "NORTH > WEST > NORTH": [-2, -1],
  "NORTH > WEST > WEST": [-1, -2],
  "NORTH > WEST": [-1, -1],
  "SOUTH > EAST > EAST": [+1, +2],
  "SOUTH > EAST > SOUTH": [+2, +1],
  "SOUTH > EAST": [+1, +1],
  "SOUTH > WEST > SOUTH": [+2, -1],
  "SOUTH > WEST > WEST": [+1, -2],
  "SOUTH > WEST": [+1, -1],
  EAST: [0, +1],
  NORTH: [-1, 0],
  SOUTH: [+1, 0],
  WEST: [0, -1],
}
