<script setup>
import { ref } from 'vue';

import ThemeToggle from '@/components/ThemeToggle.vue';
import IndexContent from '@/views/pages/IndexContent.vue';
import Footer from '@/components/Footer.vue';
import ScrollToTopButton from '@/components/ScrollToTopButton.vue';
import { useScrollShadow } from '@/composables/useScrollShadow';
const { isScrolled } = useScrollShadow();
const mobileMenuOpen = ref(false);

const navigation = [
    { name: ' الحديد', href: '#dresses-section' },
    { name: ' للشراء', href: '#dresses-section' },
    { name: ' للإيجار', href: '#dresses-section' },
    { name: 'الاخشاب', href: '#dresses-section' },
];


</script>

<template>

    <div dir="rtl"
        class="min-h-screen  focus:scroll-auto  overflow-hidden bg-gray-50  dark:bg-slate-900 text-black/50  dark:text-white/50">
        <!--
             <img
                id="bg_welcome_page"
                class="absolute scale-x-[-1]  top-0 -rigt-0 md:max-w-[500px] max-w-[300px]"
                src="/assets/imgs/svg/bg_welcome_page.svg"
            />
            -->
        <div class="selection:bg-[#f472b6] selection:text-white">

            <header class="fixed z-20 w-full">

                <nav :class="['fixed top-0 w-full transition-shadow duration-300', isScrolled ? 'shadow-none dark:bg-slate-800' : 'shadow-lg']"
                    class="flex items-center shadow-pink-400 shadow-lg  justify-between px-3 lg:py-4 lg:px-8"
                    aria-label="Global">
                    <div class="flex lg:hidden">
                        <button type="button"
                            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            @click="mobileMenuOpen = true">
                            <span class="sr-only">Open main menu</span>
                            <label class="block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                                <!--
                <div aria-hidden="true" class="m-auto h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"></div>
                <div aria-hidden="true" class="m-auto mt-1 h-0.5 w-4 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"></div>
                <div aria-hidden="true" class="m-auto mt-1 h-0.5 w-2  rounded bg-gray-900 dark:bg-gray-300 transition duration-300"></div>
                -->
                                <span class="relative block h-5.5 w-5.5 cursor-pointer">
                                    <span class="block absolute right-0 h-full w-full">
                                        <span
                                            class="relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white"
                                            :class="{ '!w-3.5 delay-300': !mobileMenuOpen }">
                                        </span>
                                        <span
                                            class="relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white"
                                            :class="{ 'w-4.5 delay-400': !mobileMenuOpen }"></span>

                                        <span
                                            class="relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white"
                                            :class="{ '!w-3.5 delay-500': !mobileMenuOpen }"></span>

                                    </span>

                                </span>
                            </label>
                        </button>
                    </div>
                    <div class="flex   lg:flex-1 z-999">
                        <a href="#" :class="{ 'hidden': mobileMenuOpen }" class="-m-1.5 ml-4 spqce-x-3 p-2.5">
                            <p
                                class=" text-gray-900 dark:font-bold font-semibold  lg:pt-0 font-tharwat text-2xl  dark:text-white">
                                شركة الأخوين</p>
                        </a>
                    </div>
                    <div class="flex justfy-start lg:flex lg:justify-end mt-1 ">
                        <div class="inline-flex items-center">
                            <ThemeToggle />
                        </div>
                    </div>

                    <div class="hidden lg:flex lg:gap-x-12">
                        <a v-for="item in navigation" v-smooth-scroll :key="item.name" :href="item.href"
                            class="text-xl dark:text-white font-bold leading-6 text-gray-900">{{ item.name }}</a>
                    </div>

                    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                        <router-link :to="{ name: 'index_page' }" v-smooth-scroll
                            class="-mx-3 block bg-slate-100  scroll-smooth rounded-lg px-3 py-2.5 md:dark:bg-pink-200  text-base font-bold leading-7 text-gray-900 hover:bg-pink-50">تسجيل
                            الدخول</router-link>

                    </div>
                </nav>
                <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
                    <div class="fixed inset-0 z-50" />
                    <DialogPanel
                        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div class="flex items-center justify-between">
                            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-100"
                                @click="mobileMenuOpen = false">
                                <span class="sr-only">Close menu</span>
                                <label for="hbr"
                                    class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                                    <span class="block absolute right-0 h-full w-full rotate-45">
                                        <span
                                            class="absolute left-2.5 top-0 block h-5.5 w-0.5 rounded-sm bg-white  delay-300 duration-200 ease-in-out dark:bg-white"
                                            :class="{ '!h-0 delay-[0]': !mobileMenuOpen }"></span>
                                        <span
                                            class="delay-400 absolute left-0 top-2.5 block h-0.5 w-6 rounded-sm bg-white duration-200 ease-in-out dark:bg-white"
                                            :class="{ '!h-0 delay-200': !mobileMenuOpen }"></span>

                                    </span>
                                </label>
                            </button>
                            <a href="#" class="-m-1.5 p-2.5 ">
                                <!--
              <span class="sr-only">Y</span>
              
              <p class="text-white font-bold  text-xl  dark:text-white">Y</p>
              -->

                            </a>
                        </div>
                        <div class="mt-6 flow-root bg-white border-3 rounded-2xl">
                            <div class="-my-6 divide-y divide-gray-500/10">
                                <div class="space-y-2 py-6 text-center">
                                    <a v-for="item in navigation" :key="item.name" :href="item.href"
                                        class="mx-1 block rounded-lg px-3  py-2 text-base font-semibold leading-7  text-gray-900 hover:bg-pink-200">{{
                                        item.name }}</a>
                                </div>
                                <div class="py-6 text-center">
                                    <router-link :to="{ name: 'index_page' }" v-smooth-scroll
                                        @click="mobileMenuOpen = false"
                                        class=" block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-pink-200">تسجيل
                                        الدخول</router-link>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
            <!-- start slot section-->
            <div id="index-section" class="">
                <IndexContent />
            </div>

        </div>
    </div>

    <section
        class="bg-gray-50 py-10 border border-b-12   border-t-0 rounded-bl-[30px] rounded-br-[50px]  dark:bg-slate-900 text-black/50  dark:text-white/50"
        id="dresses-section">
    </section>

    <section id="footer" class=" abdolute">
        <Footer />
        <ScrollToTopButton />
    </section>


</template>