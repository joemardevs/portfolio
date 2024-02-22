<template>
  <main
    class="flex flex-col-reverse items-center justify-center h-screen py-40 text-gray-800 dark:text-gray-100 md:h-screen md:py-0 sm:flex-row"
    data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
    <div class="sm:w-[500px] flex flex-col items-center md:items-start mt-6">
      <h1
        class="text-3xl font-bold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 sm:pb-2">
        Joemar Palting
      </h1>
      <h1 class="mb-2 text-xl font-bold text-center md:text-2xl md:text-left">
        <small class="text-gray-400">undergraduate</small><br />
        Full Stack Developer
      </h1>
      <p class="text-center text-gray-400 md:text-left md:w-96 w-72">
        I'm a full-stack developer based in Philippines. I have a passion for building web applications and solving
        problems.
      </p>
      <div class="flex gap-4 mt-6">
        <LinkedIn value="LinkedIn" link="https://www.linkedin.com/in/joemarpalting/" />
        <Resume value="Resume" />
      </div>
    </div>
    <div class="flex justify-end flex-none md:flex-1" data-aos="flip-left" data-aos-anchor-placement="top-bottom"
      data-aos-duration="1100">
      <img :src="Me" alt="joemar picture" class="hidden w-56 h-56 rounded-full sm:h-80 sm:w-80 sm:block drop-shadow" />
    </div>
  </main>
</template>
<script setup>
import LinkedIn from "../components/LinkedIn.vue";
import Resume from "../components/Resume.vue";
import Me from "../assets/me.jpg";
</script>
