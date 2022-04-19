<template>
  <div class="BookView">
    <div class="">{{ getBook.volumeInfo.title }}</div>
    <img :src="getBook.volumeInfo.imageLinks.thumbnail" />
    <div class="">publish: {{ getBook.volumeInfo.publishedDate }}</div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import store from "@/store";
import { useRoute } from "vue-router";

const route = useRoute();
const getBook = computed(() =>
  store.getters["getBooks"].find((b) => b.id === route.params.id)
);
</script>

<style lang="scss" scoped></style>
