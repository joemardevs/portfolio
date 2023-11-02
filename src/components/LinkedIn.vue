<template>
  <a
    target="_blank"
    :href="link"
    class="text-gray-100 bg-gray-800 hover:text-gray-800 hover:bg-transparent border border-gray-900 dark:bg-gray-50 dark:text-gray-800 hover:dark:bg-transparent dark:border-gray-50 hover:dark:text-gray-50 px-6 py-2 rounded-lg text-sm"
  >
    {{ value }}
  </a>
</template>

<script setup>
const props = defineProps(["value", "link"]);
</script>
