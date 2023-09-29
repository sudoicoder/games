import assertUnreachable from "@/utils/assertUnreachable"

import type { TicTacToeSymbol } from "./getTicTacToeSymbols"

export default function flipTicTacToeTurn(symbol: TicTacToeSymbol) {
  switch (symbol) {
    case "X":
      return "O"
    case "O":
      return "X"
    default:
      assertUnreachable(symbol)
  }
}
