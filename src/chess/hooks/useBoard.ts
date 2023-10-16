import useState from "@/common/hooks/useState"

import createBoard from "../services/board/createBoard"

export default function useBoard() {
  const [board] = useState(createBoard)
  return { board }
}
