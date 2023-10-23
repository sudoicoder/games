import useRef from "@/common/hooks/useRef"

import type PromotionPromptHandle from "./PromotionPromptHandle"

function usePromotionPromptHandle() {
  return useRef<PromotionPromptHandle>(null)
}

export default usePromotionPromptHandle
