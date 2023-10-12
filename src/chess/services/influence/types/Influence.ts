import type Square from "../../square/types/Square"

type Influence = {
  pinned: Square[]
  checking: Square[]
  controlled: [Square, Square[]][]
}

export default Influence
