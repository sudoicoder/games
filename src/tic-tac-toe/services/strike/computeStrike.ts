import type Grid from "../grid/types/Grid"
import type Square from "../square/types/Square"
import type Strike from "./types/Strike"

export default function computeStrike(grid: Grid) {
  return (
    computeMainDiagonalStrike(grid) ||
    computeAuxiliaryDiagonalStrike(grid) ||
    computeStraightStrike(grid, computeRowStrike) ||
    computeStraightStrike(grid, computeColumnStrike)
  )
}

function computeMainDiagonalStrike(grid: Grid): Nullish<Strike> {
  const { marker } = grid.squares[0][0]
  if (marker === null) {
    return null
  }
  const squares = new Set<Square>()
  for (let k = 1; k < grid.size; k++) {
    const square = grid.squares[k][k]
    if (square.marker !== marker) {
      return null
    }
    squares.add(square)
  }
  return { marker, squares }
}

function computeAuxiliaryDiagonalStrike(grid: Grid): Nullish<Strike> {
  const { marker } = grid.squares[0][grid.size - 1]
  if (marker === null) {
    return null
  }
  const squares = new Set<Square>()
  for (let k = 1; k < grid.size; k++) {
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
  computeSpecificStrike: (grid: Grid, index: number) => Nullish<Strike>
): Nullish<Strike> {
  for (let k = 0; k < grid.size; k++) {
    const strike = computeSpecificStrike(grid, k)
    if (strike !== null) {
      return strike
    }
  }
  return null
}

function computeRowStrike(grid: Grid, row: number): Nullish<Strike> {
  const { marker } = grid.squares[row][0]
  if (marker === null) {
    return null
  }
  const squares = new Set<Square>()
  for (let k = 1; k < grid.size; k++) {
    const square = grid.squares[row][k]
    if (square.marker !== marker) {
      return null
    }
    squares.add(square)
  }
  return { marker, squares }
}

function computeColumnStrike(grid: Grid, column: number): Nullish<Strike> {
  const { marker } = grid.squares[0][column]
  if (marker === null) {
    return null
  }
  const squares = new Set<Square>()
  for (let k = 1; k < grid.size; k++) {
    const square = grid.squares[k][column]
    if (square.marker !== marker) {
      return null
    }
    squares.add(square)
  }
  return { marker, squares }
}
