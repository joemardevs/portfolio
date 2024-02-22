<template>
    <span data-aos="flip-right" data-aos-anchor-placement="top-bottom" data-aos-duration="1500"
        class="p-1 px-2 text-xs font-normal text-purple-500 bg-purple-200 rounded-full dark:bg-purple-950 dark:text-gray-200">{{
            value
        }}</span>
</template>

<script setup>
const props = defineProps(['value'])
</script>