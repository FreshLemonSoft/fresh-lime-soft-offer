import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
      path: "/",
      name: "home",
      component: Home,
      beforeEnter(to, from, next) {
        window.location.href = "https://freshlimesoft.com";
      }
    },
    {
      path: "/offer/:id",
      name: "offerId",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      meta: {requiredAuth: true},
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const accessToken = localStorage.getItem('token')
  const requireAuth = to.matched.some(record => record.meta.requireAuth)

  if('/')

  if(requireAuth && !accessToken) {
    next('/admin/login')
  } else {
    next();
  }
});

export default router
