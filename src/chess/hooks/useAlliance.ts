import useTurn from "@/common/hooks/useTurn"

import getOpposition from "../services/alliance/getOpposition"

export default function useAlliance() {
  const [alliance, flipAlliance] = useTurn("light", getOpposition)
  return { alliance, flipAlliance }
}
