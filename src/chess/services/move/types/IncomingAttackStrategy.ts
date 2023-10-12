import type Extent from "../../offset/types/Extent"
import type Offset from "../../offset/types/Offset"
import type Piece from "../../piece/types/Piece"

type IncomingAttackStrategy = [Offset, Extent, Piece["designation"][]]

export default IncomingAttackStrategy
