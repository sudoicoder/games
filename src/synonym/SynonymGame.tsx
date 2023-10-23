import { useId, useState } from "react"

import classes from "./synonym-game.module.css"
import useSynonyms from "./hooks/useSynonyms"

export default function SynonymGame() {
  const id = useId()

  const [word, setWord] = useState("")

  const { fetchSynonyms, isFetchingSynonyms, synonyms } = useSynonyms(word)

  async function handleFetchSynonyms(e: React.FormEvent) {
    e.preventDefault()
    await fetchSynonyms()
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
          disabled={isFetchingSynonyms}
        />
        <button disabled={isFetchingSynonyms || !word}>Find Synonyms</button>
      </form>
      <section>
        {isFetchingSynonyms ? (
          <p>Fetching synonyms... Please wait...</p>
        ) : synonyms === undefined ? (
          <p>Click on the button to get synonyms for the word.</p>
        ) : synonyms.length <= 0 ? (
          <p>There were no synonyms found for the word "{word}"</p>
        ) : (
          <ul>
            {synonyms.map(synonym => (
              <li key={synonym}>{synonym}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
