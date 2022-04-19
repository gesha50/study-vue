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
      console.log(state);
      state.books = arr;
    },
  },
  actions: {
    setBooks({ commit }, arr) {
      commit("setBooks", arr);
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
