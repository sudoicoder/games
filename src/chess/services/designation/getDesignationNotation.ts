import type Piece from "../piece/types/Piece"

export default function getDesignationNotation(
  designation: Piece["designation"]
): string {
  return designation === "knight" ? "N" : designation[0].toUpperCase()
}
