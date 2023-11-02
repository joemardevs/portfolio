<template>
  <nav class="flex items-center gap-6">
    <!-- <RouterLink
      :to="{ name: 'home' }"
      class="text-gray-800 dark:text-gray-200 hover:text-purple-400 hover:dark:text-purple-400 hover:underline underline-offset-2"
      >Home</RouterLink
    >
    <RouterLink
      :to="{ name: 'services' }"
      class="text-gray-800 dark:text-gray-200 hover:text-purple-400 hover:dark:text-purple-400 hover:underline underline-offset-2"
      >Services</RouterLink
    >
    <RouterLink
      to="/"
      class="text-gray-800 dark:text-gray-200 hover:text-purple-400 hover:dark:text-purple-400 hover:underline underline-offset-2"
      >Projects</RouterLink
    >
    <RouterLink
      to="/"
      class="text-gray-800 dark:text-gray-200 hover:text-purple-400 hover:dark:text-purple-400 hover:underline underline-offset-2"
      >Testimony</RouterLink
    >
    <RouterLink
      to="/"
      class="text-gray-800 dark:text-gray-200 hover:text-purple-400 hover:dark:text-purple-400 hover:underline underline-offset-2"
      >Contact</RouterLink
    > -->
    <button @click="toggleTheme" type="button" class="toggle-dark">
      <i class="fa-solid fa-sun w-6 h-6 hidden dark:block"></i>
      <i class="fa-solid fa-moon w-6 h-6 dark:hidden"></i>
    </button>
  </nav>
</template>
<script setup>
const toggleTheme = () => {
  document.documentElement.classList.toggle("dark");
  const isDarkMode = document.documentElement.classList.contains("dark");
  localStorage.setItem("darkMode", isDarkMode ? "true" : "false");
  console.log("test");
};
// Check if dark mode preference is saved and apply it on page load
const savedDarkMode = localStorage.getItem("darkMode");
if (savedDarkMode === "true") {
  document.documentElement.classList.add("dark");
}
</script>
