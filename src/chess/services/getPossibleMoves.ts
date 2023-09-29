import AssertUnreachableError from "@/utils/AssertUnreachableError"

import empty from "../utils/empty"

import type { Board } from "./createBoard"

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
  col: number
): PossibleMove[] {
  return []
}

function getKingPossibleMoves(
  board: Board,
  row: number,
  col: number
): PossibleMove[] {
  return []
}

function getKnightPossibleMoves(
  board: Board,
  row: number,
  col: number
): PossibleMove[] {
  return []
}

function getPawnPossibleMoves(
  board: Board,
  row: number,
  col: number
): PossibleMove[] {
  return []
}

function getQueenPossibleMoves(
  board: Board,
  row: number,
  col: number
): PossibleMove[] {
  return []
}

function getRookPossibleMoves(
  board: Board,
  row: number,
  col: number
): PossibleMove[] {
  return []
}
