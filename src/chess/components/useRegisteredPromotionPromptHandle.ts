import useImperativeHandle from "@/common/hooks/useImperativeHandle"
import useState from "@/common/hooks/useState"

import type Piece from "../services/piece/types/Piece"
import type PromotionPromptHandle from "./PromotionPromptHandle"

import getPromotableDesignations from "../services/designation/getPromotableDesignations"

export default function useRegisteredPromotionPromptHandle(
  handleRef: React.Ref<PromotionPromptHandle>
) {
  const [promotables, setPromotables] = useState<Promotable[]>()

  useImperativeHandle(
    handleRef,
    () => ({
      promptDesignation: async () => {
        return await new Promise<Piece["designation"]>(resolve => {
          function selectDesignation(designation: Piece["designation"]) {
            setPromotables(undefined)
            resolve(designation)
          }
          setPromotables(
            getPromotableDesignations().map(designation => ({
              designation,
              selectDesignation: () => selectDesignation(designation),
            }))
          )
        })
      },
    }),
    []
  )

  return { promotables }
}

type Promotable = {
  designation: Piece["designation"]
  selectDesignation: () => void
}
