import type Piece from "../piece/types/Piece"
import type Vertical from "./types/Vertical"

function getForwardDirection(alliance: Piece["alliance"]): Vertical {
  switch (alliance) {
    case "dark":
      return "south"
    case "light":
      return "north"
  }
}

export default getForwardDirection
