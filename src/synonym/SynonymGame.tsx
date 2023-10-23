import { useId, useState } from "react"

import classes from "./synonym-game.module.css"

export default function SynonymGame() {
  const id = useId()

  const [word, setWord] = useState("")
  const [synonyms] = useState<string[]>([])

  function handleFetchSynonyms(e: React.FormEvent) {
    e.preventDefault()
  }

  return (
    <div>
      <form
        className={classes["word"]}
        onSubmit={handleFetchSynonyms}
      >
        <label htmlFor={`${id}/word`}>Word</label>
        <input
          id={`${id}/word`}
          value={word}
          onChange={e => setWord(e.target.value)}
        />
        <button>Find Synonyms</button>
      </form>
      <section>
        <ul>
          {synonyms.map(synonym => (
            <li key={synonym}>{synonym}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}
