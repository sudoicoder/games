import classes from "./color-quiz.module.css"
import useColorQuiz from "./hooks/useColorQuiz"

export default function ColorQuiz() {
  useColorQuiz()
  return (
    <div className={classes["game"]}>
      <p className={classes["prompt"]}>Guess the hex value for this color.</p>
      <div className={classes["color"]} />
      <div className={classes["choices"]}>
        {["#FFFFFF", "#123456", "#333333"].map(choice => (
          <button
            key={choice}
            className={classes["choice"]}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  )
}
