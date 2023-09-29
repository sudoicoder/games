export default function assertUnreachable(indicator: never) {
  throw new Error(
    `This part should never be reachable!! [indicator=${indicator}]`
  )
}
