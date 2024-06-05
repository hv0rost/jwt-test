<script setup lang="ts">
import { ComputedRef, computed } from "vue"

import { useUsersStore } from "../store/user"
import { storeToRefs } from "pinia"

const { permissions } = storeToRefs(useUsersStore())

const routes: ComputedRef = computed(() => [
  {
    name: "page-one",
    path: "/page-one",
    showed: true,
  },
  {
    name: "page-two",
    path: "/page-two",
    showed: permissions?.value?.pageTwo,
  },
  {
    name: "page-three",
    path: "/page-three",
    showed: permissions?.value?.pageThree,
  },
])
</script>

<template>
  <div class="nav">
    <div v-for="route in routes" :key="route.name" style="display: flex; justify-content: space-around;">
      <div v-if="route.showed" class="nav-item" @click="$router.push(route.path)">
        {{ route.name }}
      </div>
    </div>
  </div>
</template>

<style>
.nav {
  width: 100%;
  height: 50px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-around;
}

.nav-item {
  align-self: center;
  padding: 5px 10px;
  border: 2px solid black;
  border-radius: 10px;
}

.nav-item:hover {
  cursor: pointer;
}
</style>
