import type Piece from "./types/Piece"

import getPieceNotation from "./getPieceNotation"

export default function createPiece(
  alliance: Piece["alliance"],
  designation: Piece["designation"]
): Piece {
  return {
    alliance,
    designation,
    moves: 0,
    notation: getPieceNotation(alliance, designation),
  }
}
