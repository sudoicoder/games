import type Marker from "../../marker/types/Marker"

type Square = Readonly<{
  get isMarked(): boolean
  column: number
  mark: (marker: Marker) => void
  marker: Nullish<Marker>
  reset: () => void
  row: number
}>

export default Square
