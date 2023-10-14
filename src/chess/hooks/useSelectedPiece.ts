import { useState } from "react"

import type Piece from "../services/piece/types/Piece"

export default function useSelectedPiece() {
  const [selectedPiece, setSelectedPiece] = useState<Nullish<Piece>>(null)

  function selectPiece(piece: Piece) {
    return void setSelectedPiece(piece)
  }

  function deselectPiece() {
    return void setSelectedPiece(null)
  }

  return { selectedPiece, selectPiece, deselectPiece } as const
}
