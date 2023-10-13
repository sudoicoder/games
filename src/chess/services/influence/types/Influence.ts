import type Piece from "../../piece/types/Piece"
import type Square from "../../square/types/Square"

type Influence = Readonly<{
  checking: ReadonlyMap<Piece, ReadonlySet<Square>>
  controlled: ReadonlyMap<Piece, ReadonlySet<Square>>
  pinned: ReadonlySet<Piece>
}>

export default Influence
