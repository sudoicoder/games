import classes from "./styles/app.module.css"

import useApp from "./hooks/useApp"

export default function App() {
  const { SelectedGame, getAvailableGames, selectGame } = useApp()
  return (
    <div className={classes["wrapper"]}>
      <select
        className={classes["select"]}
        value={SelectedGame.name}
      >
        {getAvailableGames().map(Game => (
          <option
            key={Game.name}
            className={classes["option"]}
            label={Game.name.split(/(?=[A-Z])/g).join(" ")}
            value={Game.name}
            onClick={() => selectGame(Game)}
          />
        ))}
      </select>
      <SelectedGame />
    </div>
  )
}
