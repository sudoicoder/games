import useMemo from "@/common/hooks/useMemo"
import useState from "@/common/hooks/useState"
import randomize from "@/common/utils/randomize"
import getRandomColor from "../services/getRandomColor"

export default function useColorQuiz() {
  const [colorToGuess, setColorToGuess] = useState(getRandomColor)
  const [hasCorrectlyIdentified, setHasCorrectlyIdentified] =
    useState<boolean>()

  const choices = useMemo(() => {
    const colors = [colorToGuess]
    while (colors.length < 3) {
      const color = getRandomColor()
      if (colors.includes(color)) {
        continue
      }
      colors.push(color)
    }
    return colors.sort(randomize)
  }, [colorToGuess])

  const hasQuizEnded = !!hasCorrectlyIdentified

  function checkIfCorrectChoice(choice: string) {
    const hasCorrectlyIdentified = choice === colorToGuess
    setHasCorrectlyIdentified(hasCorrectlyIdentified)
    if (hasCorrectlyIdentified) {
      setTimeout(() => {
        setColorToGuess(getRandomColor())
        setHasCorrectlyIdentified(undefined)
      }, 1000 / 3)
    }
  }

  return {
    checkIfCorrectChoice,
    choices,
    colorToGuess,
    hasCorrectlyIdentified,
    hasQuizEnded,
  }
}
