import { createApp } from "vue";
import { createStore } from "vuex";
import { router } from "./router/router";
import store from './vuex/store';

import App from "./App.vue";

// const dotenv  = require("dotenv");

// const result = dotenv.config()

// console.log(result);

const app = createApp(App);

app.use(createStore(store)).use(router).mount("#root");