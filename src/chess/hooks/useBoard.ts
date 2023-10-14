import useLazyRef from "@/common/hooks/useLazyRef"

import createBoard from "../services/board/createBoard"

export default function useBoard() {
  return useLazyRef(createBoard)
}
