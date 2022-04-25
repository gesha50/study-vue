<template>
  <div class="BookView">
    <div class="">{{ getBook.title }}</div>
    <img :src="getBook.image" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import store from "@/store";
import { useRoute } from "vue-router";

const route = useRoute();
const getBook = computed(() =>
  store.getters["getBooks"].find((b) => b.id.toString() === route.params.id)
);
</script>

<style lang="scss" scoped></style>
