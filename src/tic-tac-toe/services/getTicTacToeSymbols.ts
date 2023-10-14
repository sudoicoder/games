const TIC_TAC_TOE_SYMBOLS = ["X", "O"] as const

type TicTacToeSymbol = (typeof TIC_TAC_TOE_SYMBOLS)[number]

export default TicTacToeSymbol
