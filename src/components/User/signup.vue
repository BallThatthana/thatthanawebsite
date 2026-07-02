<template>
  <div class="w-full max-w-md mx-auto px-6 pt-28 pb-16 transition-all duration-300">
    
    <div class="text-center mb-8">
      <h3 class="text-black text-xl sm:text-2xl font-bold tracking-tight mb-2">
        {{ variableTitle() }}
      </h3>
      <p class="text-black/40 text-xs font-mono lowercase tracking-normal">
        secured via firebase authentication services
      </p>
    </div>

    <form @submit.prevent="onSubmit" class="space-y-5">
      
      <div class="form-group">
        <input
          name="email" 
          type="email"
          id="signin-email"
          class="w-full bg-transparent border border-black/10 text-black text-sm rounded-none p-3 focus:outline-none focus:border-black transition-colors placeholder:text-black/40 font-light"
          placeholder="Email Address"
          v-model="form.email"
          required
        />
      </div>

      <div class="form-group">
        <input
          name="password"
          type="password"
          id="password"
          class="w-full bg-transparent border border-black/10 text-black text-sm rounded-none p-3 focus:outline-none focus:border-black transition-colors placeholder:text-black/40 font-light"
          placeholder="Password"
          v-model="form.password"
          required
        />
      </div>

      <div class="pt-2">
        <button
          type="submit"
          class="w-full bg-black text-white hover:bg-black/10 hover:text-black border border-black font-bold tracking-widest text-xs uppercase py-4 rounded-none transition-all duration-300 transform active:scale-[0.99]"
        >
          {{ !type ? 'Sign in' : 'Sign up' }}
        </button>
      </div>

      <div class="py-2">
        <div class="w-full h-[1px] bg-black/10"></div>
      </div>

      <div class="text-center text-sm text-black/60 font-light">
        <span>{{ type ? "Already have an account?" : "Don't have an account yet?" }}</span>
        <button 
          type="button"
          @click="type = !type"
          class="ml-1.5 font-bold text-black hover:text-black/60 underline decoration-black/20 underline-offset-4 transition-colors focus:outline-none"
        >
          {{ type ? 'Sign In' : 'Sign Up' }}
        </button>
      </div>

    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { showSweetAlert } from '../../Store/utils/sweetalert.js';

export default {
  name: 'UserAuthentication',
  emits: ['close'],
  computed: {
    ...mapGetters(['isAuth', 'toggleShowLogin']),
  },
  data() {
    return {
      type: false,
      signInAndSignUpComplete: false,
      form: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    ...mapActions(['signin', 'signup', 'logOut', 'changeLoginState', 'closeLoginModal']),
    
    variableTitle() {
      let type = this.type;
      const currentURL = window.location.href;
      const isLoginPage = currentURL.endsWith('/login') || this.$route.name === 'signup';
      
      if (!isLoginPage) {
        return !type ? 'Sign In to Download CV' : 'Sign Up to Download CV';
      } else {
        return !type ? 'Welcome Back' : 'Create Account';
      }
    },
    onCloseModal() {
      this.$emit('close');
    },
    async onSubmit() {
      try {
        if (!this.type) {
          // Process existing user account signin authorization routine
          await this.$store.dispatch('signin', this.form);
          this.onCloseModal();
          if (this.$store.getters.isAuth) {
            const redirectFrom = this.$route.query.redirectFrom || '/';
            this.$router.push(redirectFrom);
          }
        } else {
          // Process registration profile database configuration creation routine
          await this.$store.dispatch('signup', this.form);
          this.onCloseModal();
          if (this.$store.getters.isAuth) {
            const redirectFrom = this.$route.query.redirectFrom || '/';
            this.$router.push(redirectFrom);
          }
        }
      } catch (err) {
        if (err.response && err.response.data && err.response.data.error.message === 'INVALID_PASSWORD') {
          showSweetAlert('error', 'Incorrect password configuration matching context details.', false, 1500);
        } else {
          showSweetAlert('error', err.message || err, false, 1500);
        }
      }
    },
    onLogOut() {
      this.$store.dispatch('logOut');
      this.$store.commit('closeLogin');
    }
  }
}
</script>

<style scoped>
/* Extraneous fixed positioning rules cleaned out. Form flows cleanly through viewport bounds. */
</style>