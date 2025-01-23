<template>
  <button
    v-if="isVisible"
    @click="scrollToTop"
    class="fixed bottom-5 right-5  bg-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
    aria-label="Scroll to top"
  >
  <span >

      <img class="w-7" src="../assets/imgs/svg/up-arrow.svg" alt="" >
  </span>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

// Show or hide the button based on scroll position
const checkScroll = () => {
  isVisible.value = window.scrollY > 200; // Show button after scrolling down 200px
};

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Set up event listeners
onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<style scoped>
/* Additional styles can go here, but Tailwind is used for most styling */
</style>
