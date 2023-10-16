import type Piece from "../piece/types/Piece"

export default function getPromotableDesignations() {
  return promotableDesignations
}

const promotableDesignations: Piece["designation"][] = [
  "queen",
  "rook",
  "bishop",
  "knight",
]
