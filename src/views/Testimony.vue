<template>
    <div class="flex flex-col items-center justify-center pb-16 text-gray-800 dark:text-gray-100" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
        <div class="flex flex-col items-center mb-16">
            <h1 class="text-4xl font-semibold border-b-2 border-pink-400">
                Testimony
            </h1>
            <p class="mt-2 text-center text-gray-400">
                Discover what others have to say about their experiences working with me. Explore a collection of heartfelt
                testimonials and success stories from clients, colleagues, and partners who have benefited from my services,
                expertise, and collaboration. These testimonials serve as a testament to the quality, impact, and
                trustworthiness of my work, providing valuable insights into the results I can deliver and the relationships
                I've built.
            </p>
        </div>
        <small class="mb-2 italic text-center text-gray-400">Please note that the individuals featured in these testimonials
            have provided their consent regarding whether they wish to be identified or remain anonymous.</small>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
            <Carousel class="w-screen sm:w-[600px]" :autoplay="5000" :wrap-around="true">
                <Slide v-for="(testimony, index) in testimonies" :key="index">
                    <div
                        class="flex flex-col justify-center h-48 px-10 py-6 italic text-center border-2 border-gray-200 rounded-md shadow carousel__item w-96 dark:border-gray-700">
                        <p>{{ testimony.testimonyDescription }}</p>
                        <h1 class="mr-3 font-semibold text-gray-400 text-end">-{{ testimony.fullName }}</h1>
                    </div>
                </Slide>
                <template #addons>
                    <Pagination />
                </template>
            </Carousel>
        </div>
    </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const testimonies = [
    {
        fullName: "Angelo Padilla",
        testimonyDescription:
            "He's an excellent developer who is also quite accommodating. Communicating with him regarding the project was straightforward.",
    },
    {
        fullName: "Klaude Mendoza",
        testimonyDescription:
            "Very responsive and easy to communicate with. Also, he can do the tasks quickly and is very experienced.",
    },
    {
        fullName: "I*****",
        testimonyDescription:
            "Not only he's a skilled developer, but he can also discuss project-related issues and is an excellent listener.",
    },
    {
        fullName: "Y******",
        testimonyDescription:
            "He consistently demonstrate the code and its use. He exceeds my expectations and i can adapt easily.",
    },
    {
        fullName: "C***",
        testimonyDescription:
            "Accommodating developer. Can do works on time. Easy to communicate when we're asking about the system.",
    },
    {
        fullName: "K*******",
        testimonyDescription:
            "Good service, easy to communicate.",
    },
    {
        fullName: "D*****",
        testimonyDescription:
            "He met our expectations and he finished the system on time. 👌",
    },
]
</script>
