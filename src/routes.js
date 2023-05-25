import { createRouter, createWebHistory } from "vue-router";

import Home from './components/FrontPage/home.vue'
import Contact from './components/FrontPage/contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home' },
    { 
        path: '/contact', 
        component: Contact, 
        name: 'contact' },
  ]
});

export default router;
