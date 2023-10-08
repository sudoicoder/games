export default function getPieceIconPath(piece: Piece) {
  return `/games/src/chess/assests/icons/${piece.alliance}-${piece.type}.svg`.toLowerCase()
}
