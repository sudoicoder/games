import { useState } from "react"

import type Piece from "../services/piece/types/Piece"

export default function useSelectedPiece() {
  const [selectedPiece, setSelectedPiece] = useState<Nullish<Piece>>(null)

  function select(piece: Piece) {
    return void setSelectedPiece(piece)
  }

  function deselect() {
    return void setSelectedPiece(null)
  }

  return { selectedPiece, select, deselect } as const
}
