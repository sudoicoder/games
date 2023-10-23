import type Piece from "../piece/types/Piece"

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

function getRoyalPieceDesignation(file: number): Piece["designation"] {
  return royalPieceOrder[file]
}

export default getRoyalPieceDesignation
