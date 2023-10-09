import { useState } from "react"

export default function useLastMovedPiece() {
  const [lastMovedPiece, setLastMovedPiece] = useState<Nullish<Piece>>(null)
  return { lastMovedPiece, setLastMovedPiece } as const
}
