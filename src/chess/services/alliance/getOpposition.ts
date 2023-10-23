import type Piece from "../piece/types/Piece"

function getOpposition(alliance: Piece["alliance"]): Piece["alliance"] {
  switch (alliance) {
    case "dark":
      return "light"
    case "light":
      return "dark"
  }
}

export default getOpposition
