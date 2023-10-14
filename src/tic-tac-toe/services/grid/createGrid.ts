import type Grid from "./types/Grid"

export default function createGrid(size: number): Grid {
  return Array(size)
    .fill(undefined)
    .map(() => Array(size).fill(""))
}
