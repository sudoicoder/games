import type { TicTacToeSymbol } from "../services/getTicTacToeSymbols"

import circle from "./circle.svg"
import cross from "./cross.svg"

export default function getSymbolIcon(symbol: TicTacToeSymbol): string {
  switch (symbol) {
    case "X":
      return cross
    case "O":
      return circle
  }
}
