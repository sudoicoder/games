import { useRef } from "react"

import type PromotionPromptHandle from "./PromotionPromptHandle"

export default function usePromotionPromptHandle() {
  return useRef<PromotionPromptHandle>(null)
}
