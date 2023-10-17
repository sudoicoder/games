import type Piece from "../../piece/types/Piece"
import type Square from "../../square/types/Square"

type Influence = Readonly<{
  alliance: Piece["alliance"]
  checks: ReadonlyMap<Piece, ReadonlySet<Square>>
  controls: ReadonlyMap<Piece, ReadonlySet<Square>>
  pins: ReadonlyMap<Piece, ReadonlySet<Square>>
}>

export default Influence
