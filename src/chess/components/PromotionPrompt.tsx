import forwardRef from "@/common/hooks/forwardRef"

import type Piece from "../services/piece/types/Piece"
import type PromotionPromptHandle from "./PromotionPromptHandle"

import getPieceIcon from "../assets/getPieceIcon"

import useRegisteredPromotionPromptHandle from "./useRegisteredPromotionPromptHandle"

import classes from "./PromotionPrompt.module.css"

type PromotionPromptProps = {
  alliance: Piece["alliance"]
}

function PromotionPrompt(
  { alliance }: PromotionPromptProps,
  handle: React.ForwardedRef<PromotionPromptHandle>
) {
  const { promotables } = useRegisteredPromotionPromptHandle(handle)

  return (
    promotables !== undefined && (
      <div className={classes["promotion-prompt"]}>
        {promotables.map(promotable => {
          return (
            <span
              className={classes["tile"]}
              onClick={promotable.selectDesignation}
            >
              <img
                className={classes["piece"]}
                src={getPieceIcon(alliance, promotable.designation)}
                alt={`${alliance}/${promotable.designation}`}
              />
            </span>
          )
        })}
      </div>
    )
  )
}

export default forwardRef(PromotionPrompt)
