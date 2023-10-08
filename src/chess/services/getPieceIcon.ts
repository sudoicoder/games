export default function getPieceIconPath(piece: Piece) {
  return `/games/src/chess/assests/${piece.alliance}-${piece.type}.svg`.toLowerCase()
}
