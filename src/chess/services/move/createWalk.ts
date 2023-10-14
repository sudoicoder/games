import type Piece from "../piece/types/Piece"
import type Square from "../square/types/Square"
import type ExecutableMove from "./types/ExecutableMove"

export default function createWalk(
  fromPiece: Piece,
  fromSquare: Square,
  toSquare: Square
): ExecutableMove {
  return {
    type: "walk",
    execute: () => {
      fromPiece.move(toSquare, "increment/moves")
      return {
        description: description(fromPiece, fromSquare, toSquare),
        undo: () => {
          fromPiece.move(fromSquare, "decrement/moves")
        },
      }
    },
  }
}

function description(piece: Piece, from: Square, to: Square): string {
  return `Moved ${piece.notation} from ${from.notation} to ${to.notation}`
}
