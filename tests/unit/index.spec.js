import store from "../../src/store/index";
let obj = {
  id: 1,
  title: "uuu",
  ISBN: "xdcfgv",
  author: "oooo",
  category: "kjhg",
  price: 1234,
};
let volume = {
  volumeInfo: {
    title: "uuu",
    etag: "xdcfgv",
    authors: ["oooo"],
    imageLinks: {
      thumbnail: "bvcgfhvjb",
    },
    description: "vhbjegj",
    category: "kjhg",
    ratingsCount: 1234,
  },
};
let arr = [volume];

test("check addBook", async () => {
  await store.getters.getBooks;
  await store.dispatch("addBook", obj);
  expect(store.state.books.length).toBe(1);
});
test("check setBooks", async () => {
  await store.dispatch("setBooks", arr);
  expect(store.getters.getBooks === store.state.books).toBeTruthy();
  expect(store.getters.getBooks.length).toBe(1);
});
