import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import * as firebase from "firebase";

Vue.use(VueRouter);

const ifNotAuthenticated = (to, from, next) => {
  firebase.auth().onAuthStateChanged(user => {
    if (!user) {
      next();
      return;
    }
    next({ name: "admin" });
  });
};

const ifAuthenticated = (to, from, next) => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      next();
      return;
    }
    next({ name: "home" });
  });
};

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    beforeEnter: ifNotAuthenticated
  },
  {
    path: "/admin",
    name: "admin",
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/Admin.vue"),
    beforeEnter: ifAuthenticated
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
