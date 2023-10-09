export default function getRoyalOrder() {
  return order
}

const order = [
  "ROOK",
  "KNIGHT",
  "BISHOP",
  "QUEEN",
  "KING",
  "BISHOP",
  "KNIGHT",
  "ROOK",
] as const satisfies Readonly<Piece["type"][]>
