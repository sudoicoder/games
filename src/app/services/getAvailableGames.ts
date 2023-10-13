import type Game from "@/app/types/Game"

import ChessGame from "@/chess/ChessGame"
import CountryCapitalGame from "@/country-capital/CountryCapitalGame"
import TicTacToeGame from "@/tic-tac-toe/TicTacToeGame"

console.log(ChessGame.name)

export default function getAvailableGames() {
  return availableGames
}

const availableGames: Record<Game["name"], Game> = {
  ChessGame,
  CountryCapitalGame,
  TicTacToeGame,
}
