<script setup>
import { useDarkModeStore } from '@/stores/darkMode'
const darkModeStore = useDarkModeStore()
</script>
<template>

    <label
    class="flex"
>
    <input
    type="checkbox"
@click="darkModeStore.toggleDarkMode"
    class="peer hidden absolute"
    />

<svg
  class="relative stroke-sky-800 w-10 h-10 duration-300 peer-checked:opacity-100 opacity-0"
  height="100"
  preserveAspectRatio="xMidYMid meet"
  viewBox="0 0 100 100"
  width="100"
  x="0"
  xmlns="http://www.w3.org/2000/svg"
  y="0"
>
  <path
    class="svg-stroke-primary"
    d="M82.1,61.2a31.9,31.9,0,0,1-12.4,2.4A33.3,33.3,0,0,1,36.4,30.3a31.9,31.9,0,0,1,2.4-12.4A33.3,33.3,0,1,0,82.1,61.2Z"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="8"
  ></path>
</svg>
<svg
  class="absolute abs stroke-yellow-500 w-10 h-10 duration-300  peer-checked:opacity-0 opacity-100"
  height="100"
  preserveAspectRatio="xMidYMid meet"
  viewBox="0 0 100 100"
  width="100"
  x="0"
  xmlns="http://www.w3.org/2000/svg"
  y="0"
>
  <path
    class="svg-stroke-primary"
    d="M50,18v3.6m0,56.8V82M82,50H78.4M21.6,50H18M72.6,72.6l-2.5-2.5M29.9,29.9l-2.5-2.5m45.2,0-2.5,2.5M29.9,70.1l-2.5,2.5M64.2,50A14.2,14.2,0,1,1,50,35.8,14.3,14.3,0,0,1,64.2,50Z"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="8"
  ></path>
</svg>
</label>

</template>
