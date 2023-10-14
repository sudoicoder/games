import type Marker from "../../marker/types/Marker"
import type Square from "../../square/types/Square"

type Strike = Readonly<{
  marker: Marker
  squares: ReadonlySet<Square>
}>

export default Strike
