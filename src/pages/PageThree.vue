<script setup lang="ts">
import { ComputedRef, computed } from "vue"
import { storeToRefs } from "pinia"

import CustomCard from "../components/ui/CustomCard.vue"

import { useUsersStore } from "../store/user"

const { permissions } = storeToRefs(useUsersStore())

const cardsInfo: ComputedRef = computed(() => [
  {
    header: "PageThree header 1",
    body: "bodLorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, aliquid.",
    showed: permissions?.value?.pageThree?.componentOne?.read,
    readonly: !permissions?.value?.pageThree?.componentOne?.write,
  },
  {
    header: "PageThree header 2",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, aliquid.",
    showed: permissions?.value?.pageThree?.componentTwo?.read,
    readonly: !permissions?.value?.pageThree?.componentTwo?.write,
  },
  {
    header: "PageThree header 3",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, aliquid.",
    showed: permissions?.value?.pageThree?.componentThree?.read,
    readonly: !permissions?.value?.pageThree?.componentThree?.write,
  },
  {
    header: "PageThree header 4",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, aliquid.",
    showed: permissions?.value?.pageThree?.componentFour?.read,
    readonly: !permissions?.value?.pageThree?.componentFour?.write,
  },
])
</script>

<template>
  <div style="height: 100%; width: 100%">
    <div class="cards">
      <div v-for="card in cardsInfo" :key="card.header">
        <CustomCard
          v-if="card.showed"
          :header="card.header"
          :body="card.body"
          :readonly="card.readonly"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 10rem;
}
</style>
