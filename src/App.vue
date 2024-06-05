<script setup lang="ts">
import LoadingTooltip from "./components/ui/LoadingTooltip.vue"
import RouteItems from "./components/RouteItems.vue"
import JwtList from "./components/JwtList.vue"

import { useUsersStore } from "./store/user"
import { storeToRefs } from "pinia"

const { isLoading } = storeToRefs(useUsersStore())
</script>

<template>
  <JwtList v-if="!isLoading" />
  <LoadingTooltip :is-loading="isLoading" />
  <RouteItems />
  <router-view></router-view>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
</style>
