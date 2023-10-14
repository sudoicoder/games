import { useState } from "react"

import type Grid from "../services/grid/types/Grid"

import createGrid from "../services/grid/createGrid"

export default function useGrid() {
  const [grid, setGrid] = useState<Grid>(() => createGrid(3))

  function resetGrid() {
    setGrid(createGrid(3))
  }

  return { grid, resetGrid }
}
