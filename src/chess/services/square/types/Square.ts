import type Piece from "../../piece/types/Piece"

type Square = Readonly<{
  notation: string
  position: Readonly<{
    row: number
    column: number
  }>
  shade: "dark" | "light"
}> &
  Readonly<{
    get piece(): Nullish<Piece>
  }> &
  Readonly<{
    occupy: (piece: Piece) => void
    vacate: () => void
  }>

export default Square
