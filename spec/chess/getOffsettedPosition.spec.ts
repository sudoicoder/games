import getOffsettedPosition from "@/chess/services/getOffsettedPosition"
import { describe } from "vitest"

describe(`${getOffsettedPosition.name}()`, it => {
  it("7 + [0, -1] = 6", ({ expect }) => {
    expect(getOffsettedPosition(7, [0, -1])).toStrictEqual(6)
  })
  it("8 + [0, -1] = -1", ({ expect }) => {
    expect(getOffsettedPosition(8, [0, -1])).toStrictEqual(-1)
  })
  it("53 + [+1, 0] = 61", ({ expect }) => {
    expect(getOffsettedPosition(53, [+1, 0])).toStrictEqual(61)
  })
  it("56 + [0, 0] = 56", ({ expect }) => {
    expect(getOffsettedPosition(56, [0, 0])).toStrictEqual(56)
  })
  it("64 + [0, 0] = -1", ({ expect }) => {
    expect(getOffsettedPosition(64, [0, 0])).toStrictEqual(-1)
  })
  it("57 + [-1, -2] = -1", ({ expect }) => {
    expect(getOffsettedPosition(57, [-1, -2])).toStrictEqual(-1)
  })
})
