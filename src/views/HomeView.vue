<template>
  <div class="home">
    <h1>Книжная лавка</h1>
    <div class="list">
      <div v-for="book in books" :key="book.id" class="card">
        <router-link class="card__link" :to="'/book/' + book.id">
          <div class="card__text">{{ book.volumeInfo.title }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import store from "@/store";
import axios from "axios";

const books = computed(() => store.getters["getBooks"]);
getData();
function getData() {
  axios
    .get(
      "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBX4sYCZZxiEAs2CTdbs7qsm0QqJLCU6mI"
    )
    .then((response) => {
      store.dispatch("setBooks", response.data.items);
    });
}
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
