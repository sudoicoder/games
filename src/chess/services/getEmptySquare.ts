const EMPTY_SQUARE = Symbol("chess/board/square/empty")

export type EmptySquare = typeof EMPTY_SQUARE

export default function getEmptySquare(): EmptySquare {
  return EMPTY_SQUARE
}
