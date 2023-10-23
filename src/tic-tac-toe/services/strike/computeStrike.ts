import type Grid from "../grid/types/Grid"
import type Marker from "../marker/types/Marker"
import type Square from "../square/types/Square"
import type Strike from "./types/Strike"

function computeMainDiagonalStrike(
  grid: Grid,
  marker: Marker
): Nullish<Strike> {
  const squares = new Set<Square>()
  for (let k = 0; k < grid.size; k++) {
    const square = grid.squares[k][k]
    if (square.marker !== marker) {
      return null
    }
    squares.add(square)
  }
  return { marker, squares }
}

function computeAuxiliaryDiagonalStrike(
  grid: Grid,
  marker: Marker
): Nullish<Strike> {
  const squares = new Set<Square>()
  for (let k = 0; k < grid.size; k++) {
    const square = grid.squares[k][grid.size - 1 - k]
    if (square.marker !== marker) {
      return null
    }
    squares.add(square)
  }
  return { marker, squares }
}

function computeStraightStrike(
  grid: Grid,
  marker: Marker,
  computeSpecificStrike: (
    grid: Grid,
    marker: Marker,
    index: number
  ) => Nullish<Strike>
): Nullish<Strike> {
  for (let k = 0; k < grid.size; k++) {
    const strike = computeSpecificStrike(grid, marker, k)
    if (strike !== null) {
      return strike
    }
  }
  return null
}

function computeRowStrike(
  grid: Grid,
  marker: Marker,
  row: number
): Nullish<Strike> {
  const squares = new Set<Square>()
  for (let k = 0; k < grid.size; k++) {
    const square = grid.squares[row][k]
    if (square.marker !== marker) {
      return null
    }
    squares.add(square)
  }
  return { marker, squares }
}

function computeColumnStrike(
  grid: Grid,
  marker: Marker,
  column: number
): Nullish<Strike> {
  const squares = new Set<Square>()
  for (let k = 0; k < grid.size; k++) {
    const square = grid.squares[k][column]
    if (square.marker !== marker) {
      return null
    }
    squares.add(square)
  }
  return { marker, squares }
}

function computeStrike(grid: Grid, marker: Marker): Nullish<Strike> {
  return (
    computeMainDiagonalStrike(grid, marker) ||
    computeAuxiliaryDiagonalStrike(grid, marker) ||
    computeStraightStrike(grid, marker, computeRowStrike) ||
    computeStraightStrike(grid, marker, computeColumnStrike)
  )
}

export default computeStrike
