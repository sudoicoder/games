import type Piece from "./types/Piece"

export default function getPieceIconPath(
  alliance: Piece["alliance"],
  designation: Piece["designation"]
) {
  return `/games/src/chess/assets/icons/${alliance}/${designation}.svg`
}
