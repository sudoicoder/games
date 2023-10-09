export default function getOpposition(
  alliance: Piece["alliance"]
): Piece["alliance"] {
  switch (alliance) {
    case "DARK":
      return "LIGHT"
    case "LIGHT":
      return "DARK"
  }
}
