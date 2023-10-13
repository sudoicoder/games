import type Extent from "../../offset/types/Extent"
import type Offset from "../../offset/types/Offset"

type MoveStrategy = [Offset, Extent, ("walk" | "attack" | "castle")[]]

export default MoveStrategy
