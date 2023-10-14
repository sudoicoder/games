import type Square from "../../square/types/Square"

type Grid = Readonly<{
  reset: () => void
  squares: ReadonlyArray<ReadonlyArray<Square>>
}>

export default Grid
