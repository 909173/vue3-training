<script setup lang="ts"></script>
<template>
  <header class="header">
    <div class="header-container">
      <h1 class="header-title">タイトル</h1>
      <!-- TODO: 各ページのリンクを書いてみましょう -->
    </div>
  </header>
</template>
<style scoped>
.router-link {
  padding: 12px;
}
.header {
  background-color: grey;
  display: flex;
  align-items: center;
}
.header-container {
  padding: 0px 12px;
  flex-grow: 1;
  height: auto;
  text-align: left;
}
.header-title {
  margin: 0;
}
</style>
