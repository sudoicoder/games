export default function assertUnreachable(indicator: never) {
  return new Error(
    `This part should never be reachable!! [indicator=${indicator}]`
  )
}
