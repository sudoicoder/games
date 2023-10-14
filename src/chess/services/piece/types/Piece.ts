import type Square from "../../square/types/Square"

type Piece = Readonly<{
  alliance: "dark" | "light"
  notation: string
}> &
  Readonly<{
    get designation(): "bishop" | "king" | "knight" | "pawn" | "queen" | "rook"
    get moves(): number
    get square(): Nullish<Square>
  }> &
  Readonly<{
    designate: (designation: Piece["designation"]) => void
    move: (
      to: Square,
      howShouldMoveChange: "increment/move" | "decrement/move"
    ) => void
    stash: () => void
  }>

export default Piece
