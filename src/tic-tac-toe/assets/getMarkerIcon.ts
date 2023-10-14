import type Marker from "../services/marker/types/Marker"

import circle from "./circle.svg"
import cross from "./cross.svg"

export default function getMarkerIcon(marker: Marker): string {
  switch (marker) {
    case "X":
      return cross
    case "O":
      return circle
  }
}
