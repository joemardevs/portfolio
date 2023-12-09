<template>
  <main
    class="text-gray-800 dark:text-gray-100 md:h-screen py-40 md:py-0 flex flex-col-reverse sm:flex-row items-center justify-center h-screen"
    data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
    <div class="sm:w-[500px] flex flex-col items-center md:items-start mt-6">
      <h1
        class="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 sm:pb-2">
        Joemar Palting
      </h1>
      <h1 class="text-xl md:text-2xl font-bold mb-2 text-center md:text-left">
        <small class="text-gray-400">undergraduate</small><br />
        Full Stack Developer
      </h1>
      <p class="text-gray-400 text-center md:text-left md:w-96 w-72">
        I'm a full-stack developer based in Philippines. I have a passion for building web applications and solving
        problems.
      </p>
      <div class="mt-6 flex gap-4">
        <LinkedIn value="LinkedIn" link="https://www.linkedin.com/in/joemarpalting/" />
        <Resume value="Resume" />
      </div>
    </div>
    <div class="flex-none md:flex-1 flex justify-end" data-aos="flip-left" data-aos-anchor-placement="top-bottom"
      data-aos-duration="1100">
      <img :src="Me" alt="joemar picture" class="sm:h-80 sm:w-80 h-56 w-56 hidden sm:block rounded-full drop-shadow" />
    </div>
  </main>
</template>
<script setup>
import LinkedIn from "../components/LinkedIn.vue";
import Resume from "../components/Resume.vue";
import Me from "../assets/me.jpg";
</script>
