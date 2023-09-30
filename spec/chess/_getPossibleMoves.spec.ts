import { describe } from "vitest"

import type { Board } from "@/chess/services/createBoard"
import getAlliance from "@/chess/services/getAlliance"

import { _getPossibleMoves } from "@/chess/services/getPossibleMoves"
import getPiece from "@/chess/services/getPiece"

describe(`${_getPossibleMoves.name} | on param extent`, it => {
  it("should return atmost extend no of moves", ({ expect }) => {
    const board = createNullBoard()
    const moves = _getPossibleMoves(
      board,
      [1, 4],
      getAlliance("Dark"),
      ["South"],
      ["Walk"],
      2
    )
    expect(moves).toStrictEqual([
      [2, 4],
      [3, 4],
    ])
  })
  it("should return all possible moves if extend is not specified", ({
    expect,
  }) => {
    const board = createNullBoard()
    const moves = _getPossibleMoves(
      board,
      [1, 4],
      getAlliance("Dark"),
      ["South"],
      ["Walk"]
    )
    expect(moves).toStrictEqual([
      [2, 4],
      [3, 4],
      [4, 4],
      [5, 4],
      [6, 4],
      [7, 4],
    ])
  })
})

describe(`${_getPossibleMoves.name} | on param board`, it => {
  it("should return moves till blocked by own piece", ({ expect }) => {
    const board = createNullBoard()
    board[5][4] = getPiece("Dark", "Bishop")
    const moves = _getPossibleMoves(
      board,
      [1, 4],
      getAlliance("Dark"),
      ["South"],
      ["Walk"]
    )
    expect(moves).toStrictEqual([
      [2, 4],
      [3, 4],
      [4, 4],
    ])
  })
  it("should return moves till blocked by opponent piece along", ({
    expect,
  }) => {
    const board = createNullBoard()
    board[5][4] = getPiece("Light", "Bishop")
    const moves = _getPossibleMoves(
      board,
      [1, 4],
      getAlliance("Dark"),
      ["South"],
      ["Attack"]
    )
    expect(moves).toStrictEqual([[5, 4]])
  })
})

function createNullBoard(): Board {
  return Array(8)
    .fill(null)
    .map(() => Array(8).fill(null))
}
