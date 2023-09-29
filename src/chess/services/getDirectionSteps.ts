const STEPS = {
  downwards: [[+1, 0]],
  downwardDiagonals: [
    [+1, -1],
    [+1, +1],
  ],
  horizontals: [
    [0, +1],
    [0, -1],
  ],
  upwards: [[-1, 0]],
  upwardDiagonals: [
    [-1, -1],
    [-1, +1],
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
} as const

export default function getDirectionSteps(direction: Direction) {
  return STEPS[direction]
}

export type Direction = keyof typeof STEPS
export type Step = [number, number]
