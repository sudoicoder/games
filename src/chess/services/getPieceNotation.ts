const NOTATIONS = {
  bishop: "bishop",
  king: "king",
  knight: "knight",
  pawn: "pawn",
  queen: "queen",
  rook: "rook",
} as const

export type PieceType = keyof typeof NOTATIONS

export type PieceNotation = (typeof NOTATIONS)[PieceType]

export default function getPieceNotation(pieceType: PieceType) {
  return NOTATIONS[pieceType]
}
