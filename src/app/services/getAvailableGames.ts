import ChessGame from "@/chess/ChessGame"
import CountryCapitalGame from "@/country-capital/CountryCapitalGame"
import TicTacToeGame from "@/tic-tac-toe/TicTacToeGame"

export default function getAvailableGames() {
  return availableGames
}

const availableGames: (() => React.JSX.Element)[] = [
  ChessGame,
  CountryCapitalGame,
  TicTacToeGame,
]
