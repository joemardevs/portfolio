<template>
  <a href="/Joemar Palting.pdf" target="_blank"
    class="px-6 py-2 text-sm text-gray-800 border border-gray-900 rounded-lg hover:bg-gray-800 hover:text-gray-100 dark:bg-gray-800 dark:text-gray-50 hover:dark:bg-gray-50 dark:border-gray-50 hover:dark:text-gray-800">
    {{ value }}
  </a>
</template>

<script setup>
const props = defineProps(["value"]);
</script>
