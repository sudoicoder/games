import { useState } from "react"

import type { Position } from "../services/getPosition"

import createBoard from "../services/createBoard"

export default function useBoard() {
  const [board] = useState(createBoard)

  function move(from: Position, to: Position) {
    board[to[0]][to[1]] = board[from[0]][from[1]]
    board[from[0]][from[1]] = null
  }

  function capture(from: Position, to: Position) {
    const capturing = board[to[0]][to[1]]
    move(from, to)
    return capturing
  }

  return { board, move, capture } as const
}
