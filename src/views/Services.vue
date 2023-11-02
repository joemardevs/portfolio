<template>
  <main class="text-gray-800 dark:text-gray-100 flex flex-col-reverse sm:flex-row items-center py-10" data-aos="fade-up"
    data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
    <div>
      <div class="flex flex-col items-center mb-4">
        <h1 class="text-4xl border-b-2 border-pink-400 font-semibold">
          Services
        </h1>
        <p class="mt-6 text-gray-400 text-center">
          Offering a full suite of web services, including web design,
          development, deployment, and maintenance, to ensure your online
          presence is not only visually engaging but also fully functional,
          up-to-date, and accessible to your target audience.
        </p>
      </div>
      <ServicesCards />
    </div>
  </main>
</template>

<script setup>
import ServicesCards from "../components/ServicesCards.vue";
</script>
