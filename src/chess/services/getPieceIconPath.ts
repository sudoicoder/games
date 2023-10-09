export default function getPieceIconPath(piece: Piece) {
  return `/games/src/chess/assets/icons/${piece.alliance}-${piece.type}.svg`.toLowerCase()
}
