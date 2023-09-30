import type { Alliance, AllianceType } from "./getAlliance"
import type { PieceNotation, PieceType } from "./getPieceNotation"

import getAlliance from "./getAlliance"
import getPieceNotation from "./getPieceNotation"

export default function getPiece(
  allianceType: AllianceType,
  pieceType: PieceType
): Piece {
  return `${getAlliance(allianceType)}/${getPieceNotation(pieceType)}`
}

export type Piece = `${Alliance}/${PieceNotation}`
