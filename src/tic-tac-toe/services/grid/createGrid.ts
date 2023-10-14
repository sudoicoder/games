import type Marker from "../marker/Marker"

export type TicTacToeGrid = ("" | Marker)[][]

export default function createGrid(size: number): TicTacToeGrid {
  return Array(size)
    .fill(undefined)
    .map(() => Array(size).fill(""))
}
