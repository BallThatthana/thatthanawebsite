import store from './Store/auth/index';

// Route guard to check if the user is authenticated
export function requiresAuth(to, from, next) {
  if (!store.getters['auth/isAuth']) {
    // Store the intended route to redirect back after login
    store.dispatch('auth/setIntendedRoute', to.fullPath);
    next('/login');
  } else {
    next();
  }
}

// Route guard to check if the user is already authenticated and should not access login/signup pages
export function preventAuthedUser(to, from, next) {
  if (store.getters['auth/isAuth']) {
    next('/');
  } else {
    next();
  }
}
