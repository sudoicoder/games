import { describe } from "vitest"

import { _getPossibleMoves } from "@/chess/services/getPossibleMoves"
import type { Board } from "@/chess/services/createBoard"
import getAlliance from "@/chess/services/getAlliance"
import getPieceNotation from "@/chess/services/getPieceNotation"
import getPiece from "@/chess/services/getPiece"

describe(`${_getPossibleMoves.name}`, it => {
  it("should generate possible moves", ({ expect }) => {
    const board = createNullBoard()
    const row = 1
    const col = 4
    board[row][col] = getPiece("Dark", "Bishop")
  })
})

function createNullBoard(): Board {
  return Array(8)
    .fill(null)
    .map(() => Array(8).fill(null))
}
