import { shallowMount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";
import store from "@/store";

let volume1 = {
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
let volume2 = {
  volumeInfo: {
    title: "rain",
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
let arr = [volume1, volume2];

describe("HomeView", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(HomeView);
  });
  it("renders books ", function () {
    expect(wrapper.findAll('[data-test="book-list"]')).toHaveLength(1);
  });
  it("computed defined", async () => {
    expect(wrapper.vm.filteredBooks.length).toBeDefined();
    expect(wrapper.vm.books.length).toBeDefined();
  });
  it("changeText work", async () => {
    expect(wrapper.vm.changeText).toBeDefined();
    wrapper.vm.changeText("ax");
    expect(wrapper.vm.searchText).toBe("ax");
  });
  it("booksFromServer have", async () => {
    expect(wrapper.vm.booksFromServer()).toBeDefined();
  });
  it("filterBooks defined", async () => {
    await store.dispatch("setBooks", arr);
    wrapper.vm.searchText = "ai";
    expect(wrapper.vm.filteredBooks.length).toBe(1);
  });
});
