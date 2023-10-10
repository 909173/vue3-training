<script lang="ts" setup>
import "c3/c3.css"
import { ChartConfiguration, generate } from "c3"
import { onMounted, ref } from "vue"
import { usePopulationStore } from "@/store/population"
const populationStore = usePopulationStore()
const c3GraphConfig = ref<ChartConfiguration>({
  bindto: "#c3-graph",
  data: {
    x: "year",
    xFormat: "%Y",
    columns: [["year"]],
    labels: true
  },
  axis: {
    x: {
      type: "timeseries",
      tick: {
        format: "%Y"
      },
      label: {
        text: "年度",
        position: "outer-right"
      }
    },
    y: {
      label: {
        text: "人口数",
        position: "outer-top"
      }
    }
  }
})
function initC3Graph() {
  const graphData = generate(c3GraphConfig.value)
  // TODO: グラフをstoreに保存してみましょう。
  populationStore.c3graphData = graphData
}
onMounted(() => {
  initC3Graph()
})
</script>

<template>
  <div id="c3-graph"></div>
</template>
