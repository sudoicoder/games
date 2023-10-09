import createPiece from "./createPiece"
import createSquare from "./createSquare"
import getBoardSize from "./getBoardSize"
import getRoyalOrder from "./getRoyalOrder"

export default function createBoard(): Board {
  const squares = Array<Square[]>(getBoardSize())
  for (let row = 0; row < squares.length; row++) {
    squares[row] = Array<Square>(getBoardSize())
    for (let col = 0; col < squares[row].length; col++) {
      squares[row][col] = createSquare(row, col, createInitialPiece(row, col))
    }
  }
  const kingsPosition: Record<Piece["alliance"], Position> = {
    DARK: [0, 4],
    LIGHT: [getBoardSize() - 1, 4],
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
      const [row, col] = position
      return squares[row][col].piece
    },
    getSquares() {
      return squares
    },
    hasPieceMoved(piece) {
      return movedPieces.has(piece)
    },
    movePiece(from, to) {
      const [fromRow, fromCol] = from
      const [toRow, toCol] = to
      const fromSquare = squares[fromRow][fromCol]
      const fromPiece = fromSquare.piece
      const toSquare = squares[toRow][toCol]
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

function createInitialPiece(row: number, col: number): Nullish<Piece> {
  if (row === 0) {
    return createPiece("DARK", getRoyalOrder()[col])
  }
  if (row === 1) {
    return createPiece("DARK", "PAWN")
  }
  if (row === getBoardSize() - 2) {
    return createPiece("LIGHT", "PAWN")
  }
  if (row === getBoardSize() - 1) {
    return createPiece("LIGHT", getRoyalOrder()[col])
  }
  return null
}
