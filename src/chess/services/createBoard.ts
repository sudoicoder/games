import getRoyalOrder from "./getRoyalOrder"

export default function createBoard(): Board {
  const order = getRoyalOrder()
  const squares = Array<Square>(order.length * order.length)
  for (let index = 0; index < squares.length; index++) {
    squares[index] = {
      shade:
        (Math.floor(index / order.length) + (index % order.length)) % 2
          ? "DARK"
          : "LIGHT",
      piece: null,
    }
  }
  order.forEach((type, col) => {
    squares[0 * order.length + col]["piece"] = {
      alliance: "DARK",
      type,
    }
    squares[1 * order.length + col]["piece"] = {
      alliance: "DARK",
      type: "PAWN",
    }
    squares[(order.length - 2) * order.length + col]["piece"] = {
      alliance: "LIGHT",
      type: "PAWN",
    }
    squares[(order.length - 1) * order.length + col]["piece"] = {
      alliance: "LIGHT",
      type,
    }
  })
  const kingsPosition: Record<Piece["alliance"], Position> = {
    DARK: 0 * order.length + 4,
    LIGHT: (order.length - 1) * order.length + 4,
  }
  const movedPieces = new Set<Piece>()
  return {
    getKingPosition(alliance) {
      return kingsPosition[alliance]
    },
    getPiece(position) {
      return squares[position]["piece"]
    },
    getSquares() {
      return squares
    },
    hasPieceMoved(piece) {
      return movedPieces.has(piece)
    },
    movePiece(from, to) {
      const moving = squares[from]["piece"]
      const existing = squares[to]["piece"]
      squares[to]["piece"] = moving
      squares[from]["piece"] = null
      if (moving === null) {
        return existing
      }
      movedPieces.add(moving)
      if (moving.type === "KING") {
        kingsPosition[moving.alliance] = to
      }
      return existing
    },
  }
}
