import { useState } from "react"

export default function useCaptured() {
  const [captured] = useState(createCaptured)

  function addToCaptured(alliance: Piece["alliance"], piece: Piece) {
    captured[alliance].push(piece)
  }

  return { captured, addToCaptured }
}

function createCaptured(): Record<Piece["alliance"], Piece[]> {
  return {
    DARK: [],
    LIGHT: [],
  }
}
