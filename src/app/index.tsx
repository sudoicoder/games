import classes from "./styles/app.module.css"

import useApp from "./hooks/useApp"

export default function App() {
  const {
    SelectedGame,
    getAvailableGameNames,
    selectGameName,
    selectedGameName,
  } = useApp()
  return (
    <div className={classes["wrapper"]}>
      <select
        className={classes["select"]}
        value={selectedGameName}
        onChange={e => selectGameName(e.target.value)}
      >
        {getAvailableGameNames().map(gameName => (
          <option
            key={gameName}
            className={classes["option"]}
            label={gameName.split(/(?=[A-Z])/g).join(" ")}
            value={gameName}
          />
        ))}
      </select>
      <SelectedGame />
    </div>
  )
}
