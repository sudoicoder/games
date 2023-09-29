import type { Direction } from "../services/directions"

import isWithinBounds from "./isWithinBounds"

export default function offset(
  row: number,
  col: number,
  direction: Direction
): [number, number] | null {
  const r = row + direction[0]
  if (!isWithinBounds(r, 8)) {
    return null
  }
  const c = col + direction[1]
  if (!isWithinBounds(c, 8)) {
    return null
  }
  return [r, c]
}
