import type Piece from "../../piece/types/Piece"

type Square = Readonly<{
  notation: string
  position: Readonly<{
    row: number
    column: number
  }>
  shade: "dark" | "light"
}> & {
  piece: Nullish<Piece>
}

export default Square
