import { createRouter, createWebHistory } from "vue-router";
import store from './Store/index.js';
import Home from './components/FrontPage/home.vue';
//import Login from './components/FrontPage/login.vue';
import Signup from './components/User/signup.vue'
import Postpage from './components/Posts/index.vue'
import Post from './components/Posts/post.vue'
import Products from './components/Products/index'
import ProductDetail from './components/Products/product-detail'
import Checkout from './components/Utils/checkout'
import TestApi from './components/FrontPage/testApi'

// async function resolveUserData(to, from, next) {
//   const user = store.getters['getUserData'];

//   if (!user.uid) {
//     // User data is not available, fetch it
//     try {
//       await store.dispatch('checkAuthStatus');
//       next();
//     } catch (error) {
//       console.error(error);
//       // Handle the error or redirect to an error page
//       next('/error');
//     }
//   } else {
//     // User data is already available, proceed to the route
//     next();
//   }
// }

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/login', component: Signup, name: 'signup'},
  { path: '/posts', component: Postpage, name: 'posts',
    //beforeEnter: resolveUserData,
  },
  { path: '/posts/:postId', component: Post, name: 'post' },
  { path: '/products', component: Products, name: 'products' },
  { path: '/products/:id', component: ProductDetail, name: 'product-detail' },
  { path: '/checkout', component: Checkout, name: 'checkout' },
  { path: '/testapi', component: TestApi, name: 'testapi' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to, from, next) => {
  //const isLoading = store.getters['isLoading'];
  const isAuth = store.getters['isAuth'];
  store.dispatch('showLoader')
  // Fetch user data and wait for it to be available
  await store.dispatch('checkAuthStatus');
  //const user = store.getters['getUserData'];
    if (!isAuth && to.meta.requiresAuth) {
      next({
        path: '/login',
        query: { redirectFrom: to.fullPath },
      });
    } else if (to.name === 'signup' && isAuth) {
      next({ path: to.query.redirectFrom || '/' });
    } else {
      // Continue with the navigation
      next();
    }
});

router.afterEach(()=>{
  store.dispatch('hideLoader');
})

export default router;
