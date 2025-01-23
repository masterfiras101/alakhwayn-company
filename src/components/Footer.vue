
<script setup>
</script>

<template>
    
  <footer class="w-full bg-gray-100    dark:bg-gray-900 py-16">
  <div class="md:px-12  lg:px-28">
    <div class="  m-auto space-y-2 text-gray-600 dark:text-gray-300 ">
      <div class="flex justify-between text-center">

        <!-- <img src="@/assets/imgs/png/ic_bride_girl.png" alt="logo tailus" class="m-auto w-30 scale-x-[-1]" /> -->
        <ul
          role="list"
          class="flex flex-col items-center justify-center m-auto gap-4 py-4 sm:flex-row sm:gap-8"
        >
          <li role="listitem"><router-link :to="{name:'index_page'}" class="hover:text-pink-500">الرئيسية</router-link></li>
          <li role="listitem"><a href="#dresses-section" class="hover:text-pink-500">لحديد</a></li>
          <li role="listitem"><a href="#accessories-section" class="hover:text-pink-500">الخشب</a></li>
          <li role="listitem"><a href="#about" class="hover:text-pink-500">من نحن</a></li>
        </ul>
      </div>
      <div class="m-auto flex w-max items-center justify-between space-x-4">
        <a href="tel:+967730450006" aria-label="call">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="m-auto w-5"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd" fill="#6AFA7D"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
            ></path>
          </svg>
        </a>
        <a href="mailto:hello@mail.com" aria-label="send mail">
          <img class="w-5" src="../assets/imgs/svg/ic_email.svg" alt="" >
        </a>
        <a href="mailto:hello@mail.com" aria-label="send mail">
          <img class="w-5" src="../assets/imgs/svg/ic_whatsapp.svg" alt="" >
        </a>
      </div>

      <div class="text-center">
        <span class="text-sm tracking-wide"
          ><span id="year">2024 جميع الحقوق محفوظة لدى </span>  <span class="font-tharwat text-pink-400 text-xl">ِشركة الاخوين&copy;</span></span
        >
      </div>
    </div>
  </div>
</footer>
                                    
</template>