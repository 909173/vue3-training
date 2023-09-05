import { ChartAPI } from "c3"
import { createPinia, setActivePinia } from "pinia"
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"
import { PopulationDisplay } from "@/types/population"
import { usePopulationStore } from "@/store/population"
// import axiosInstance from  "../../util/axiosSettings"
beforeEach(() => {
  setActivePinia(createPinia())
})
afterEach(() => {
  vi.clearAllMocks()
})
describe("clearState テスト", () => {
  test("正常テスト", () => {
    const populationStore = usePopulationStore()
    const population: PopulationDisplay[] = [
      {
        data: [],
        prefCode: 0,
        prefName: "北海道"
      }
    ]
    const c3graphData = {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      load: (_: { columns: [string, ...any[]] }) => {}
    } as ChartAPI
    populationStore.c3graphData = c3graphData
    populationStore.population = population
    expect({
      c3graphData: populationStore.c3graphData,
      population: populationStore.population
    }).toEqual({
      c3graphData,
      population
    })
    populationStore.clearState()
    expect({
      c3graphData: populationStore.c3graphData,
      population: populationStore.population
    }).toEqual({
      c3GraphData: undefined,
      population: []
    })
  })
})
