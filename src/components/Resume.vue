<template>
  <a href="<%= BASE_URL %>Joemar Palting.pdf" target="_blank"
    class="border text-gray-800 hover:bg-gray-800 hover:text-gray-100 border-gray-900 dark:bg-gray-800 dark:text-gray-50 hover:dark:bg-gray-50 dark:border-gray-50 hover:dark:text-gray-800 px-6 py-2 rounded-lg text-sm">
    {{ value }}
  </a>
</template>

<script setup>
const props = defineProps(["value"]);
</script>
