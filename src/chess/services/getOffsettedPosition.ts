import getRoyalOrder from "./getRoyalOrder"

export default function getOffsettedPosition(
  position: Position,
  offset: Offset
): Position {
  const order = getRoyalOrder()
  const offsetted = position + offset
  return offsetted >= 0 && offsetted < order.length * order.length
    ? offsetted
    : -1
}
