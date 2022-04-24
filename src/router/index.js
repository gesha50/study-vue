import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "books",
    component: HomeView,
  },
  {
    path: "/authors",
    name: "authors",
    component: () => import("../views/AuthorsView.vue"),
  },
  {
    path: "/book/:id",
    name: "book",
    component: () => import("../views/BookView.vue"),
  },
  {
    path: "/example",
    name: "example",
    component: () => import("../views/ExampleTS.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
