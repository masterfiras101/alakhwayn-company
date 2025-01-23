<template>
  <div v-animateonscroll="{ enterClass: 'animate-fadeinleft', leaveClass: 'animate-fadeoutleft' }"
    class="max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer animate-duration-10000 animate-ease-in-out "
    :class="`max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer animate-duration-${product.duration} animate-ease-in-out`">
    <div class="relative">
      <div class="flex overflow-x-auto space-x-2 p-4 scrollbar-hide" ref="scrollContainer">
        <img v-for="img in product.images" :key="img" :src="getImagePath(img)" alt="Product Image"
          class="w-full h-48 object-cover rounded-lg shadow-md" />
        <!-- <img src="" alt="" srcset=""> -->
      </div>
      <button @click.stop="scrollLeft"
        class="absolute left-0 top-1/2 transform -translate-y-1/2 text-white rounded-full p-2">
        <img class="w-7 mr-1" src="@/assets/imgs/svg/ic-left-arrow.svg" alt="Cart Icon" />
      </button>
      <button @click.stop="scrollRight"
        class="absolute right-0 top-1/2 transform -translate-y-1/2 text-white rounded-full p-2">
        <img class="w-7 mr-1" src="@/assets/imgs/svg/ic-right-arrow.svg" alt="Cart Icon" />
      </button>
    </div>
    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-800">{{ product.name }}</h3>
      <p class="text-gray-600 mt-1">{{ product.description }}</p>
      <p class="text-gray-600 mt-1">{{ product.date }}</p>
      <p class="text-pink-600 font-bold mt-2">{{ product.price.toFixed(2) }} ر.ي</p>
    </div>
    <div class="flex justify-between items-center p-2">
      <button @click="toggleFavorite" class="flex items-center text-pink-500">
        <img
          :src="isFavorite ? icFavoriteFilled : icFavoriteOutline"
          alt="Favorite Icon" class="w-6 h-6" />
      </button>
      <button @click="openModal" class="bg-pink-500 text-white flex font-bold py-1 px-3 rounded">
        أضف إلى السلة
        <img class="w-7 mr-1" src="@/assets/imgs/svg/ic_cart_2.svg" alt="Cart Icon" />
      </button>
    </div>
    <ProductsModal :isOpen="modalOpen" :product="product" @close="modalOpen = false" />
  </div>
</template>

<script setup>
import icFavoriteFilled from '@/assets/imgs/svg/ic_favorite_filled.svg';
import icFavoriteOutline from '@/assets/imgs/svg/ic_favorite_outline.svg';
import { ref, defineProps } from 'vue';
import { useRouter } from 'vue-router'; 
import ProductsModal from './ProductsModal.vue';

const props = defineProps({
  product: {
    type: Object,
    required: true, 
  },
});

const getImagePath = (imageName) => {
  return new URL(`../assets/imgs/Dresses/${imageName}`, import.meta.url).href;
};
const modalOpen = ref(false);
const scrollContainer = ref(null);
const isFavorite = ref(false);
const router = useRouter(); 

const openModal = () => {
  modalOpen.value = true;
};



const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({
      top: 0,
      left: -200,
      behavior: 'smooth',
    });
  }
};
// Adjust the scroll distance as needed
const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({
      top: 0,
      left: 200, 
      behavior: 'smooth',
    });
  }
};

// Function to toggle favorite state
const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
};


</script>

<style>
.scrollbar-hide {
  scrollbar-width: none; /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
</style>
