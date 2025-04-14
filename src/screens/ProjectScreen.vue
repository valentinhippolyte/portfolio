<template>
  <section id="about" class="bg-app-second-bg px-6 py-16">
    <Title
      :firstTitle="currentProject.firstTitle"
      :secondTitle="currentProject.secondTitle"
    />

    <div
      class="flex flex-col lg:flex-row items-center justify-between gap-10 mt-10 max-w-6xl mx-auto"
    >
      <!-- Image -->
      <div class="w-full md:w-1/2 flex justify-center">
        <img
          :src="currentProject?.image"
          class="rounded-xl object-cover shadow-lg max-w-full h-auto sm:h-72 md:h-80 lg:h-96"
          alt="Project Image"
        />
      </div>

      <!-- Texte -->
      <div class="w-full md:w-1/2 text-white space-y-4 text-justify">
        <p class="text-base md:text-lg leading-relaxed">
          {{ currentProject.description }}
        </p>

        <div class="flex gap-5">
          <a :href="currentProject?.github" target="_blank">
            <button
              type="button"
              class="text-white bg-app-green hover:bg-app-green-600 hover:scale-105 transition-all duration-300 ease-in-out hover:cursor-pointer rounded-2xl text-sm px-3 py-2 text-center inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github-icon lucide-github"
              >
                <path
                  d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              &nbsp; github
            </button>
          </a>
          <a :href="currentProject?.github" target="_blank">
            <button
              type="button"
              class="text-white bg-app-green hover:bg-app-green-600 hover:scale-105 transition-all duration-300 ease-in-out hover:cursor-pointer rounded-2xl text-sm px-3 py-2 text-center inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-globe-icon lucide-globe"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              &nbsp; site
            </button>
          </a>
        </div>
      </div>
    </div>

    <!-- Features -->
    <div class="max-w-2xl flex-1 text-white">
      <h3 class="text-2xl font-bold pb-3">Main features</h3>
      <ul
        class="list-disc list-inside marker:text-app-green space-y-2 text-base sm:text-xl"
      >
        <li v-for="feature in currentProject.features" :key="feature">
          {{ feature }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import Title from "../components/title.vue";

const { t } = useI18n();

const route = useRoute();

const projectId = route.params.id;

const currentProject = computed(() => projects.find((p) => p.id === projectId));

const projects = [
  {
    id: "casa-cal-y-sol",
    firstTitle: "Casa",
    secondTitle: "Cal Y Sol",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    image: new URL("../assets/portfolio/casaCalYSol.jpg", import.meta.url).href,
    stacks: {
      "Stack 1": "Stack 1",
      "Stack 2": "Stack 2",
      "Stack 3": "Stack 3",
      "Stack 4": "Stack 4",
    },
    github: "link",
    site: "link",

    features: {
      1: "Description of Feature 1",
      2: "Description of Feature 2",
      3: "Description of Feature 3",
      4: "Description of Feature 4",
    },
    challenges: "Description of Challenge",
  },
  {
    id: "ghiblix",
    firstTitle: "Ghiblix",
    secondTitle: "",
    name: "Ghiblix",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    image: new URL("../assets/portfolio/ghiblix.png", import.meta.url).href,
    stacks: {
      "Stack 1": "Stack 1",
      "Stack 2": "Stack 2",
      "Stack 3": "Stack 3",
      "Stack 4": "Stack 4",
    },
    github: "link",
    site: "link",

    features: {
      "Feature 1": "Description of Feature 1",
      "Feature 2": "Description of Feature 2",
      "Feature 3": "Description of Feature 3",
      "Feature 4": "Description of Feature 4",
    },
    challenges: "Description of Challenge",
  },
  {
    id: "daily-tracker",
    firstTitle: "Daily",
    secondTitle: "Tracker",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    image: new URL("../assets/portfolio/dailyTracker.png", import.meta.url)
      .href,
    stacks: {
      "Stack 1": "Stack 1",
      "Stack 2": "Stack 2",
      "Stack 3": "Stack 3",
      "Stack 4": "Stack 4",
    },
    github: "link",
    site: "link",

    features: {
      "Feature 1": "Description of Feature 1",
      "Feature 2": "Description of Feature 2",
      "Feature 3": "Description of Feature 3",
      "Feature 4": "Description of Feature 4",
    },
    challenges: "Description of Challenge",
  },
];
</script>
