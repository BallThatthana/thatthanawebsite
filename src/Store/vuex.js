import { createStore } from 'vuex'
import AuthModule from './auth/index';
import PostModule from './post/index';

const store = createStore({
  modules:{
    auth: AuthModule,
    post: PostModule,

  },
})

export default store