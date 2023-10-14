import type { TicTacToeGrid } from "./createGrid"
import type Marker from "../marker/Marker"

export default function createMarkedGrid(
  grid: TicTacToeGrid,
  row: number,
  col: number,
  symbol: Marker
) {
  return grid.map((r, ri) =>
    ri !== row ? r : r.map((c, ci) => (ci !== col ? c : symbol))
  )
}
