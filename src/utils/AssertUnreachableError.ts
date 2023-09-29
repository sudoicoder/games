export default class AssertUnreachableError extends Error {
  constructor(indicator: never) {
    super(`This part should never be reached! [indicator=${indicator}]`)
  }
}
