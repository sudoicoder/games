import { useState } from "react"

import createBoard from "../services/createBoard"

export default function useBoard() {
  const [board] = useState(createBoard)

  function executeMove(move: Move) {
    for (const [from, to] of move) {
      board.movePiece(from, to)
    }
  }

  return { board, executeMove } as const
}
