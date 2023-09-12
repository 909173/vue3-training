<script lang="ts" setup>
import { onMounted, ref } from "vue"
import axiosInstance from "@/utils/axiosSettings"
import { PrefectureDisplay } from "@/types/prefecture"
// TODO: prefectureで千葉県を表示してみましょう
const prefecture = ref<PrefectureDisplay>({})

onMounted(() => {
  // TODO: 全県取得のAPIへリクエストを送ってみましょう!
  const response = axiosInstance.get("")
})
</script>
<template>
  <div class="prefecture-container">
    <h3>都道府県</h3>
    <div class="prefecture-flex">
      <!-- TODO: 県を表示してみましょう -->
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
