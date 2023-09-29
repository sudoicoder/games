import { useState } from "react"

import CountryCapitalGame from "@/country-capital/CountryCapitalGame"
import TicTacToeGame from "@/tic-tac-toe/TicTacToeGame"

import classes from "./styles.module.css"

const games: Record<string, () => JSX.Element> = {
  CountryCapitalGame,
  TicTacToeGame,
}

const keys = Object.keys(games)

export default function App() {
  const [selected, setSelected] = useState(keys[0])

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelected(e.target.value)
  }

  const Game = games[selected]

  return (
    <div className={classes["wrapper"]}>
      <select
        className={classes["select"]}
        value={selected}
        onChange={handleChange}
      >
        {keys.map(key => (
          <option
            key={key}
            className={classes["option"]}
            label={key.split(/(?=[A-Z])/g).join(" ")}
            value={key}
          />
        ))}
      </select>
      <Game />
    </div>
  )
}
