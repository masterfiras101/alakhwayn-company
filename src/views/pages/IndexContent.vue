<script setup>


</script>


<template>
    <div class="pt-15">
        <!-- <img id="bg_welcome_page"
            class="absolute scale-x-[1] left-19  opacity-25  top-60 lg:hidden  md:opacity-7 md:top-50 -rigt-0 md:left-70  md:max-w-[200px] max-w-[200px]"
            src="@/assets/imgs/png/ic_bride_girl.png" /> -->
        <div class="pt-32 text-center  md:py-11 xl:container px-6 md:px-12 ">
            <div aria-hidden="true"
                class="absolute  inset-0 my-auto w-96 h-2 rotate-45 bg-gradient-to-r from-blue-600 to-secondaryLight blur-3xl opacity-50 dark:opacity-20">
            </div>
            <div class="relative flex text-center  lg:items-center">
                <div class="  md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12 ">
                    <div class="-mt-10">
                        <h1
                            class="text-gray-900 animate-typewriter py-4 font-bold  text-4xl md:text-6xl lg:text-5xl xl:text-5xl dark:text-white tracking-wide">
                            اكتشفي!
                          
                                
                            </h1>
                            <p class="text-pink-400 py-3  animate-typewriter font-bold text-tracking font-tharwat text-3xl dark:text-pink-400"
                                >
                                متجر أناقة فرحتي
                            </p>
                        <p class="mt-20 text-xl font-semibold text-gray-900 dark:text-gray-300">أهلاً بك في عالم
                            الأحلام! في متجر أناقة فرحتي، نُقدم لكِ تجربة تسوق فريدة تُحقق لكِ كل ما تتمنينه ليومك
                            الكبير. استمتعي باكتشاف مجموعة مذهلة من فساتين الزفاف المصممة بأناقة.</p>
                    </div>
                    <div>
                        <div class="w-full mt-30">
                            <div
                                class="relative flex justify-center items-center   p-1  dark:border-gray-700 border-primary/10  md:p-2 lg:pr-3">
                                <div class="md:pr-1.5 lg:pr-0 ">
                                    <router-link :to="{name: 'index_page'}">
                                        <button type="button" title="Start buying"
                                            class="relative h-12 text-center px-15 md:px-15 sm:w-auto ml-auto sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-pink-400 dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                                            <span class="relative text-center text-white   w-max  font-bold md:block">
                                                تصفحي
                                            </span>
                                        </button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--
                                
                                <div class="mt-12 flex gap-6 lg:gap-12 justify-between grayscale dark:grayscale-0 ">
                                     <img src="" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                                    <img src="" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                                    <img src="" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                                    <img src="" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                                </div>
                                    -->

                </div>
                <div class="overflow-hidden hidden lg:flex w-full scale-x-[-1] lg:w-3/12     lg:-mr-[20%]">
                    <!-- <img src="@/assets/imgs/png/ic_bride_girl.png" alt="masterfiras101 logo" height="" width=""> -->
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
@keyframes typewriter {
    0% {
        width: 0;
        opacity: 1;
    }

    100% {
        width: 100%;
        opacity: 1;
    }
}

.animate-typewriter {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    width: 0;
    animation: typewriter 4s steps(30) 2s forwards, blink 4s step-end infinite;
}
</style>

