import type { Board, Category } from "./createBoard"

export type PossibleMove = [number, number]

export default function getPossibleMoves(
  board: Board,
  category: Category,
  row: number,
  col: number
): PossibleMove[] {
  return []
}
