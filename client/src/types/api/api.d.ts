export type ResasApiResponse<S> = {
  message: string
  result: S
}
export type PrefectureResponse = ResasApiResponse<Prefecture[]>
// 人口取得
export type PopulationResponse = ResasApiResponse<{
  boundaryYear: number
  data: {
    label: "総人口" | "年少人口" | "生産年齢人口" | "老年人口"
    data: Population[]
  }[]
}>
