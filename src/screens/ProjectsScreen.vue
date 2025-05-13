<template>
  <section
    id="projects"
    class="bg-app-first-bg min-h-screen flex items-center justify-center"
  >
    <div class="w-full">
      <Title
        :firstTitle="t('projects.title1')"
        :secondTitle="t('projects.title2')"
      />

      <div
        class="flex flex-col justify-center items-center lg:flex-row gap-10 px-10 py-8 md:py-16 lg:py-24"
      >
        <router-link
          v-for="(project, index) in projects"
          :key="index"
          :to="`/projects/${project.key}`"
          class="block"
        >
          <div
            class="bg-app-green-700 rounded-2xl w-96 h-96 transform transition-all duration-200 hover:scale-102 hover:shadow-lg hover:cursor-pointer"
          >
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-58 object-cover rounded-t-2xl"
            />
            <div class="flex justify-between items-end pl-2 pr-4">
              <p class="text-2xl text-white font-bold pt-3 pl-2">
                {{ project.title }}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff8d20"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-circle-arrow-left-icon lucide-circle-arrow-left rotate-135"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M16 12H8" />
                <path d="m12 8-4 4 4 4" />
              </svg>
            </div>
            <p class="text-white font-thin pl-4 pr-15 py-4 leading-[17px]">
              {{ t(`projects.description.${project.key}`) }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import Title from "../components/Title.vue";

const { t } = useI18n();

const projects = [
  {
    key: "casa-cal-y-sol",
    image: new URL("../assets/portfolio/casacalysol.png", import.meta.url).href,
    title: "Casa Cal Y Sol",
  },
  {
    key: "ghiblix",
    image: new URL("../assets/portfolio/ghiblix.png", import.meta.url).href,
    title: "Ghiblix",
  },
  {
    key: "full-stack-boilerplate",
    image: new URL("../assets/portfolio/boilerplate.png", import.meta.url).href,
    title: "Full Stack Boilerplate",
  },
];
</script>
