import getRowIndex from "@/chess/services/getRowIndex"
import { describe } from "vitest"

describe(`${getRowIndex.name}()`, it => {
  it("should return 0 for 7", ({ expect }) => {
    expect(getRowIndex(7)).toStrictEqual(0)
  })
  it("should return 1 for 8", ({ expect }) => {
    expect(getRowIndex(8)).toStrictEqual(1)
  })
  it("should return 6 for 53", ({ expect }) => {
    expect(getRowIndex(53)).toStrictEqual(6)
  })
  it("should return 7 for 56", ({ expect }) => {
    expect(getRowIndex(56)).toStrictEqual(7)
  })
  it("should return 8 for 64", ({ expect }) => {
    expect(getRowIndex(64)).toStrictEqual(8)
  })
})
