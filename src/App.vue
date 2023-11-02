<template>
  <main class="font-poppins bg-gray-50 dark:bg-gray-800 px-10 sm:px-24 xl:px-[450px]">
    <header>
      <div class="text-gray-800 dark:text-gray-200 py-5 flex">
        <h1
          class="flex-1 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          joemardevs
        </h1>
        <NavBar />
      </div>
    </header>
    <Home />
    <Projects />
    <Services />
    <Testimony />
  </main>
  <Footer />
</template>
<script setup>
import NavBar from "./components/NavBar.vue";
import Home from "./views/Home.vue";
import Services from "./views/Services.vue";
import Projects from "./views/Projects.vue";
import Testimony from "./views/Testimony.vue"
import Footer from "./components/Footer.vue";

import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});
</script>
