import AssertUnreachableError from "@/utils/AssertUnreachableError"

import type { TicTacToeSymbol } from "./symbols"

export default function flipTicTacToeTurn(symbol: TicTacToeSymbol) {
  switch (symbol) {
    case "X":
      return "O"
    case "O":
      return "X"
    default:
      throw new AssertUnreachableError(symbol)
  }
}
