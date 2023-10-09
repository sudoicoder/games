import { useState } from "react"

export default function useCaptured() {
  const [captured] = useState(createCaptured)

  function addToCaptured(alliance: Piece["alliance"], piece: Piece) {
    captured[alliance].add(piece)
  }

  return { captured, addToCaptured }
}

function createCaptured(): Record<Piece["alliance"], Set<Piece>> {
  return {
    DARK: new Set(),
    LIGHT: new Set(),
  }
}
