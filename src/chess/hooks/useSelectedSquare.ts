import { useState } from "react"

import type Square from "../services/square/types/Square"

export default function useSelectedSquare() {
  const [selectedSquare, setSelectedSquare] = useState<Nullish<Square>>(null)

  function select(square: Square) {
    return void setSelectedSquare(square)
  }

  function deselect() {
    return void setSelectedSquare(null)
  }

  return { selectedSquare, select, deselect } as const
}
