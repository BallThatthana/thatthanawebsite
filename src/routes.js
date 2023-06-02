import { createRouter, createWebHistory } from "vue-router";
//import store from './Store/index.js';
import Home from './components/FrontPage/home.vue';
import Contact from './components/FrontPage/contact.vue';
import Login from './components/User/signup.vue';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    component: Login,
    name: 'login',
  },
  { 
    path: '/contact', 
    component: Contact, 
    name: 'contact',
    meta: { requiresAuth: true },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth && !store.getters['auth/isAuth']) {
//     next('/login');
//   } else {
//     next();
//   }
// });

export default router;
