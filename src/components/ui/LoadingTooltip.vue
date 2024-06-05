<script lang="ts" setup>
defineProps<{
  isLoading: boolean
}>()
</script>

<template>
  <div style="text-align: center; padding: 10px">
    <div v-if="isLoading">getting token from server ...</div>
  </div>
</template>
