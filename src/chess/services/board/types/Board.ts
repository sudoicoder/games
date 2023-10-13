import type Piece from "../../piece/types/Piece"
import type Square from "../../square/types/Square"

type Board = Readonly<{
  pieces: ReadonlySet<Piece>
  squares: ReadonlyArray<ReadonlyArray<Square>>
}>

export default Board
