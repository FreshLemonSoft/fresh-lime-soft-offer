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
      path: "/offer/:id",
      name: "offerId",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/AdminPage.vue"),
    },
    {
      path: "/admin/signup",
      name: "signup",
      component: () => import("../views/SignUpPage.vue"),
    },
    {
      path: "/admin/login",
      name: "login",
      component: () => import("../views/LoginPage.vue"),
    },
    // {
    //   path: "/404",
    //   name: "404",
    //   component: () => import("../views/404Page.vue"),
    // },
    // {
    //   path: "*",
    //   redirect: "/404"
    // },
  ],
});

// router.beforeEach((to, from, next) => {
//   next();
// });