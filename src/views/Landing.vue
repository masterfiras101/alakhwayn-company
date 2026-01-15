<script setup>

import { CloudArrowUpIcon, ArrowUpIcon, ArrowDownIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid'
import ThemeToggle from '@/components/ThemeToggle.vue';
import HeroSection from '@/components/landing/HeroSection.vue';
import landingimage from '@/assets/imgs/ic_3.webp';
import serviceFirstImage from '@/assets/imgs/ic_1.jpg';
import serviceSecondImage from '@/assets/imgs/ic_2.jpg';
import serviceFourthImage from '@/assets/imgs/ic_4.webp';
import serviceLastImage from '@/assets/imgs/ic_5.jpg';

</script>




<template>

    <div id="top-app" class="font-cairo ">
        <HeroSection />
        <section class="px-2 py-32  shadow-default  dark:border-strokedark  md:px-0">

            <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                <div class="flex flex-wrap items-center sm:-mx-3">
                    <div class="w-full md:w-1/2">
                        <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                            <img :src="landingimage" alt="landingimage" loading="lazy">

                        </div>
                    </div>
                    <div class="w-full md:w-1/2 md:px-3">

                        <div
                            class="w-full pb-6 text-right  space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">

                            <h1 class="text-2xl sm:text-6xl font-extrabold text-black text-center whitespace-nowrap ">
                                <span
                                    class="inline text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-sky-300 dark:via-indigo-300 dark:to-sky-500">
                                    شركة
                                </span>
                                <span
                                    class="inline text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
                                    الأخوين
                                </span>
                            </h1>




                            <div class="mx-auto text-base dark:text-black sm:max-w-md lg:text-xl md:max-w-3xl">
                                <h1 class="text-md font-bold tracking-tight sm:text-2xl leading-relaxed">
                                    هي شركة يمنية متخصصة في استيراد وإعادة تصنيع الحديد والبلاستيك، تهدف إلى تقديم حلول
                                    مهنية وفعالة لتلبية احتياجات السوق المحلي والعالمي.
                                    <br><br>

                                    <p> احصل على أفضل المنتجات مع أعلى معايير الجودة والكفاءة.
                                    </p>
                                </h1>
                            </div>


                            <div class=" flex flex-col sm:justify-center lg:justify-center sm:flex-row sm:space-x-4">
                                <hr class="my- w-50 h-3 border-blue-200 md:my-8 dark:border-blue-500">
                                <hr class="my- w-50 h-3 border-blue-200 md:my-8 dark:border-blue-500">


                                <div class="flex flex-col items-center gap-2">

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section>
            <div class="relative overflow-hidden bg-white pt-16 pb-32 space-y-24">
                <div class="flex justify-center mb-12">
                    <h1 class="text-3xl font-extrabold text-black dark:text-black text-center">
                        <span class="underline decoration-blue-500">
                           خدمات الشركة
                        </span>
                    </h1>
                </div>
                <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true">
                    <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3884f7] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
                </div>
                <div class="relative">
                    <div
                        class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                        <div class="mt-12 sm:mt-16 lg:mt-0">
                            <div class="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img loading="lazy" width="647" height="486"
                                    class="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    style="color:transparent" :src="serviceFirstImage">
                            </div>
                        </div>
                        <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">

                            <div>
                                <div>
                                    <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500">
                                        <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                            class="h-8 w-8 text-black">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z">
                                            </path>
                                        </svg> -->
                                    </span>
                                </div>

                                <div class="mt-6">
                                    <h2 class="text-3xl font-bold tracking-tight text-black">
                                        إعادة تصنيع الحديد والبلاستيك:
                                    </h2>
                                    <p class="mt-4 text-lg text-black">
                                        تقدم شركتنا خدمة إعادة تصنيع الحديد والبلاستيك باستخدام أحدث التقنيات لتوفير
                                        منتجات عالية الجودة وصديقة للبيئة. نحن نعمل على تحويل المواد الخام إلى منتجات
                                        جديدة تساهم في تقليل التلوث البيئي وتحقيق استدامة اقتصادية.
                                    </p>
                                    <!-- <div class="mt-6">
                                        <a class="inline-flex rounded-lg bg-blue-600 px-4 py-1.5 text-base font-bold leading-7 text-black shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                                            href="#">
                                            تعرف على المزيد
                                        </a>
                                    </div> -->
                                </div>

                            </div>
                        </div>

                    </div>
                </div>



                <div class="relative">
                    <div
                        class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                        <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                            <div>
                                <div>
                                    <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500">
                                        <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                            class="h-8 w-8 text-black">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                                            </path>
                                        </svg> -->
                                    </span>
                                </div>
                                <div class="mt-6">
                                    <h2 class="text-3xl font-bold tracking-tight text-black">
                                        إنشاء الهناجر والمستودعات:
                                    </h2>
                                    <p class="mt-4 text-lg text-black">
                                        تقدم شركتنا خدمات مهنية في إنشاء الهناجر والمستودعات المصنوعة من الحديد المعاد
                                        تصنيعه، حيث نوفر حلولًا مخصصة لتلبية احتياجاتك الصناعية والتخزينية. نحن نعمل على
                                        تصميم وبناء منشآت متينة وفعالة توفر لك المساحات اللازمة لتخزين وتنظيم المواد
                                        بشكل آمن ومرن.
                                    </p>
                                    <!-- <div class="mt-6">
                                        <a class="inline-flex rounded-lg bg-blue-600 px-4 py-1.5 text-base font-bold leading-7 text-black shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                                            href="#">
                                            تعرف على المزيد
                                        </a>
                                    </div> -->
                                </div>


                            </div>
                        </div>
                        <div class="mt-12 sm:mt-16 lg:mt-0">
                            <div class="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img alt="Inbox user interface" loading="lazy" width="647" height="486"
                                    class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                    style="color:transparent" :src="serviceSecondImage">
                            </div>
                        </div>
                    </div>
                </div>



                <div class="relative">
                    <div
                        class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                        <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                            <div>
                                <div>
                                    <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500">
                                        <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                            class="h-8 w-8 text-black">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                                            </path>
                                        </svg> -->
                                    </span>
                                </div>
                                <div class="mt-6">
                                    <h2 class="text-3xl font-bold tracking-tight text-black">
                                        تصنيع الهياكل المعدنية:
                                    </h2>
                                    <p class="mt-4 text-lg text-black">
                                        تقدم شركتنا خدمات تصنيع الهياكل المعدنية المتنوعة، بما في ذلك الهياكل للمصانع،
                                        المستودعات، والمباني التجارية. نحن نستخدم الحديد المعاد تصنيعه لضمان توفير حلول
                                        قوية ومستدامة تلبّي احتياجات البناء والتصنيع الحديثة.
                                    </p>
                                    <!-- <div class="mt-6">
                                        <a class="inline-flex rounded-lg bg-blue-600 px-4 py-1.5 text-base font-bold leading-7 text-black shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                                            href="/services">
                                            تعرف على المزيد
                                        </a>
                                    </div> -->
                                </div>

                            </div>
                        </div>
                        <div class="mt-12 sm:mt-16 lg:mt-0">
                            <div class="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img loading="lazy" width="646" height="485"
                                    class="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    style="color:transparent" :src="serviceFourthImage">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="sr-only">
            <ThemeToggle />
        </div>


        <!-- End System Section -->

        <!-- Start Features Section -->

        <!-- End Features Section -->

        <!-- Start Company Section  -->
        <section id="company" class="bg-white dark:bg-white py-24 sm:py-32">
            <div class="container mx-auto px-6 md:px-12">
                <!-- Heading Section -->
                <div class="flex justify-center mb-12">
                    <h1 class="text-3xl font-extrabold text-black dark:text-black text-center">
                        <span class="underline decoration-blue-500">
                            شركة الأخوين
                        </span>
                    </h1>
                </div>

                <!-- Content Section -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <!-- Left Section (Description) -->
                    <div class="text-black dark:text-black">
                        <h2 class="text-3xl font-extrabold text-center mb-6">
                            نحن شركة يمنية رائدة في استيراد الحديد وإعادة تصنيعه
                        </h2>
                        <p class="text-lg leading-8 text-black dark:text-black mb-6">
                            نحن نقدم حلولًا مبتكرة ومتكاملة لمساعدة الأفراد والشركات على تحسين الكفاءة والإنتاجية.
                            نعمل على توفير منتجات عالية الجودة تساهم في بناء مشاريع قوية ومستدامة.
                        </p>
                        <!-- <div class="text-center mt-8">
                            <a href="#services"
                                class="inline-flex rounded-lg bg-blue-600 px-6 py-3 text-black font-semibold text-lg shadow-lg hover:bg-blue-700 transition duration-300">
                                تعرف على المزيد
                            </a>
                        </div> -->
                    </div>

                    <!-- Right Section (Features) -->
                    <div>
                        <h3 class="text-2xl font-extrabold text-center mb-6">
                            خدماتنا
                        </h3>
                        <dl class="space-y-6 text-lg text-black dark:text-black text-right">
                            <div class="flex items-start">
                                <span class="text-2xl font-bold mr-4">⊙</span>
                                <div>
                                    <dt class="font-semibold text-lg">استيراد الحديد</dt>
                                    <dd>نقوم باستيراد الحديد من مصادر موثوقة وبأفضل الأسعار لتلبية احتياجات السوق
                                        المحلي.</dd>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <span class="text-2xl font-bold mr-4">⊙</span>
                                <div>
                                    <dt class="font-semibold text-lg">إعادة التصنيع</dt>
                                    <dd>نقدم خدمات إعادة تصنيع الحديد بشكل احترافي لتوفير منتجات قوية ومستدامة.</dd>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <span class="text-2xl font-bold mr-4">⊙</span>
                                <div>
                                    <dt class="font-semibold text-lg">تصنيع الهياكل المعدنية</dt>
                                    <dd>نحن متخصصون في تصنيع الهياكل المعدنية المتنوعة مثل الهناجر والمستودعات.</dd>
                                </div>
                            </div>
                        </dl>

                    </div>
                </div>
            </div>
        </section>

        <!-- End Company Section -->

        <!-- Start Footer Section -->
        <footer class="bg-white shadow-default dark:border-strokedark">
            <div class="container px-6 py-12 mx-auto">
                <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3 text-right">

                    <div class="lg:col-start-1 lg:col-end-2 lg:ml-20">
                        <p class="font-bold text-black dark:text-black">الوصول السريع</p>
                        <div class="flex flex-col items-end mt-5 space-y-2">
                            <a href="#top-app"
                                class="text-black transition-colors duration-300 dark:text-black dark:hover:text-blue-400 hover:underline hover:text-blue-500">الرئيسية</a>
                            <a href="#company"
                                class="text-black transition-colors duration-300 dark:text-black dark:hover:text-blue-400 hover:underline hover:text-blue-500">الشركة</a>
                        </div>
                    </div>

                    <!-- <div class="lg:col-start-2 lg:col-end-2">
                        <p class="font-bold text-black dark:text-black">الإدارة &amp; الافراد</p>
                    </div> -->

                    <!-- تواصل معنا -->
                    <div id="contact_us"
                        v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-fadeout' }"
                        class="lg:col-start-3 lg:col-end-3 duration-2000 animate-ease-in-out">
                        <h1 class="text-1xl font-bold text-black capitalize dark:text-black lg:text-2xl">
                            تواصل معنا للحصول على <br> مزيد من المعلومات
                        </h1>
                        <div class="mt-6 space-y-8 md:mt-8">
                            <p class="flex items-start -mx-2">
                                <span class="mx-2 text-black truncate w-72 dark:text-black">
                                    اليمن - الحديدة - الصليف
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </p>
                            <p class="flex items-start -mx-2">
                                <span class="mx-2 text-black truncate w-72 dark:text-black">+967775381439</span>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </p>
                            <p class="flex items-start -mx-2">
                                <span
                                    class="mx-2 text-black truncate w-72 dark:text-black">gehad.it.tel@gmail.com</span>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </p>
                        </div>
                    </div>

                </div>

                <!-- العودة إلى الأعلى -->
                <div class="flex justify-between">
                    <a></a>
                    <a href="#top-app" v-smooth-scroll>
                        <span
                            class="slidedup-icon h-10 w-10 bg-blue-500 text-white rounded-md inline-flex items-center justify-center">
                            <component :is="ArrowUpIcon"></component>
                        </span>
                    </a>
                    <a></a>
                </div>

                <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700">

                <div class="flex flex-col items-center justify-center py-6">
                    <a href="#" class="text-center">
                        <h1 class="text-2xl font-extrabold lg:text-2xl 2xl:text-2xl">
                            <span
                                class="text-transparent bg-gradient-to-br bg-clip-text from-blue-500 via-indigo-500 to-sky-500 dark:from-blue-200 dark:via-indigo-300 dark:to-sky-500">
                            تطوير المهندس : فراس الضاحه
                            </span>
                        </h1>
                    </a>
                    <p class="text-sm mt-2 text-gray-500 dark:text-gray-300 flex items-center">
                        <span>&copy;</span>
                        <span class="ml-1">2025</span>
                    </p>
                    <p class="text-sm mt-2 text-gray-500 dark:text-gray-300">
                        جميع الحقوق محفوظة لدى شركة الأخوين
                    </p>
                </div>



            </div>
        </footer>

    </div>

    <!-- End Footer Section -->

    <!-- This tag for scroll-somooth from top to bottom -->
    <footer-bottom id="bottom-footer"></footer-bottom>


</template>

<style scoped>
@keyframes typewriter {
    0% {
        width: 0;
    }

    25% {
        width: 130%;
    }

    50% {
        width: 130%;
    }

    75% {
        width: 0;
    }

    100% {
        width: 0;
    }
}

.animate-typewriter-continuous {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    width: 0;
    animation: typewriter 10s steps(30) infinite;
}

@keyframes slidedown-icon {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(15px);


    }

    100% {
        transform: translateY(0);
    }
}

.slidedup-icon {
    animation: slidedown-icon;
    animation-duration: 3s;
    animation-iteration-count: infinite;
}

.slidedown-icon {
    animation: slidedown-icon;
    animation-duration: 3s;
    animation-iteration-count: infinite;
}
</style>
