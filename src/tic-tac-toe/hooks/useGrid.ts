import { useState } from "react"

import createGrid from "../services/grid/createGrid"

function useGrid(size: number) {
  const [grid, setGrid] = useState(() => createGrid(size))

  function resetGrid() {
    setGrid(createGrid(size))
  }

  return { grid, resetGrid }
}

export default useGrid
