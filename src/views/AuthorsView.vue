<template>
  <div class="about">
    <h1>Список авторов</h1>
    <div class="list">
      <div v-for="book in books" :key="book.id" class="card">
        <div v-if="book.volumeInfo.authors.length > 1" class="card__text">
          <div v-for="(author, i) in book.volumeInfo.authors" :key="i" class="">
            {{ author }}
          </div>
        </div>
        <div v-else class="">
          <div class="">{{ book.volumeInfo.authors[0] }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import axios from "axios";
import store from "@/store";

const books = computed(() => store.getters["getBooks"]);
getData();

function getData() {
  axios
    .get(
      "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBX4sYCZZxiEAs2CTdbs7qsm0QqJLCU6mI"
    )
    .then((response) => {
      console.log(response.data.items);
      store.dispatch("setBooks", response.data.items);
    });
}
</script>
