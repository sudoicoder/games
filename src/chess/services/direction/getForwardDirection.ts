import type Alliance from "../alliance/types/Alliance"
import type Vertical from "./types/Vertical"

export default function getForwardDirection(alliance: Alliance): Vertical {
  switch (alliance) {
    case "dark":
      return "south"
    case "light":
      return "north"
  }
}
