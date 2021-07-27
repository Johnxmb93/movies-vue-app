import Vue from "vue";
import VueRouter from "vue-router";
import MoviesIndex from "../views/MoviesIndex.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import MoviesUpdate from "../views/MoviesUpdate.vue";
import MoviesShow from "../views/MoviesShow.vue";
import MoviesNew from "../views/MoviesNew.vue";


Vue.use(VueRouter);

const routes = [
  { path: "/moviesindex", name: "moviesindex", component: MoviesIndex },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/movies/:id/update", name: "moviesupdate", component: MoviesUpdate },
  { path: "/movies/:id", name: "moviesshow", component: MoviesShow },
  { path: "/moviesnew", name: "moviesnew", component: MoviesNew },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
