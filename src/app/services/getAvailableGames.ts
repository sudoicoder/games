import type Game from "@/app/services/types/Game"

import ChessGame from "@/chess/ChessGame"
import CountryCapitalGame from "@/country-capital/CountryCapitalGame"
import SynonymGame from "@/synonym/SynonymGame"
import TicTacToeGame from "@/tic-tac-toe/TicTacToeGame"

export default function getAvailableGames() {
  return availableGames
}

const availableGames: Record<Game["name"], Game> = {
  ChessGame,
  CountryCapitalGame,
  SynonymGame,
  TicTacToeGame,
}
