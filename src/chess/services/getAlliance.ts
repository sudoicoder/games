const NOTATIONS = {
  Dark: "Dark",
  Light: "Light",
} as const

export default function getAlliance(allianceType: AllianceType) {
  return NOTATIONS[allianceType]
}

export type AllianceType = keyof typeof NOTATIONS
export type Alliance = (typeof NOTATIONS)[AllianceType]
