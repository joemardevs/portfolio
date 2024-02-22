<template>
  <a target="_blank" :href="link"
    class="px-6 py-2 text-sm text-gray-100 bg-gray-800 border border-gray-900 rounded-lg hover:text-gray-800 hover:bg-transparent dark:bg-gray-50 dark:text-gray-800 hover:dark:bg-transparent dark:border-gray-50 hover:dark:text-gray-50">
    {{ value }}
  </a>
</template>

<script setup>
const props = defineProps(["value", "link"]);
</script>
