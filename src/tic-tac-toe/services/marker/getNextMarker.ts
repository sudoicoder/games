import type Marker from "./Marker"

export default function getNextSymbol(symbol: Marker) {
  switch (symbol) {
    case "X":
      return "O"
    case "O":
      return "X"
  }
}
