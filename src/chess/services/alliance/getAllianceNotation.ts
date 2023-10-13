import type Piece from "../piece/types/Piece"

export default function getAllianceNotation(
  alliance: Piece["alliance"]
): string {
  return alliance[0].toUpperCase()
}
