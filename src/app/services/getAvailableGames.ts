import ChessGame from "@/chess/ChessGame"
import CountryCapitalGame from "@/country-capital/CountryCapitalGame"
import TicTacToeGame from "@/tic-tac-toe/TicTacToeGame"

export default function getAvailableGames() {
  return availableGames
}

const availableGames: Record<string, () => JSX.Element> = {
  ChessGame,
  CountryCapitalGame,
  TicTacToeGame,
}
