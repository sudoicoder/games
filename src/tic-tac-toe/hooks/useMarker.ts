import useTurn from "@/common/hooks/useTurn"

import getOppositeMarker from "../services/marker/getOppositeMarker"

export default function useMarker() {
  return useTurn("X", getOppositeMarker)
}
