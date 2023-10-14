import type Marker from "./types/Marker"

export default function getOppositeMarker(marker: Marker) {
  switch (marker) {
    case "X":
      return "O"
    case "O":
      return "X"
  }
}
