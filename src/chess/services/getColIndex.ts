import getBoardSize from "./getBoardSize"

export default function getColIndex(position: Position): number {
  return Math.floor(position % getBoardSize())
}
