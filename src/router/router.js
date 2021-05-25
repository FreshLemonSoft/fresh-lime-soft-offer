import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/newOffer/",
      name: "newOffer",
      component: Home
    },
    {
      path: "/newOffer/:id",
      name: "newOfferId",
      component: Home
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/AdminPage.vue"),
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   next();
// });