import createInitialPiece from "./createInitialPiece"
import createSquare from "./createSquare"
import getBoardSize from "./getBoardSize"
import getColIndex from "./getColIndex"
import getRowIndex from "./getRowIndex"

export default function createBoard(): Board {
  const squares = Array(getBoardSize() * getBoardSize())
    .fill(null)
    .map((_, position) => {
      const row = getRowIndex(position)
      const col = getColIndex(position)
      return createSquare(row, col, createInitialPiece(row, col))
    })
  const kingsPosition: Record<Piece["alliance"], Position> = {
    DARK: 4,
    LIGHT: 60,
  }
  const movedPieces = new Set<Piece>()
  const captured = new Array<Piece>()
  return {
    getCapturedPieces() {
      return captured
    },
    getKingPosition(alliance) {
      return kingsPosition[alliance]
    },
    getPiece(position) {
      return squares[position].piece
    },
    getSquares() {
      return squares
    },
    hasPieceMoved(piece) {
      return movedPieces.has(piece)
    },
    movePiece(from, to) {
      const fromSquare = squares[from]
      const fromPiece = fromSquare.piece
      const toSquare = squares[to]
      const toPiece = toSquare.piece
      toSquare.piece = fromPiece
      fromSquare.piece = null
      if (fromPiece === null) {
        return toPiece
      }
      if (toPiece !== null) {
        captured.push(toPiece)
      }
      movedPieces.add(fromPiece)
      if (fromPiece.type === "KING") {
        kingsPosition[fromPiece.alliance] = to
      }
      return toPiece
    },
  }
}
