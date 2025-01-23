<script setup>
import { ref } from 'vue';
const mobileMenuOpen = ref(false);
const navigation = [
    { name: 'خدمة العملاء', href: '#' },
    { name: 'خدمات الشركة', href: '#' },
    { name: 'عن الشركة', href: '#' },
];
defineProps({
    status: {
        type: String,
    },
});
const closePopupLogin = ref(true)

const openOrCloseLogin = () => {
    closePopupLogin.value = !closePopupLogin.value;
};

</script>
<template>
    <header class="sticky top-0 xl:top-6 font-cairo z-[100] transition-all">
        <nav class="flex items-center  justify-between max-w-8xl mx-auto p-6 xl:rounded-xl transition-all z-[101] py-6 bg-white/5 shadow-[0_2px_10px_0_rgba(0,0,0,0.5)]"
            style="backdrop-filter: blur(6px);">
            <div class="flex justify-end">
                <a class=" p-1.5 flex items-center text-2xl lg:hidden   transition-all" href="#">
                <!-- <img class="h-10 w-10 mr-2  rounded-full" src="/assets/imgs/app-icon/ic_app.png" alt="" srcset=""> -->
                <span class="sr-o text-blue-500">شركة الاخوين</span>


                </a>
                
            </div>
            <div></div>
            <div class="flex sm:hidden  items-center gap-4">
                <div target="_blank"
                    class="inline-block relative font-semibold px-4 py-2 text-center transition-colors rounded-lg bg-white/5 hover:bg-white/5 text-black"
                    @click="openOrCloseLogin"></div>
                <button type="button" @click="mobileMenuOpen = true"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400">
                    <span class="sr-only">Open main menu</span>
                    <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                    </svg>
                </button>
            </div>
            <div class="hidden sm:flex    sm:gap-x-6">
                <!-- <div class="relative" data-headlessui-state="">
                    <button
                        class="group flex items-center gap-x-1 text-sm font-semibold leading-7 text-black hover:text-aquamarine transition-colors"
                        type="button" aria-expanded="false"
                        id="">Product</button>
                </div> -->
                <a v-for="nav in navigation" :key="nav.name" :href="nav.href"
                    class="text-lg font-bold  leading-7 text-black  transition-colors hover:text-aquamarine">
                {{
                    nav.name }}</a>

                <!-- <a class="text-sm font-semibold leading-7 text-black transition-colors hover:text-aquamarine"
                    :href="route('login')">أسعار الإشتراك</a>
                <a class="text-sm font-semibold leading-7 text-black transition-colors hover:text-aquamarine"
                    :href="route('login')">عن الشركة</a>
                <a class="text-sm font-semibold leading-7 text-black transition-colors hover:text-aquamarine"
                    :href="route('login')">المنصة</a>
                    <a target="_blank" rel="noreferrer noopener"
                        class="inline-block relative -mr-3 font-semibold px-4 py-2 text-center transition-colors rounded-lg bg-aquamarine text-bunker bg-white/5 hover:bg-white/5 text-black"
                        @click="(e) => newTab(e, 'dev.index')">Dev </a>
                <a class="text-sm font-semibold leading-7 text-black transition-colors hover:text-aquamarine"
                    :href="route('login')">Launch Week</a> -->
            </div>
            <div class="hidden  sm:flex sm:gap-4 sm:justify-end sm:items-center mr-4">

                <div target="_blank" rel="noreferrer noopener"
                    class="inline-block relative hover:cursor-pointer font-semibold px-4 py-2 text-center transition-colors rounded-lg bg-white/5 hover:bg-white/5 text-black dark:text-black"
                    @click="openOrCloseLogin"></div>
                <div target="_blank" rel="noreferrer noopener"
                    class="inline-block relative hover:cursor-pointer  -mr-3 font-semibold px-4 py-2 text-center transition-colors rounded-lg bg-aquamarine text-bunker bg-white/5 text-xl hover:bg-white/5 text-black dark:text-blue"
                    @click="openOrCloseLogin">شركة الأخوين</div>


            </div>
        </nav>
        <Dialog class="lg:hidden  " @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-50" />
            <DialogPanel
                class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto  bg-white/2  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-end">
                    <button type="button" class="-m-2.5 ml-12  pt-1  rounded-md p-2.5 text-gray-100"
                        @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <label for="hbr"
                            class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                            <span class="block absolute right-0 h-full w-full rotate-45">
                                <span
                                    class="absolute left-2.5 top-0 block h-5.5 w-0.5 rounded-sm bg-black  delay-300 duration-200 ease-in-out dark:bg-black"
                                    :class="{ '!h-0 delay-[0]': !mobileMenuOpen }"></span>
                                <span
                                    class="delay-400 absolute left-0 top-2.5 block h-0.5 w-6 rounded-sm bg-white duration-200 ease-in-out dark:bg-black"
                                    :class="{ '!h-0 delay-200': !mobileMenuOpen }"></span>

                            </span>
                        </label>
                    </button>
                    <a href="#" class="-m-1.5 p-2.5 ">
                    <!--
              <span class="sr-only">Y</span>

              <p class="text-black font-bold  text-xl  dark:text-black">Y</p>
              -->

                    </a>
                </div>
                <div class="mt-6 flow-root  border-3 rounded-2xl">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6 text-center">
                            <a v-for="item in navigation" :key="item.name" :href="item.href"
                                class="mx-1 block rounded-lg px-3  py-2 text-base font-semibold leading-7 border text-black dark:bg-blue-200 dark:text-black hover:bg-blue-500">
                            {{
                                item.name }}</a>
                        </div>
                        <!-- <div class="py-6 text-center">
                            <a href="#"
                                class=" block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:cursor-pointer text-gray-900 hover:bg-blue-200">
                        شركة الأخوين</a>
                        </div> -->
                    </div>
                </div>
            </DialogPanel>
        </Dialog>

    </header>


</template>
