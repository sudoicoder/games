export default function getOffset(...directions: Direction[]) {
  return directions.reduce(
    (offset, direction) => offset + offsets[direction],
    0
  )
}

const offsets: Record<Direction, Offset> = {
  EAST: +1,
  NORTH: -1,
  SOUTH: +1,
  WEST: -1,
}
