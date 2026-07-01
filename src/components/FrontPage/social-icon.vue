<template>
  <div class="w-full max-w-5xl mx-auto px-6 py-12 border-t border-black/10">
    <div class="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12">
      
      <div class="social-link-item">
        <a href="https://www.linkedin.com/in/thatthana-diloksinpanya/" target="_blank">LinkedIn</a>
      </div>
      
      <div class="social-link-item">
        <a href="tel:+66830644271">Phone</a>
      </div>
      
      <div class="social-link-item">
        <a href="mailto:thatthana.d@gmail.com">Mail</a>
      </div>
      
      <div class="social-link-item">
        <a href="https://github.com/BallThatthana" target="_blank">GitHub</a>
      </div>
      
      <div class="social-link-item">
        <a href="https://youtube.com/@BallEcomThatthana" target="_blank">YouTube</a>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialLinksFooter'
}
</script>

<style scoped>
.social-link-item a {
  position: relative;
  color: rgba(0, 0, 0, 0.8);
  font-size: 0.875rem; /* text-sm */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em; /* tracking-widest */
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 0.5rem 0;
}

.social-link-item a:hover {
  color: rgba(0, 0, 0, 1);
}

/* Elegant minimalist underline slide animation on hover */
.social-link-item a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease-out;
}

.social-link-item a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
</style>