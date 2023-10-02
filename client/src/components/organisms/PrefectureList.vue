<script lang="ts" setup>
import { computed, onMounted, ref } from "vue"
import axiosInstance from "@/utils/axiosSettings"
import { PrefectureDisplay } from "@/types/prefecture"
import { PrefectureResponse } from "@/types/api"
// TODO: prefectureで千葉県を表示してみましょう
const prefecture = ref<PrefectureDisplay>({
  isCheck: false,
  prefCode: 12,
  prefName: "千葉県"
})

const prefectureList = ref<PrefectureDisplay[]>([
  {
    isCheck: false,
    prefCode: 12,
    prefName: "千葉県"
  },
  {
    isCheck: false,
    prefCode: 13,
    prefName: "東京都"
  },
  {
    isCheck: false,
    prefCode: 14,
    prefName: "神奈川県"
  },
  {
    isCheck: false,
    prefCode: 15,
    prefName: "埼玉県"
  }
])
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
</script>
<template>
  <div class="prefecture-container">
    <h3>都道府県</h3>
    <div class="prefecture-flex">
      <!-- TODO: 県を表示してみましょう -->
      <div v-for="pref in prefectureList" :key="pref.prefCode">
        {{ pref.prefName }}
        <input v-model="pref.isCheck" type="checkbox" />
        {{ pref.isCheck }}
      </div>
    </div>
    <div
      v-for="uncheckedPref in checkedPrefectureList"
      :key="uncheckedPref.prefCode"
    >
      {{ uncheckedPref.prefName }}
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
