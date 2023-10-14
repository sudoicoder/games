import type Grid from "./types/Grid"
import type Marker from "../marker/types/Marker"

export default function createMarkedGrid(
  grid: Grid,
  row: number,
  col: number,
  symbol: Marker
) {
  return grid.map((r, ri) =>
    ri !== row ? r : r.map((c, ci) => (ci !== col ? c : symbol))
  )
}
