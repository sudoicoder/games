import useState from "@/common/hooks/useState"

import type Piece from "../services/piece/types/Piece"

function useSelectedPiece() {
  const [selectedPiece, setSelectedPiece] = useState<Nullish<Piece>>(null)

  function selectPiece(piece: Piece) {
    setSelectedPiece(piece)
  }

  function deselectPiece() {
    setSelectedPiece(null)
  }

  return { selectedPiece, selectPiece, deselectPiece }
}

export default useSelectedPiece
