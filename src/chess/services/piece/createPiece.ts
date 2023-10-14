import type Piece from "./types/Piece"

import getPieceNotation from "./getPieceNotation"
import Square from "../square/types/Square"

export default function createPiece(
  alliance: Piece["alliance"],
  designation: Piece["designation"]
): Piece {
  const notation = getPieceNotation(alliance, designation)

  let moves = 0
  let square: Nullish<Square> = null

  function designate(d: Piece["designation"]) {
    designation = d
  }

  function move(
    to: Square,
    howShouldMoveChange: "increment/move" | "decrement/move"
  ) {
    if (square !== null) {
      square.vacate()
    }
    to.occupy(piece)
    square = to
    switch (howShouldMoveChange) {
      case "increment/move":
        moves++
        break
      case "decrement/move":
        moves--
        break
    }
  }

  function stash() {
    if (square === null) {
      return
    }
    square.vacate()
    square = null
  }

  const piece = {
    alliance,
    notation,
    get designation() {
      return designation
    },
    get moves() {
      return moves
    },
    get square() {
      return square
    },
    designate,
    move,
    stash,
  }

  return piece
}
