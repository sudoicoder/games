import useTurn from "@/common/hooks/useTurn"

import getOppositeMarker from "../services/marker/getOppositeMarker"

function useMarker() {
  return useTurn("X", getOppositeMarker)
}

export default useMarker
