import { useRef } from "react"

import createBoard from "../services/board/createBoard"

export default function useBoard() {
  const board = useRef<ReturnType<typeof createBoard>>()
  return board.current ?? (board.current = createBoard())
}
