import type Square from "../../square/types/Square"

type Influence = {
  pinned: Set<Square>
  checking: Set<Square>
  controlled: Map<Square, Set<Square>>
}

export default Influence
