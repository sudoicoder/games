import type Grid from "../services/grid/types/Grid"
import type Strike from "../services/strike/types/Strike"

export default function useWinner(grid: Grid, strike: Nullish<Strike>) {
  if (strike !== null) {
    return strike.marker
  }
  if (grid.hasUnmarkedSquares()) {
    return undefined
  }
  return null
}
