import { useState } from "react"

import useSynonyms from "./hooks/useSynonyms"
import classes from "./synonym-game.module.css"

function SynonymGame() {
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
        <input
          placeholder="Enter a word"
          value={word}
          onChange={e => setWord(e.target.value)}
          disabled={isFetchingSynonyms}
        />
        <button disabled={isFetchingSynonyms || !word}>Find Synonyms</button>
      </form>
      <section>
        {isFetchingSynonyms ? (
          <p>Fetching synonyms for "{word}". Please wait...</p>
        ) : synonyms === undefined ? (
          <p>Click on the button to get synonyms.</p>
        ) : synonyms.length <= 0 ? (
          <p>No synonyms were found for the word "{word}"</p>
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

export default SynonymGame
