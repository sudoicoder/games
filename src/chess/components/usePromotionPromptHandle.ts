import useRef from "@/common/hooks/useRef"

import type PromotionPromptHandle from "./PromotionPromptHandle"

export default function usePromotionPromptHandle() {
  return useRef<PromotionPromptHandle>(null)
}
