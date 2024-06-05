<script setup lang="ts">
import { storeToRefs } from "pinia"
import { jwts } from "../mock"

import { useUsersStore } from "../store/user"

const { getJwtToken } = useUsersStore()
const { selectedJwt } = storeToRefs(useUsersStore())

async function selectNewToken(index: number) {
  selectedJwt.value = index
  await getJwtToken()
  console.log(123)
}
</script>
<template>
  <div class="jwt-list">
    <div v-for="(jwt, index) in jwts.length" :key="jwt">
      <button @click="selectNewToken(index)">set jwt {{ index + 1 }}</button>
    </div>
  </div>
  <div style="text-align: center">
    {{ "current jwt: " + (selectedJwt + 1) }}
  </div>
</template>

<style scoped>
.jwt-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

button {
  margin: 10px;
  padding: 8px 20px;
  border-radius: 10px;
  border: none;
  background-color: #f1f1f1;
  color: #000;
}

button:hover {
  outline: 1px solid #000;
}
</style>
