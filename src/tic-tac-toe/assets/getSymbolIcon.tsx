import type Marker from "../services/marker/types/Marker"

import circle from "./circle.svg"
import cross from "./cross.svg"

export default function getSymbolIcon(symbol: Marker): string {
  switch (symbol) {
    case "X":
      return cross
    case "O":
      return circle
  }
}
