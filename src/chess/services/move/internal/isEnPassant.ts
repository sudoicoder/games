import type Board from "../../board/types/Board"
import type Piece from "../../piece/types/Piece"
import type Square from "../../square/types/Square"

export default function isEnPassant(
  board: Board,
  from: Square,
  to: Square,
  lastMovedPiece: Nullish<Piece>
): boolean {
  const fromPiece = from.piece
  if (fromPiece === null) {
    return false
  }
  if (fromPiece.designation !== "pawn") {
    return false
  }
  if (fromPiece.alliance === "dark" && from.position.row !== 4) {
    return false
  }
  if (fromPiece.alliance === "light" && from.position.row !== 3) {
    return false
  }
  const toPiece = to.piece
  if (toPiece !== null) {
    return false
  }
  const offSquare = board.square({
    row: from.position.row,
    column: to.position.column,
  })
  if (offSquare === undefined) {
    return false
  }
  const offPiece = offSquare.piece
  if (offPiece !== lastMovedPiece) {
    return false
  }
  if (offPiece === null) {
    return false
  }
  if (offPiece.alliance === fromPiece.alliance) {
    return false
  }
  if (offPiece.designation !== "pawn") {
    return false
  }
  if (offPiece.moves !== 1) {
    return false
  }
  return true
}
