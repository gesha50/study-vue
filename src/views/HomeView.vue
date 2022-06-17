<template>
  <div class="home">
    <q-btn data-test="get-books" color="blue-10" @click="booksFromServer"
      >Получить список книг</q-btn
    >
    <q-btn
      data-test="home-page"
      class="q-ml-lg"
      color="yellow-9"
      to="/book/add"
    >
      Добавить книгу
    </q-btn>
    <SearchBooks
      :search-text="searchText"
      @clean="clean"
      @change-text="changeText"
    ></SearchBooks>
    <h1 class="text-3xl font-bold underline">Книги</h1>
    <div class="list" data-test="book-list">
      <div v-for="book in filteredBooks" :key="book.id" class="card">
        <router-link class="card__link" :to="'/book/' + book.id">
          <div class="card__text">{{ book.title }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchBooks from "@/components/search/SearchBooks.vue";
import { computed, ref } from "vue";
import store from "@/store";
import getBook from "@/services/getBooks";

const { booksFromServer } = getBook();
const searchText = ref("");
let books = store.getters["getBooks"].length
  ? ref(store.getters["getBooks"])
  : ref([]);
function changeText(val): void {
  searchText.value = val;
}
const filteredBooks = computed(() => {
  if (searchText.value.length) {
    return books.value.filter((el) => {
      let str: string = el.title.toLowerCase();
      return str.includes(searchText.value.toLowerCase());
    });
  }
  return books.value;
});
function clean(): void {
  searchText.value = "";
}

// function auth() {
//   axios
//     .get("/sanctum/csrf-cookie")
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// }
// auth();
</script>

<style scoped lang="scss"></style>
