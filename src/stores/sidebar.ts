import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export  const useSidebarStore = defineStore('sidebar', () => {
  const isSidebarOpen = ref(false)
  const selected = useStorage('selected', ref('dashboard'))
  const page = useStorage('page', ref('index'))

  function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value
  }
    return { isSidebarOpen, toggleSidebar }
    // return { isSidebarOpen, toggleSidebar, selected, page }
});

