import { useState } from "react"
import classes from "./synonym-game.module.css"

export default function SynonymGame() {
  const [word, setWord] = useState("")
  return (
    <div className={classes["game"]}>
      <form>
        <input
          value={word}
          onChange={e => setWord(e.target.value)}
        />
        <button>Find Synonyms</button>
      </form>
    </div>
  )
}
