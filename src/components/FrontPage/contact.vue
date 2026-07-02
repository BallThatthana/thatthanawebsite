<template>
  <div v-if="!loading" class="w-full max-w-xl mx-auto px-6 py-16 md:py-20 transition-all duration-300">
    
    <div class="text-center mb-8">
      <h3 class="text-black text-xl sm:text-2xl font-bold tracking-tight mb-2">
        Have Questions?
      </h3>
      <p class="text-black/60 text-sm font-light tracking-wide">
        Fill out the details below to drop me a direct message.
      </p>
    </div>

    <form @submit.prevent="sendEmail" class="space-y-5">
      
      <div class="form-group">
        <input
          name="name"
          type="text"
          id="name"
          class="w-full bg-transparent border border-black/10 text-black text-sm rounded-none p-3 focus:outline-none focus:border-black transition-colors placeholder:text-black/40 font-light"
          placeholder="Your Name"
          v-model="form.name"
          required
        />
      </div>

      <div class="form-group">
        <input
          name="company"
          type="text"
          id="company"
          class="w-full bg-transparent border border-black/10 text-black text-sm rounded-none p-3 focus:outline-none focus:border-black transition-colors placeholder:text-black/40 font-light"
          placeholder="Your Company / Organization"
          v-model="form.company"
        />
      </div>

      <div class="form-group">
        <input
          name="email" 
          type="email"
          id="form-email"
          class="w-full bg-transparent border border-black/10 text-black text-sm rounded-none p-3 focus:outline-none focus:border-black transition-colors placeholder:text-black/40 font-light"
          placeholder="Your Email Address"
          v-model="form.email"
          required
        />
      </div>

      <div class="form-group">
        <textarea
          name="textarea" 
          id="textarea"
          rows="4"
          class="w-full bg-transparent border border-black/10 text-black text-sm rounded-none p-3 focus:outline-none focus:border-black transition-colors placeholder:text-black/40 font-light resize-none"
          placeholder="Write your message here..."
          v-model="form.message"
          required
        ></textarea>
      </div>

      <div class="pt-2">
        <button
          type="submit"
          class="w-full bg-black text-white hover:bg-black/10 hover:text-black border border-black font-bold tracking-widest text-xs uppercase py-4 rounded-none transition-all duration-300 transform hover:scale-[1.01]"
        > 
          Send message
        </button>
      </div>

      <div class="text-center pt-4">
        <p class="text-[10px] sm:text-xs font-mono text-black/40 tracking-normal">
          engine pipeline built with nodemailer & deployed on firebase cloud functions
        </p>
      </div>

    </form>
  </div>

  <div v-else class="flex justify-center items-center min-h-[60vh] transition-all duration-300">
    <flower-spinner
      :animation-duration="2500"
      :size="60"
      color="#000000"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { showSweetAlert } from '../../Store/utils/sweetalert'
import axios from 'axios';
import { FlowerSpinner } from 'epic-spinners'
import { api } from '@/services/api';

export default {
  name: 'ContactForm',
  components: {
    FlowerSpinner
  },
  computed: {
    ...mapGetters(['isAuth']),
    showLogin() {
      return !this.isAuth;
    },
  },
  data() {
    return {
      loading: false,
      form: {
        name: '',
        email: '',
        company: '',
        message: ''
      }
    }
  },
  methods: {
    async sendEmail() {
      try {  
        const { name, email, message } = this.form

        await axios.post(api.sendEmail, {
          name,
          email,
          text: message
        });
   
        this.loading = true;
        showSweetAlert('success', 'Email sent successfully', false, 1500);
        this.resetForm();
        
        setTimeout(() => {
          this.loading = false;
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 3000)

      } catch (err) {
        showSweetAlert('error', 'An error occurred', false, 1500);
        this.loading = false;
      }
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        company: '',
        message: ''
      };
    }
  }
}
</script>

<style scoped>
/* Extra messy hardcoded form styles removed. System fully follows architectural layout transitions. */
</style>