import { ref } from "vue"
import { ChartAPI } from "c3"
import { defineStore } from "pinia"
import { PrefectureDisplay } from "@/types/prefecture"
import { PopulationDisplay } from "@/types/population"
import axiosInstance from "@/utils/axiosSettings"
import { PopulationResponse } from "@/types/api"

export const usePopulationStore = defineStore("population", () => {
  const population = ref<PopulationDisplay[]>([])
  const c3graphData = ref<ChartAPI | undefined>(undefined)
  function clearState() {
    c3graphData.value = undefined
    population.value = []
  }
  function addPopulation(prefecture: PopulationDisplay) {
    population.value.push(prefecture)
    if (!c3graphData.value) throw new Error("graph data is not initialized")
    c3graphData.value.load({
      columns: [
        ["year", ...prefecture.data.map((x) => `${x.year}`)],
        [`${prefecture.prefName}`, ...prefecture.data.map((x) => x.value)]
      ]
    })
  }
  function disposePopulation(arg: PrefectureDisplay) {
    population.value = population.value.filter(
      (x) => x.prefCode !== arg.prefCode
    )
    if (!c3graphData.value) throw new Error("graph data is not initialized")
    c3graphData.value.unload([`${arg.prefName}`])
  }
  async function fetchPopulation(arg: PrefectureDisplay) {
    const response = await axiosInstance.get<PopulationResponse>(
      "population/composition/perYear",
      {
        params: {
          prefCode: arg.prefCode
        }
      }
    )
    const totalPopulation = response.data.result.data.find(
      (x) => x.label === "総人口"
    )?.data
    if (!totalPopulation) throw new Error("total population data not found")
    addPopulation({
      ...arg,
      data: totalPopulation
    })
  }
  return {
    population,
    fetchPopulation,
    addPopulation,
    disposePopulation,
    c3graphData,
    clearState
  }
})
