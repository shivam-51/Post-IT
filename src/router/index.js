import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../components/authentication/Signupcard.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/authentication/Logincard.vue")
  },
  {
    path: "/addblog",
    name: "AddBlog",
    component: () => import("../views/AddBlog.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/allblog",
    name: "AllBlog",
    component: () => import("../views/AllBlog.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/team",
    name: "Team",
    component: () => import("../views/Team.vue")
  },
  {
    path: "/notice",
    name: "Notice",
    component: () => import("../views/Notice.vue")
  },
  {
    path: "/allnotice",
    name: "AllNotice",
    component: () => import("../views/AllNotice.vue")
  },
  
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  var isAuthenticated = firebase.auth().currentUser;
  if (requiresAuth && !isAuthenticated) {
    next("/login");
    alert("Please Login or Create Account first");
  } else next();
});

export default router;
