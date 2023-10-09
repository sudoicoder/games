export default function getForwardDirection(
  alliance: Piece["alliance"]
): Direction {
  switch (alliance) {
    case "DARK":
      return "SOUTH"
    case "LIGHT":
      return "NORTH"
  }
}
