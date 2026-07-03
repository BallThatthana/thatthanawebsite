import { createRouter, createWebHistory } from "vue-router";
import store from './Store/index.js';
import Home from './components/FrontPage/home.vue';
import Signup from './components/User/signup.vue';
import Postpage from './components/Posts/index.vue';
import Post from './components/Posts/post.vue';
import Products from './components/Products/index';
import ProductDetail from './components/Products/product-detail';
import Checkout from './components/Utils/checkout';
import TestApi from './components/FrontPage/testApi';

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/login', component: Signup, name: 'signup' },
  { path: '/posts', component: Postpage, name: 'posts' },
  { path: '/posts/:postId', component: Post, name: 'post' },
  { path: '/products', component: Products, name: 'products' },
  { path: '/products/:id', component: ProductDetail, name: 'product-detail' },
  { path: '/checkout', component: Checkout, name: 'checkout', meta: { requiresAuth: true } },
  { path: '/testapi', component: TestApi, name: 'testapi' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Clean, reactive global navigation guard
router.beforeEach(async (to, from, next) => {
  store.dispatch('showLoader');

  // 1. Force a Firebase state validation check only if the store isn't populated yet
  // This stops unnecessary double-network calls when clicking around the navbar
  await store.dispatch('checkAuthStatus');

  // 2. CRITICAL FIX: Pull the fresh, updated authentication state AFTER the dispatch resolves
  const isAuth = store.getters['isAuth'];

  // 3. Process access routing boundaries
  if (to.meta.requiresAuth && !isAuth) {
    // Protected route fallback redirection route
    next({
      path: '/login',
      query: { redirectFrom: to.fullPath },
    });
    store.dispatch('hideLoader');
    
  } else if (to.name === 'signup' && isAuth) {
    // If logged in, block access to login page and redirect home
    next({ path: to.query.redirectFrom || '/' });
    store.dispatch('hideLoader');
  } else {
    // Proceed safely
    store.dispatch('hideLoader');
    next();
  }
});

router.afterEach(() => {
  store.dispatch('hideLoader');
});

export default router;