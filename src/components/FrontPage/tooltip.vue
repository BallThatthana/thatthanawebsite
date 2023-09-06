<!-- Tooltip.vue -->
<template>
    <div class="tooltip" v-if="showTooltip">
      {{ content }}
    </div>
    <slot></slot>
  </template>
  
  <script>
  export default {
    props: {
      content: String,
    },
    data() {
      return {
        showTooltip: false,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add styling for your tooltip here */
  .tooltip {
    position: absolute;
    background-color: #333;
    color: white;
    padding: 5px;
    border-radius: 5px;
    z-index: 999;
  }
  </style>
  