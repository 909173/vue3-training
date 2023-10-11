<script lang="ts" setup>
import { onMounted } from "vue"
import PrefectureCheck from "./PrefectureCheck.vue"
import { PrefectureDisplay } from "@/types/prefecture"
import { usePrefectureStore } from "@/store/prefectureList"
import { usePopulationStore } from "@/store/population"
const prefectureListStore = usePrefectureStore()
const populationStore = usePopulationStore()

// TODO: prefectureで千葉県を表示してみましょう

onMounted(() => {
  // TODO: 全県取得のAPIへリクエストを送ってみましょう!
  prefectureListStore.fetchPrefectureList()
})

function handleCheck(arg: PrefectureDisplay) {
  prefectureListStore.checkPrefecture(arg.prefCode, arg.isCheck)
  if (arg.isCheck) populationStore.fetchPopulation(arg)
  else populationStore.disposePopulation(arg)
}
</script>
<template>
  <div class="prefecture-container">
    <h3>都道府県</h3>
    <div class="prefecture-flex">
      <!-- TODO: 県を表示してみましょう -->
      <div
        v-for="prefecture in prefectureListStore.prefectureList"
        :key="prefecture.prefCode"
      >
        <PrefectureCheck
          :prefecture="prefecture"
          @check="handleCheck"
        ></PrefectureCheck>
      </div>
    </div>
  </div>
</template>
<style scoped>
.prefecture-container {
  max-width: 900px;
  width: 100%;
}

.prefecture-flex {
  display: grid;
  grid-template-columns: 33% 33% 33%;
}
</style>
