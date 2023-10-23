import useState from "@/common/hooks/useState"

import createBoard from "../services/board/createBoard"

function useBoard() {
  const [board] = useState(createBoard)
  return { board }
}

export default useBoard
