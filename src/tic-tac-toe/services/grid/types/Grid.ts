import type Square from "../../square/types/Square"

type Grid = Readonly<{
  reset: () => void
  size: number
  squares: ReadonlyArray<ReadonlyArray<Square>>
}>

export default Grid
