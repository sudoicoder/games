import createPiece from "./createPiece"
import getBoardSize from "./getBoardSize"
import getRoyalOrder from "./getRoyalOrder"

export default function createInitialPiece(
  row: number,
  col: number
): Nullish<Piece> {
  if (row === 0) {
    return createPiece("DARK", getRoyalOrder()[col])
  }
  if (row === 1) {
    return createPiece("DARK", "PAWN")
  }
  if (row === getBoardSize() - 2) {
    return createPiece("LIGHT", "PAWN")
  }
  if (row === getBoardSize() - 1) {
    return createPiece("LIGHT", getRoyalOrder()[col])
  }
  return null
}
