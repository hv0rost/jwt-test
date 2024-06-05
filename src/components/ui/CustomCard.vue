<script setup lang="ts">
defineProps<{
  header?: string
  body?: string
  readonly?: boolean
}>()
</script>

<template>
  <div class="card">
    <h1 class="header">{{ header }}</h1>
    <div style="text-align: center">{{ body }}</div>
    <button :disabled="readonly">
      {{ readonly ? "You can not click me" : "You can click me" }}
    </button>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  width: 300px;
  height: 200px;
  border: 2px solid;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
}

.header {
  text-align: center;
}

button {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
