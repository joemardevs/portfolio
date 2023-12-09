<template>
  <nav class="flex items-center">
    <button @click="toggleTheme" type="button" class="toggle-dark">
      <i class="fa-solid fa-sun w-6 h-6 hidden dark:grid place-items-center"></i>
      <i class="fa-solid fa-moon w-6 h-6 dark:hidden grid place-items-center"></i>
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
