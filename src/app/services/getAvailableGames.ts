import type Game from "@/app/types/Game"

import ChessGame from "@/chess/ChessGame"
import CountryCapitalGame from "@/country-capital/CountryCapitalGame"
import TicTacToeGame from "@/tic-tac-toe/TicTacToeGame"

export default function getAvailableGames() {
  return availableGames
}

const availableGames: Game[] = [ChessGame, CountryCapitalGame, TicTacToeGame]
