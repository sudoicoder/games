import type Piece from "../piece/types/Piece"

const promotableDesignations: Piece["designation"][] = [
  "queen",
  "rook",
  "bishop",
  "knight",
]

function getPromotableDesignations() {
  return promotableDesignations
}

export default getPromotableDesignations
