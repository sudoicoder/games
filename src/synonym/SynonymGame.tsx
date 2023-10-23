import { useId, useState } from "react"
import classes from "./synonym-game.module.css"

export default function SynonymGame() {
  const [word, setWord] = useState("")
  const id = useId()
  return (
    <div className={classes["game"]}>
      <form>
        <label htmlFor={`${id}/word`}>Word</label>
        <input
          id={`${id}/word`}
          value={word}
          onChange={e => setWord(e.target.value)}
        />
        <button>Find Synonyms</button>
      </form>
    </div>
  )
}
