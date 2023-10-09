import { useState } from "react"

import createBoard from "../services/createBoard"

export default function useBoard() {
  const [board] = useState(createBoard)

  function move(from: Position, to: Position) {
    board.movePiece(from, to)
  }

  function capture(from: Position, to: Position) {
    return board.movePiece(from, to)
  }

  return { board, move, capture } as const
}
