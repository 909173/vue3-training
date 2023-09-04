import { defineStore } from "pinia"
import axios from "axios"
import { ref } from "vue"

export const usePopulationStore = defineStore("population", () => {
  const populations = ref([])

  async function fetchPopulation(prefCode) {
    const res = await axios.get("/population/composition/perYear", {
      params: {
        prefCode
      }
    })
    populations.value = res.data.result.data[0].data
  }
  return {
    populations
  }
})
