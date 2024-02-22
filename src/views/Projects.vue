<template>
  <div class="flex flex-col items-center justify-center pb-16 text-gray-800 dark:text-gray-100" data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
    <div class="flex flex-col items-center">
      <h1 class="text-4xl font-semibold border-b-2 border-pink-400">
        Projects
      </h1>
      <p class="mt-2 text-center text-gray-400">
        View my diverse portfolio of visually captivating, user-friendly web design and development projects.
      </p>
    </div>
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
      <Carousel class="w-screen sm:w-[600px]" :wrap-around="true">
        <Slide v-for="(project, index) in projects" :key="index">
          <div class="carousel__item">
            <h1 class="mt-10 text-2xl font-semibold">{{ project.title }}</h1>
            <img :src="project.imgName" alt="" class="w-96 md:w-[500px] rounded-md drop-shadow-md mx-auto" />
            <div class="flex justify-center gap-2 py-2">
              <ProjectBadge v-for="badge in project.badges" :value="badge" />
            </div>
            <p class="text-gray-400 text-center md:w-[500px]">
              {{ project.description }}
            </p>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import Project1 from "../assets/projects/project1.png";
import Project2 from "../assets/projects/project2.png";
import Project3 from "../assets/projects/project3.png";
import ProjectBadge from "../components/ProjectBadge.vue";

const projects = [
  {
    title: "iGallery",
    imgName: Project1,
    description:
      "An innovative mobile app and web-based admin for Isabela's finest creation.",
    badges: {
      laravel: "Laravel",
      livewire: "Livewire",
      alpinejs: "Alpine JS",
      tailwindcss: "Tailwind CSS",
      filament: "Filament",
    }
  },
  {
    title: "Illness Mapping",
    imgName: Project2,
    description:
      "A web app project aiming to develop an illness mapping system using GIS for Rural Health Unit (RHU).",
    badges: {
      laravel: "Laravel",
      livewire: "Bootstrap",
      leaflet: "Leaflet"
    }
  },
  {
    title: "Research Management System",
    imgName: Project3,
    description:
      "A Research Management System for Managing Behavioral Patterns of Faculty Members' Engagement in Research Activities.",
    badges: {
      laravel: "Laravel",
      livewire: "Livewire",
      alpinejs: "Alpine JS",
      tailwindcss: "Tailwind CSS",
    }
  },
];

</script>
