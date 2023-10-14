import type Marker from "../../marker/types/Marker"

type Square = Readonly<{
  get isMarked(): boolean
  column: number
  mark: (marker: Marker) => void
  get marker(): Nullish<Marker>
  reset: () => void
  row: number
}>

export default Square
