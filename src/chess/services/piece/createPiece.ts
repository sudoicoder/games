import type Piece from "./types/Piece"

import getPieceNotation from "./getPieceNotation"

export default function createPiece(
  alliance: Piece["alliance"],
  designation: Piece["designation"]
): Piece {
  const piece = {
    alliance,
    designation,
    moves: 0,
    notation: getPieceNotation(alliance, designation),
    promote,
    square: null,
  }
  function promote(designation: Piece["designation"]): void {
    if (piece.designation !== "pawn") {
      return
    }
    piece.designation = designation
  }
  return piece
}
