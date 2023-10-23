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
        <button disabled={!word || isFetchingSynonyms}>Find Synonyms</button>
      </form>
      {isFetchingSynonyms ? (
        <span>Fetching synonyms... Please wait...</span>
      ) : (
        synonyms !== undefined && (
          <section>
            {synonyms.length > 0 ? (
              <ul>
                {synonyms.map(synonym => (
                  <li key={synonym}>{synonym}</li>
                ))}
              </ul>
            ) : (
              <span>There were no synonyms found for the word "{word}"</span>
            )}
          </section>
        )
      )}
    </div>
  )
}
