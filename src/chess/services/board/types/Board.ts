import type Square from "../../square/types/Square"

type Board = {
  get squares(): Square[][]
}

export default Board
