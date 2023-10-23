import type Piece from "../../piece/types/Piece"
import type Square from "../../square/types/Square"

function isPromotion(piece: Piece, to: Square): boolean {
  if (piece.designation !== "pawn") {
    return false
  }
  if (piece.alliance === "dark" && to.position.row !== 7) {
    return false
  }
  if (piece.alliance === "light" && to.position.row !== 0) {
    return false
  }
  return true
}

export default isPromotion
