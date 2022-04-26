import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { BookObj } from "@/store/types/BookObj";

export default createStore({
  state: {
    books: <BookObj[]>[],
  },
  getters: {
    getBooks(s) {
      return s.books;
    },
  },
  mutations: {
    setBooks(state, arr: any[]) {
      state.books = [];
      arr.forEach((book: any, i) => {
        const objBook: BookObj = {
          id: i,
          title: book.volumeInfo.title,
          ISBN: book.volumeInfo.etag,
          author: book.volumeInfo.authors[0],
          image: book.volumeInfo.imageLinks.thumbnail,
          description: book.volumeInfo.description,
          category: book.volumeInfo.category,
          price: book.volumeInfo.ratingsCount,
        };
        state.books.push(objBook);
      });
    },
    addBook(state, obj: BookObj) {
      state.books.push(obj);
    },
  },
  actions: {
    setBooks({ commit }, arr: any[]) {
      commit("setBooks", arr);
    },
    addBook({ commit }, obj: BookObj) {
      commit("addBook", obj);
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
