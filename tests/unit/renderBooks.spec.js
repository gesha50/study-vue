import { shallowMount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

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
  it("clean work", async () => {
    wrapper.vm.searchText = "ax";
    await wrapper.vm.clean();
    expect(wrapper.vm.searchText).toBe("");
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
    wrapper.vm.books = [{ title: "rain" }, { title: "hhh" }];
    wrapper.vm.searchText = "ai";
    expect(wrapper.vm.filteredBooks.length).toBe(1);
  });
});
