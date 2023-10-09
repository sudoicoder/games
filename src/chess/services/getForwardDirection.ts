export default function getForwardDirection(
  alliance: Piece["alliance"]
): North | South {
  switch (alliance) {
    case "DARK":
      return "SOUTH"
    case "LIGHT":
      return "NORTH"
  }
}
