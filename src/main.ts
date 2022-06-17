import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import "./styles/tailwindcss.css";

createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .mount("#app");
