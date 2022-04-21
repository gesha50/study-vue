<template>
  <div class="about">
    <SearchBooks
      :search-text="searchText"
      @clean="clean"
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
import axios from "axios";
import store from "@/store";
import SearchBooks from "@/components/search/SearchBooks.vue";

const searchText = ref("");

getData();

const books = computed(() => store.getters["getBooks"]);
const authors = computed(() => {
  let arr = [];
  books.value.forEach((book) => {
    book.volumeInfo.authors.forEach((author) => {
      arr.push(author);
    });
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

function clean() {
  searchText.value = "";
}

function changeText(val) {
  searchText.value = val;
}

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
