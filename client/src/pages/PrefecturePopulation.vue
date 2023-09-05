<script setup lang="ts">
import PrefectureList from "@/components/organisms/PrefectureList.vue"
import PopulationGraph from "@/components/organisms/PopulationGraph.vue"
</script>
<template>
  <div class="prefecture-container">
    <div class="prefecture-flex">
      <PrefectureList></PrefectureList>
    </div>
    <PopulationGraph></PopulationGraph>
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
