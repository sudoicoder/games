import { getOffsetedPosition } from "@/chess/services/getOffsetedPosition"
import { describe } from "vitest"

describe(`${getOffsetedPosition.name}`, it => {
  it("[0,0] + [-1,-1] = null", ({ expect }) => {
    expect(getOffsetedPosition([0, 0], [-1, -1])).toBeNull()
  })
  it("[7, 7] + [+1, +1] = null", ({ expect }) => {
    expect(getOffsetedPosition([7, 7], [+1, +1])).toBeNull()
  })
  it("[7, 0] + [+1, -1] = null", ({ expect }) => {
    expect(getOffsetedPosition([7, 0], [+1, -1])).toBeNull()
  })
  it("[0, 7] + [-1, +1] = null", ({ expect }) => {
    expect(getOffsetedPosition([0, 7], [-1, +1])).toBeNull()
  })
  it("[0, 4] + [-1, +1] = null", ({ expect }) => {
    expect(getOffsetedPosition([0, 4], [-1, +1])).toBeNull()
  })
  it("[7, 4] + [+1, +1] = null", ({ expect }) => {
    expect(getOffsetedPosition([7, 4], [+1, +1])).toBeNull()
  })
  it("[4, 0] + [-1, -1] = null", ({ expect }) => {
    expect(getOffsetedPosition([4, 0], [-1, -1])).toBeNull()
  })
  it("[4, 7] + [-1, +1] = null", ({ expect }) => {
    expect(getOffsetedPosition([4, 7], [-1, +1])).toBeNull()
  })
  it("should return position + steps", ({ expect }) => {
    expect(getOffsetedPosition([4, 4], [+1, +1])).toStrictEqual([5, 5])
  })
})
