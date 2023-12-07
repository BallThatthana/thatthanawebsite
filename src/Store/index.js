import { createStore } from 'vuex'
import AuthModule from './auth/index.js';
import PostModule from './post/index.js';
import LoaderModule from './loader/index.js';
import CartModule from './cart/index.js';

const store = createStore({
  modules:{
    auth: AuthModule,
    post: PostModule,
    loader: LoaderModule,
    cart: CartModule
  },
})

export default store