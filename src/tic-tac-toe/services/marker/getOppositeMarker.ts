import type Marker from "./types/Marker"

function getNextMarker(marker: Marker): Marker {
  switch (marker) {
    case "X":
      return "O"
    case "O":
      return "X"
  }
}

export default getNextMarker
