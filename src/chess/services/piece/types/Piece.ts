import type Square from "../../square/types/Square"

type Piece = Readonly<{
  alliance: "dark" | "light"
  notation: string
}> & {
  designation: "bishop" | "king" | "knight" | "pawn" | "queen" | "rook"
  moves: number
  square: Nullish<Square>
}

export default Piece
