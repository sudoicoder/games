const EMPTY_SQUARE = Symbol("chess/board/square/empty")

export default function getEmptySquare(): EmptySquare {
  return EMPTY_SQUARE
}

export type EmptySquare = typeof EMPTY_SQUARE
