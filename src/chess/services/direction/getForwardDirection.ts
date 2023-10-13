import type Piece from "../piece/types/Piece"
import type Vertical from "./types/Vertical"

export default function getForwardDirection(
  alliance: Piece["alliance"]
): Vertical {
  switch (alliance) {
    case "dark":
      return "south"
    case "light":
      return "north"
  }
}
