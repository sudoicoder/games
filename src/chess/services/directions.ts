export type Direction = [number, number]

const directions: Record<
  | "downwardDiagonals"
  | "horizontals"
  | "upwardDiagonals"
  | "verticals"
  | "jumps",
  Direction[]
> = {
  downwardDiagonals: [
    [+1, -1],
    [+1, +1],
  ],
  horizontals: [
    [0, +1],
    [0, -1],
  ],
  upwardDiagonals: [
    [-1, -1],
    [-1, +1],
  ],
  verticals: [
    [+1, 0],
    [-1, 0],
  ],
  jumps: [
    [-2, -1],
    [-2, +1],
    [+2, -1],
    [+2, +1],
    [-1, -2],
    [-1, +2],
    [+1, -2],
    [+1, +2],
  ],
}

export default directions
