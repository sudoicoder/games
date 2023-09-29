import type { Step } from "./getDirectionSteps"

export default function offset(
  row: number,
  col: number,
  step: Step
): [number, number] | null {
  const r = row + step[0]
  if (!isWithinBounds(r)) {
    return null
  }
  const c = col + step[1]
  if (!isWithinBounds(c)) {
    return null
  }
  return [r, c]
}

function isWithinBounds(index: number) {
  return index >= 0 && index < 8
}
