import { useState } from "react"

import type Grid from "../services/grid/types/Grid"

import createGrid from "../services/grid/createGrid"

export default function useGrid() {
  const [_grid, setGrid] = useState<Grid>(() => createGrid(3))

  const grid = () => _grid

  grid.reset = () => setGrid(createGrid(3))

  return grid
}
