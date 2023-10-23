import useState from "@/common/hooks/useState"

import type Piece from "../services/piece/types/Piece"

function useLastMovedPiece() {
  const [lastMovedPiece, setLastMovedPiece] = useState<Nullish<Piece>>(null)

  function saveLastMovedPiece(piece: Piece) {
    setLastMovedPiece(piece)
  }

  return { lastMovedPiece, saveLastMovedPiece }
}

export default useLastMovedPiece
