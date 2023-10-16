import type Piece from "../services/piece/types/Piece"

type PromotionPromptHandle = {
  promptDesignation: () => Promise<Piece["designation"]>
}

export default PromotionPromptHandle
