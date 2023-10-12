import type Piece from "../piece/types/Piece"

export default function getOpposition(
  alliance: Piece["alliance"]
): Piece["alliance"] {
  switch (alliance) {
    case "dark":
      return "light"
    case "light":
      return "dark"
  }
}
