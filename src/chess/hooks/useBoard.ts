import { useState } from "react"

import createBoard from "../services/board/createBoard"

export default function useBoard() {
  const [board] = useState(createBoard)
  return { board }
}
