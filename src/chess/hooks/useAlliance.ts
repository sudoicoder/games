import useTurn from "@/common/hooks/useTurn"

import getOpposition from "../services/alliance/getOpposition"

export default function useAlliance() {
  return useTurn("light", getOpposition)
}
