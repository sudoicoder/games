import type { TicTacToeGrid } from "./create"
import type { TicTacToeSymbol } from "./symbols"

export default function markTicTacToeGridWithSymbol(
  grid: TicTacToeGrid,
  row: number,
  col: number,
  symbol: TicTacToeSymbol
) {
  return grid.map((r, ri) =>
    ri !== row ? r : r.map((c, ci) => (ci !== col ? c : symbol))
  )
}
