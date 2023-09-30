const STEPS = {
  East: [0, +1],
  North: [-1, 0],
  "North > East": [-1, +1],
  "North > East > East": [-1, +2],
  "North > North > East": [-2, +1],
  "North > North > West": [-2, -1],
  "North > West": [-1, -1],
  "North > West > West": [-1, -2],
  South: [+1, 0],
  "South > East": [+1, +1],
  "South > East > East": [+1, +2],
  "South > South > East": [+2, +1],
  "South > South > West": [+2, -1],
  "South > West": [+1, -1],
  "South > West > West": [+1, -2],
  West: [0, -1],
} as const

export default function getStepsAlong(direction: Direction) {
  return STEPS[direction]
}

export type Direction = keyof typeof STEPS
export type Steps = (typeof STEPS)[Direction]
