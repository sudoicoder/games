import type { TicTacToeGrid } from "./createTicTacToeGrid"

export type TicTacToeStrike = [number, number][]

export default function getTicTacToeStrike(grid: TicTacToeGrid) {
  let strike = getMainDiagonalStrike(grid)
  if (strike) return strike
  strike = getOffDiagonalStrike(grid)
  if (strike) return strike
  for (let k = 0; k < grid.length; k++) {
    let strike = getRowStrike(grid, k)
    if (strike) return strike
    strike = getColStrike(grid, k)
    if (strike) return strike
  }
  return null
}

function getMainDiagonalStrike(grid: TicTacToeGrid) {
  const symbol = grid[0][0]
  if (symbol === "") {
    return null
  }
  const strike: TicTacToeStrike = []
  for (let k = 0; k < grid.length; k++) {
    if (grid[k][k] !== symbol) {
      return null
    }
    strike.push([k, k])
  }
  return strike
}

function getOffDiagonalStrike(grid: TicTacToeGrid) {
  const symbol = grid[0][grid.length - 1]
  if (symbol === "") {
    return null
  }
  const strike: TicTacToeStrike = []
  for (let k = 0; k < grid.length; k++) {
    if (grid[k][grid.length - 1 - k] !== symbol) {
      return null
    }
    strike.push([k, grid.length - 1 - k])
  }
  return strike
}

function getRowStrike(grid: TicTacToeGrid, row: number) {
  const symbol = grid[row][0]
  if (symbol === "") {
    return null
  }
  const strike: TicTacToeStrike = []
  for (let k = 0; k < grid[row].length; k++) {
    if (grid[row][k] !== symbol) {
      return null
    }
    strike.push([row, k])
  }
  return strike
}

function getColStrike(grid: TicTacToeGrid, col: number) {
  const symbol = grid[0][col]
  if (symbol === "") {
    return null
  }
  const strike: TicTacToeStrike = []
  for (let k = 0; k < grid.length; k++) {
    if (grid[k][col] !== symbol) {
      return null
    }
    strike.push([k, col])
  }
  return strike
}
