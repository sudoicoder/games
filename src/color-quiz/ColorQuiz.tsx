import useState from "@/common/hooks/useState"
import classes from "./color-quiz.module.css"
import useColorQuiz from "./hooks/useColorQuiz"

export default function ColorQuiz() {
  const {
    checkIfCorrectChoice,
    choices,
    colorToGuess,
    hasCorrectlyIdentified,
    hasQuizEnded,
  } = useColorQuiz()

  return (
    <div className={classes["game"]}>
      <p className={classes["prompt"]}>Guess the hex value for this color.</p>
      <div
        className={classes["color"]}
        style={{ color: colorToGuess }}
      />
      <div className={classes["choices"]}>
        {choices.map(choice => (
          <button
            key={choice}
            className={classes["choice"]}
            onClick={() => checkIfCorrectChoice(choice)}
            disabled={hasQuizEnded}
          >
            {choice}
          </button>
        ))}
      </div>
      {hasCorrectlyIdentified !== undefined && (
        <p>{hasCorrectlyIdentified ? "Correct!" : "Incorrect!"}</p>
      )}
    </div>
  )
}
