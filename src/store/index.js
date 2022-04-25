import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    books: [],
  },
  getters: {
    getBooks(s) {
      return s.books;
    },
  },
  mutations: {
    setBooks(state, arr) {
      state.books = [];
      arr.forEach((book, i) => {
        let objBook = {
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
    addBook(state, obj) {
      state.books.push(obj);
    },
  },
  actions: {
    setBooks({ commit }, arr) {
      commit("setBooks", arr);
    },
    addBook({ commit }, obj) {
      commit("addBook", obj);
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
