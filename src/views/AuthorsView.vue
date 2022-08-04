<template>
  <div class="about">
    <SearchBooks
      :search-text="searchText"
      @change-text="changeText"
    ></SearchBooks>
    <h1>Список авторов</h1>
    <div class="list">
      <div v-for="(author, i) in filteredAuthors" :key="i" class="card">
        {{ author }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import store from "@/store";
import SearchBooks from "@/components/search/SearchBooks.vue";

const searchText = ref("");

const books = computed(() => store.getters["getBooks"]);
const authors = computed(() => {
  let arr = [];
  books.value.forEach((book) => {
    arr.push(book.author);
  });
  return arr;
});

const filteredAuthors = computed(() => {
  if (searchText.value.length) {
    return authors.value.filter((author) => {
      let str = author.toLowerCase();
      return str.includes(searchText.value.toLowerCase());
    });
  }
  return authors.value;
});

function changeText(val) {
  searchText.value = val;
}
</script>
