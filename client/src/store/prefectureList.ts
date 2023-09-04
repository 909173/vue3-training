import { defineStore } from "pinia"
import axios from "axios"
import { ref } from "vue"
export const usePrefectureStore = defineStore("prefectureList", () => {
  // TODO: Storeの中身を書くこと
  const prefectureList = ref([])

  // 人口の取得
  async function fetchPrefectureList() {
    const res = await axios.get("/prefectures")
    prefectureList.value = res.data.result
  }
  return {
    fetchPrefectureList,
    prefectureList
  }
})
