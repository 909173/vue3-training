<script lang="ts" setup>
const props = defineProps<{
  path: string
  width?: number
  height?: number
  color?: string
}>()
const width = props.width ? props.width : "24"
const height = props.height ? props.height : "24"
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <path :fill="color" :stroke="color" :d="path"></path>
  </svg>
</template>
