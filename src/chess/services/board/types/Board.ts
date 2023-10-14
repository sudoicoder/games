import type Piece from "../../piece/types/Piece"
import type Square from "../../square/types/Square"

type Board = Readonly<{
  pieces: Record<Piece["alliance"], ReadonlySet<Piece>>
  squares: ReadonlyArray<ReadonlyArray<Square>>
}> &
  Readonly<{
    square: (position: Square["position"]) => Optional<Square>
  }> &
  Readonly<{
    stash: () => void
  }>

export default Board
