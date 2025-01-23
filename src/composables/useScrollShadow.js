import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useScrollShadow() {
  const isScrolled = ref(false);

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 0;
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return { isScrolled };
}
