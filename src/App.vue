<template>
  <main class="w-full px-10 font-poppins bg-gray-50 dark:bg-gray-800 sm:px-24 xl:px-72">
    <header class="fixed inset-x-0 z-10 w-full px-10 bg-gray-50 dark:bg-gray-800 sm:px-24 xl:px-72">
      <div class="flex py-5 text-gray-800 dark:text-gray-200">
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
    <Contact />
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
import Contact from "./components/Contact.vue";

import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});
</script>
