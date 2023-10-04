<script lang="ts" setup>
import { computed, onMounted, ref } from "vue"
import PrefectureCheck from "./PrefectureCheck.vue"
import axiosInstance from "@/utils/axiosSettings"
import { PrefectureDisplay } from "@/types/prefecture"
import { PrefectureResponse } from "@/types/api"
// TODO: prefectureで千葉県を表示してみましょう
const prefecture = ref<PrefectureDisplay>({
  isCheck: false,
  prefCode: 12,
  prefName: "千葉県"
})

const prefectureList = ref<PrefectureDisplay[]>([])
const checkedPrefectureList = computed(() => {
  return prefectureList.value.filter((pref) => {
    return pref.isCheck
  })
})

function check(value: boolean) {
  prefecture.value.isCheck = value
}

onMounted(async () => {
  // TODO: 全県取得のAPIへリクエストを送ってみましょう!
  const response = await axiosInstance.get<PrefectureResponse>("/prefectures")
  prefectureList.value = response.data.result.map((x) => ({
    ...x,
    isCheck: false
  }))
})

function handleCheck(pref: PrefectureDisplay) {
  const index = prefectureList.value.findIndex(
    (x) => x.prefCode === pref.prefCode
  )
  if (index === -1) return
  prefectureList.value[index].isCheck = pref.isCheck
}

function handleCheck2(index: number, pref: PrefectureDisplay) {
  prefectureList.value[index].isCheck = pref.isCheck
}
</script>
<template>
  <div class="prefecture-container">
    <h3>都道府県</h3>
    <div class="prefecture-flex">
      <!-- TODO: 県を表示してみましょう -->
      <div v-for="(pref, index) in prefectureList" :key="pref.prefCode">
        <!-- {{ pref.prefName }}
        <input v-model="pref.isCheck" type="checkbox" />
        {{ pref.isCheck }} -->
        <PrefectureCheck
          :prefecture="pref"
          @check="handleCheck2(index, $event)"
        ></PrefectureCheck>
        {{ pref.isCheck }}
      </div>
    </div>
    <PrefectureCheck
      v-if="prefectureList.length > 0"
      :prefecture="prefectureList[0]"
    ></PrefectureCheck>
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
