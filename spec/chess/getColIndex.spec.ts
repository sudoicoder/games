import getColIndex from "@/chess/services/getColIndex"
import { describe } from "vitest"

describe(`${getColIndex.name}()`, it => {
  it("position = 7 -> col = 7", ({ expect }) => {
    expect(getColIndex(7)).toStrictEqual(7)
  })
  it("position = 8 -> col = 0", ({ expect }) => {
    expect(getColIndex(8)).toStrictEqual(0)
  })
  it("position = 53 -> row = 5", ({ expect }) => {
    expect(getColIndex(53)).toStrictEqual(5)
  })
  it("position = 56 -> row = 0", ({ expect }) => {
    expect(getColIndex(56)).toStrictEqual(0)
  })
  it("position = 64 -> row = 8", ({ expect }) => {
    expect(getColIndex(64)).toStrictEqual(0)
  })
})
