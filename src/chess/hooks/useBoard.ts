import { useRef } from "react"

import type Board from "../services/board/types/Board"

import createBoard from "../services/board/createBoard"

export default function useBoard() {
  const board = useRef<Board>()
  return board.current ?? (board.current = createBoard())
}
