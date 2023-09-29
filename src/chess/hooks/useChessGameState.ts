import { useState } from "react"

import createBoard from "../services/createBoard"

export default function useChessGameState() {
  const [board] = useState(createBoard)
  return { board } as const
}
