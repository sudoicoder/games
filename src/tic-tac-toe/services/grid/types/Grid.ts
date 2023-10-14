import type Square from "../../square/types/Square"

type Grid = Readonly<{
  size: number
  squares: ReadonlyArray<ReadonlyArray<Square>>
}> &
  Readonly<{
    get hasUnmarkedSquares(): boolean
  }> &
  Readonly<{
    reset: () => void
  }>

export default Grid
