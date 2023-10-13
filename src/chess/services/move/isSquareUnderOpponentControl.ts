import type Influence from "../influence/types/Influence"
import type Square from "../square/types/Square"

export default function isSquareUnderOpponentControl(
  square: Square,
  opponentInfluence: Influence
): boolean {
  for (const controlled of opponentInfluence.controls.values()) {
    if (controlled.has(square)) {
      return true
    }
  }
  return false
}
