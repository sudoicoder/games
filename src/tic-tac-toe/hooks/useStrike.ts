import { useMemo } from "react"

import type Grid from "../services/grid/types/Grid"
import type Marker from "../services/marker/types/Marker"
import type Strike from "../services/strike/types/Strike"

import getOppositeMarker from "../services/marker/getOppositeMarker"
import computeStrike from "../services/strike/computeStrike"

function useStrike(grid: Grid, marker: Marker): Nullish<Strike> {
  return useMemo(
    () => computeStrike(grid, getOppositeMarker(marker)),
    [grid, marker]
  )
}

export default useStrike
