import { useState } from "react"

import type Piece from "../services/piece/types/Piece"

export default function useLastMovedPiece() {
  const [lastMovedPiece, setLastMovedPiece] = useState<Nullish<Piece>>(null)

  function saveLastMovedPiece(piece: Piece) {
    setLastMovedPiece(piece)
  }

  return { lastMovedPiece, saveLastMovedPiece }
}
