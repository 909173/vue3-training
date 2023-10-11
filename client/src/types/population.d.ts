import { Prefecture } from "./prefecture"

// TODO: API定義書を参考に型定義すること
export type Population = {
  year: number
  value: number
}
export type PopulationDisplay = Prefecture & {
  data: Population[]
}
