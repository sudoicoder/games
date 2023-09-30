const NOTATIONS = {
  Bishop: "Bishop",
  King: "King",
  Knight: "Knight",
  Pawn: "Pawn",
  Queen: "Queen",
  Rook: "Rook",
} as const

export default function getPieceNotation(pieceType: PieceType) {
  return NOTATIONS[pieceType]
}

export type PieceType = keyof typeof NOTATIONS
export type PieceNotation = (typeof NOTATIONS)[PieceType]
