import getAvailableGameNames from "./services/getAvailableGameNames"

import useApp from "./hooks/useApp"

import classes from "./styles/app.module.css"

export default function App() {
  const { Game, handleChange, selected } = useApp()
  return (
    <div className={classes["wrapper"]}>
      <select
        className={classes["select"]}
        value={selected}
        onChange={handleChange}
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
      <Game />
    </div>
  )
}
