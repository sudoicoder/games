import type Square from "../../square/types/Square"

type Grid = Readonly<{
  size: number
  squares: ReadonlyArray<ReadonlyArray<Square>>
}> &
  Readonly<{
    get hasUnmarkedSquares(): boolean
  }>

export default Grid
