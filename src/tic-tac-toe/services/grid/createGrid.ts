import type TicTacToeSymbol from "../getTicTacToeSymbols"

export type TicTacToeGrid = ("" | TicTacToeSymbol)[][]

export default function createGrid(size: number): TicTacToeGrid {
  return Array(size)
    .fill(undefined)
    .map(() => Array(size).fill(""))
}
