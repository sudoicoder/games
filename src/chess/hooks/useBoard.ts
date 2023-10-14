import { useEffect, useState } from "react"

import createBoard from "../services/board/createBoard"

export default function useBoard() {
  const [board, setBoard] = useState(createBoard)

  useEffect(() => board.stash, [board])

  function resetBoard() {
    board.stash()
    setBoard(createBoard())
  }

  return {
    board,
    resetBoard,
  }
}
