<!-- ProductModal.vue -->
<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
    @click.self="closeModal">
    <div class="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3 p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">تفاصيل المنتج</h2>
      <div class="relative">
        <div class="flex overflow-x-auto space-x-2 p-4 scrollbar-hide" ref="scrollContainer">
          <img v-for="img in product.images" :key="img" :src="getImagePath(img)" alt="Product Image"
            class="w-full h-48 object-cover rounded-lg shadow-md" />
        </div>
        <button @click.stop="scrollLeft"
          class="absolute left-0 top-1/2 transform -translate-y-1/2 text-white rounded-full p-2">
          <!-- <img class="w-7 mr-1" src="../assets/imgs/svg/ic-left-arrow.svg" alt="Cart Icon" /> -->
        </button>
        <button @click.stop="scrollRight"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 text-white rounded-full p-2">
          <!-- <img class="w-7 mr-1" src="../assets/imgs/svg/ic-right-arrow.svg" alt="Cart Icon" /> -->
        </button>
      </div>
      <!-- <img v-for="img in product.images" :key="img" :src="img" alt="Product Image"
        class="w-full h-48 object-cover rounded-lg mb-4" /> -->
      <!-- <img :src="product.image" alt="Product Image" class="w-full h-48 object-cover rounded-lg mb-4" /> -->
      <h3 class="text-lg font-semibold text-gray-800">{{ product.name }}</h3>
      <p class="text-gray-600 mt-1">{{ product.description }}</p>
      <p class="text-pink-600 font-bold mt-2">{{ product.price.toFixed(2) }} ر.س</p>
      <button @click="closeModal" class="mt-4 w-full bg-pink-500 text-white font-bold py-2 rounded">
        إغلاق
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits();

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  product: {
    type: Object,
    required: true,
  },
});
const getImagePath = (imageName) => {
  return new URL(`../assets/imgs/Dresses/${imageName}`, import.meta.url).href;
};
const closeModal = () => {
  emit('close'); // Emit the close event
};
</script>
