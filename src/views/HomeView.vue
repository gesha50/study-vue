<template>
  <div class="home">
    <SearchBooks
      :search-text="searchText"
      @clean="clean"
      @change-text="changeText"
    ></SearchBooks>
    <h1>Книжная лавка</h1>
    <div class="list">
      <div v-for="book in filteredBooks" :key="book.id" class="card">
        <router-link class="card__link" :to="'/book/' + book.id">
          <div class="card__text">{{ book.volumeInfo.title }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import SearchBooks from "@/components/search/SearchBooks.vue";
import { computed, ref } from "vue";
import store from "@/store";
import axios from "axios";

const searchText = ref("");
const books = computed(() => store.getters["getBooks"]);
function changeText(val) {
  searchText.value = val;
}
const filteredBooks = computed(() => {
  if (searchText.value.length) {
    return books.value.filter((el) => {
      let str = el.volumeInfo.title.toLowerCase();
      return str.includes(searchText.value.toLowerCase());
    });
  }
  return books.value;
});

function clean() {
  searchText.value = "";
}
function getData() {
  axios
    .get(
      "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBX4sYCZZxiEAs2CTdbs7qsm0QqJLCU6mI"
    )
    .then((response) => {
      store.dispatch("setBooks", response.data.items);
    });
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
getData();
</script>

<style scoped lang="scss">
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card {
  width: 33%;
  background: honeydew;
  margin-bottom: 12px;
  &__link {
    text-decoration: none;
    &:hover {
      color: #2c3e50;
    }
  }
  &__text {
    font-size: 18px;
  }
}
</style>
