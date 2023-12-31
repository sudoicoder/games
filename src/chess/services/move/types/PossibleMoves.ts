import type Piece from "../../piece/types/Piece"
import type Square from "../../square/types/Square"
import type ExecutableMove from "./ExecutableMove"

type PossibleMoves = ReadonlyMap<Piece, ReadonlyMap<Square, ExecutableMove>>

export default PossibleMoves
