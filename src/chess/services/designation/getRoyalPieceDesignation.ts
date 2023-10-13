import type Piece from "../piece/types/Piece"

export default function getRoyalPieceDesignation(
  file: number
): Piece["designation"] {
  return royalPieceOrder[file]
}

const royalPieceOrder: Piece["designation"][] = [
  "rook",
  "knight",
  "bishop",
  "queen",
  "king",
  "bishop",
  "knight",
  "rook",
]
