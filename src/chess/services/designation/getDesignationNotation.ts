import type Piece from "../piece/types/Piece"

function getDesignationNotation(designation: Piece["designation"]): string {
  return designation === "knight" ? "N" : designation[0].toUpperCase()
}

export default getDesignationNotation
