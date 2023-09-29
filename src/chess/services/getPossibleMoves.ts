import AssertUnreachableError from "@/utils/AssertUnreachableError"

import offset from "../utils/offset"
import empty from "../utils/empty"

import type { Board } from "./createBoard"
import type { Direction } from "./directions"
import directions from "./directions"

export type PossibleMove = [number, number]

export default function getPossibleMoves(
  board: Board,
  row: number,
  col: number
): PossibleMove[] {
  const piece = board[row][col]
  if (piece === empty) {
    return []
  }
  switch (piece.category) {
    case "bishop":
      return getBishopPossibleMoves(board, row, col)
    case "king":
      return getKingPossibleMoves(board, row, col)
    case "knight":
      return getKnightPossibleMoves(board, row, col)
    case "pawn":
      return getPawnPossibleMoves(board, row, col)
    case "queen":
      return getQueenPossibleMoves(board, row, col)
    case "rook":
      return getRookPossibleMoves(board, row, col)
    default:
      throw new AssertUnreachableError(piece.category)
  }
}

function getBishopPossibleMoves(
  board: Board,
  row: number,
  col: number,
  limit?: number
): PossibleMove[] {
  return [
    ...generatePossibleMoves(
      board,
      row,
      col,
      directions.upwardDiagonals,
      limit
    ),
    ...generatePossibleMoves(
      board,
      row,
      col,
      directions.downwardDiagonals,
      limit
    ),
  ]
}

function getRookPossibleMoves(
  board: Board,
  row: number,
  col: number,
  limit?: number
): PossibleMove[] {
  return [
    ...generatePossibleMoves(board, row, col, directions.horizontals, limit),
    ...generatePossibleMoves(board, row, col, directions.verticals, limit),
  ]
}

function getQueenPossibleMoves(
  board: Board,
  row: number,
  col: number,
  limit?: number
): PossibleMove[] {
  return [
    ...getBishopPossibleMoves(board, row, col, limit),
    ...getRookPossibleMoves(board, row, col, limit),
  ]
}

function getKingPossibleMoves(
  board: Board,
  row: number,
  col: number
): PossibleMove[] {
  return getQueenPossibleMoves(board, row, col, 1)
}

function getKnightPossibleMoves(
  board: Board,
  row: number,
  col: number
): PossibleMove[] {
  return generatePossibleMoves(board, row, col, directions.jumps, 1)
}

function getPawnPossibleMoves(
  board: Board,
  row: number,
  col: number
): PossibleMove[] {
  const piece = board[row][col]
  if (piece === empty) {
    return []
  }
  const walks = generatePossibleMoves(
    board,
    row,
    col,
    [directions.verticals[piece.color === "light" ? 0 : 1]],
    row === 1 || row === 7 ? 2 : 1
  )
  const attacks = generatePossibleMoves(
    board,
    row,
    col,
    directions[
      piece.color === "light" ? "upwardDiagonals" : "downwardDiagonals"
    ],
    1
  )
  return [
    ...walks.filter(w => board[w[0]][w[1]] === empty),
    ...attacks.filter(a => board[a[0]][a[1]] !== empty),
  ]
}

function generatePossibleMoves(
  board: Board,
  row: number,
  col: number,
  directions: Readonly<Direction[]>,
  limit?: number
): PossibleMove[] {
  const self = board[row][col]
  if (self === empty) {
    return []
  }
  const moves: PossibleMove[] = []
  for (const direction of directions) {
    let next = offset(row, col, direction)
    while (next) {
      const [r, c] = next
      const piece = board[r][c]
      if (piece !== empty) {
        if (piece.color === self.color) {
          break
        }
      }
      moves.push(next)
      if (limit && moves.length === limit) {
        break
      }
      next = offset(next[0], next[1], direction)
    }
  }
  return moves
}
