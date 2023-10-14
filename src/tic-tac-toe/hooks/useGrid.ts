import { useState } from "react"

import createGrid from "../services/grid/createGrid"

export default function useGrid(size: number) {
  const [grid, setGrid] = useState(() => createGrid(size))

  function resetGrid() {
    setGrid(createGrid(size))
  }

  return { grid, resetGrid }
}
