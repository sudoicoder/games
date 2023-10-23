import type Grid from "../services/grid/types/Grid"
import type Strike from "../services/strike/types/Strike"

function useWinner(grid: Grid, strike: Nullish<Strike>) {
  if (strike !== null) {
    return strike.marker
  }
  if (grid.hasUnmarkedSquares) {
    return undefined
  }
  return null
}

export default useWinner
