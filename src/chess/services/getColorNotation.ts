const NOTATIONS = {
  dark: "dark",
  light: "light",
} as const

export type ColorVariant = keyof typeof NOTATIONS

export type ColorNotation = (typeof NOTATIONS)[ColorVariant]

export default function getColorNotation(color: ColorVariant) {
  return NOTATIONS[color]
}
