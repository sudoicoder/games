import type Piece from "../../piece/types/Piece"

type Square = {
  position: {
    row: number
    column: number
  }
  notation: string
  piece: Nullish<Piece>
  shade: "dark" | "light"
}

export default Square
