import type { Steps } from "./getStepsAlong"

export default function getOffsetedPosition(
  position: Position,
  steps: Steps
): Position | null {
  const r = position[0] + steps[0]
  if (r < 0 || r >= 8) {
    return null
  }
  const c = position[1] + steps[1]
  if (c < 0 || c >= 8) {
    return null
  }
  return [r, c]
}

export type Position = [number, number]
