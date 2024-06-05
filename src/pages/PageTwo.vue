<script setup lang="ts">
import { ComputedRef, computed } from "vue"
import { storeToRefs } from "pinia"

import CustomCard from "../components/ui/CustomCard.vue"

import { useUsersStore } from "../store/user"

const { permissions } = storeToRefs(useUsersStore())

const cardsInfo: ComputedRef = computed(() => [
  {
    header: "PageTwo header 1",
    body: "bodLorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, aliquid.",
    showed: permissions?.value?.pageTwo?.componentOne?.read,
    readonly: !permissions?.value?.pageTwo?.componentOne?.write,
  },
  {
    header: "PageTwo header 2",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, aliquid.",
    showed: permissions?.value?.pageTwo?.componentTwo?.read,
    readonly: !permissions?.value?.pageTwo?.componentTwo?.write,
  },
  {
    header: "PageTwo header 3",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, aliquid.",
    showed: permissions?.value?.pageTwo?.componentThree?.read,
    readonly: !permissions?.value?.pageTwo?.componentThree?.write,
  },
  {
    header: "PageTwo header 4",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, aliquid.",
    showed: permissions?.value?.pageTwo?.componentFour?.read,
    readonly: !permissions?.value?.pageTwo?.componentFour?.write,
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
