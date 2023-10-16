import useState from "@/common/hooks/useState"

import type Piece from "../services/piece/types/Piece"

export default function useSelectedPiece() {
  const [selectedPiece, setSelectedPiece] = useState<Nullish<Piece>>(null)

  function selectPiece(piece: Piece) {
    setSelectedPiece(piece)
  }

  function deselectPiece() {
    setSelectedPiece(null)
  }

  return { selectedPiece, selectPiece, deselectPiece } as const
}
