const TIC_TAC_TOE_SYMBOLS = ["X", "O"] as const

export default function getTicTacToeSymbols() {
  return TIC_TAC_TOE_SYMBOLS
}

export type TicTacToeSymbol = (typeof TIC_TAC_TOE_SYMBOLS)[number]
