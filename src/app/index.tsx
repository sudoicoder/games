import { useState } from "react"

import ChessGame from "@/chess/ChessGame"
import CountryCapitalGame from "@/country-capital/CountryCapitalGame"
import TicTacToeGame from "@/tic-tac-toe/TicTacToeGame"

import classes from "./styles/app.module.css"

const games: Record<string, () => JSX.Element> = {
  ChessGame,
  CountryCapitalGame,
  TicTacToeGame,
}

const gameNames = Object.keys(games)

export default function App() {
  const { Game, handleChange, selected } = useAppState()
  return (
    <div className={classes["wrapper"]}>
      <select
        className={classes["select"]}
        value={selected}
        onChange={handleChange}
      >
        {gameNames.map(gameName => (
          <option
            key={gameName}
            className={classes["option"]}
            label={gameName.split(/(?=[A-Z])/g).join(" ")}
            value={gameName}
          />
        ))}
      </select>
      <Game />
    </div>
  )
}

function useAppState() {
  const [selected, setSelected] = useState(gameNames[0])

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelected(e.target.value)
  }

  const Game = games[selected]

  return { Game, handleChange, selected } as const
}
