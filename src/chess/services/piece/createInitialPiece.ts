import type Square from "../square/types/Square"
import type Piece from "./types/Piece"

import getRoyalPieceDesignation from "../designation/getRoyalPieceDesignation"
import createPiece from "./createPiece"

function createInitialPiece(position: Square["position"]): Nullish<Piece> {
  if (position.row === 0) {
    return createPiece("dark", getRoyalPieceDesignation(position.column))
  }
  if (position.row === 1) {
    return createPiece("dark", "pawn")
  }
  if (position.row === 6) {
    return createPiece("light", "pawn")
  }
  if (position.row === 7) {
    return createPiece("light", getRoyalPieceDesignation(position.column))
  }
  return null
}

export default createInitialPiece
