import type Diagonal from "./Diagonal"
import type East from "./East"
import type Jump from "./Jump"
import type North from "./North"
import type South from "./South"
import type Straight from "./Straight"
import type West from "./West"

type Direction =
  | Straight
  | Diagonal
  | Jump<North, East>
  | Jump<North, West>
  | Jump<South, East>
  | Jump<South, West>

export default Direction
