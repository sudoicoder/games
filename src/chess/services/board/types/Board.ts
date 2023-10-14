import type Piece from "../../piece/types/Piece"
import type Square from "../../square/types/Square"

type Board = Readonly<{
  pieces: Record<Piece["alliance"], ReadonlySet<Piece>>
  square: (position: Square["position"]) => Optional<Square>
  squares: ReadonlyArray<ReadonlyArray<Square>>
}>

export default Board
