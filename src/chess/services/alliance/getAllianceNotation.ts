import type Piece from "../piece/types/Piece"

function getAllianceNotation(alliance: Piece["alliance"]): string {
  return alliance[0].toUpperCase()
}

export default getAllianceNotation
