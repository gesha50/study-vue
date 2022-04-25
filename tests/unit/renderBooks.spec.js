import { shallowMount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

test("renders books", () => {
  const wrapper = shallowMount(HomeView);
  console.log(wrapper);
  expect(wrapper.findAll('[data-test="book-list"]')).toHaveLength(1);
});
