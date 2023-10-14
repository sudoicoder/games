import type Piece from "./types/Piece"

import getPieceNotation from "./getPieceNotation"
import Square from "../square/types/Square"

export default function createPiece(
  alliance: Piece["alliance"],
  designation: Piece["designation"]
): Piece {
  const notation = getPieceNotation(alliance, designation)

  let _moves = 0
  let _square: Nullish<Square> = null

  function designate(designateTo: Piece["designation"]) {
    designation = designateTo
  }

  function move(
    square: Square,
    howShouldMoveChange: "increment/move" | "decrement/move"
  ) {
    if (_square !== null) {
      _square.vacate()
    }
    square.occupy(piece)
    _square = square
    switch (howShouldMoveChange) {
      case "increment/move":
        _moves++
        break
      case "decrement/move":
        _moves--
        break
    }
  }

  function place(square: Square) {
    _square = square
  }

  function stash() {
    if (_square === null) {
      return
    }
    _square.vacate()
    _square = null
  }

  const piece = {
    alliance,
    notation,
    get designation() {
      return designation
    },
    get moves() {
      return _moves
    },
    get square() {
      return _square
    },
    designate,
    move,
    place,
    stash,
  }

  return piece
}
