<template>
  <section class="bg-app-second-bg px-6">
    <div class="max-w-6xl mx-auto px-6">
      <div class="w-full md:w-2/3 px-2 pt-4 sm:pt-10 md:pt-16 lg:pt-20">
        <div class="flex flex-col gap-6">
          <router-link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-circle-arrow-left-icon lucide-circle-arrow-left"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M16 12H8" />
              <path d="m12 8-4 4 4 4" />
            </svg>
          </router-link>
          <h2 class="text-4xl font-bold text-app-orange">
            {{ currentProject?.firstTitle }}
            <span class="text-white">{{ currentProject?.secondTitle }}</span>
          </h2>
        </div>

        <div class="bg-app-green h-1.5 w-13 mt-1"></div>
      </div>

      <div
        class="flex flex-col lg:flex-row items-center justify-between gap-10 mt-10 max-w-6xl mx-auto"
      >
        <!-- Image -->
        <div class="w-full md:w-2/3 flex justify-center">
          <a
            :href="currentProject?.site"
            target="_blank"
            :class="
              currentProject?.site
                ? 'hover:cursor-pointer hover:scale-101 transition-all duration-200 ease-in-out'
                : ''
            "
          >
            <img
              :src="currentProject?.image"
              class="rounded-xl object-cover shadow-lg max-w-full h-auto sm:h-72 md:h-80 lg:h-96"
              :alt="currentProject.id"
            />
          </a>
        </div>

        <!-- Texte -->
        <div class="w-full md:w-2/3 text-white space-y-4 text-justify">
          <p class="text-base md:text-lg leading-relaxed">
            {{ currentProject?.description }}
          </p>

          <div class="flex items-center gap-4 flex-wrap">
            <Skill
              v-for="skill in currentProject?.stacks"
              :src="skill.image"
              :skillName="skill.skillName"
            />
          </div>

          <div class="flex gap-5">
            <a
              :href="currentProject?.github"
              target="_blank"
              aria-label="Github"
            >
              <button
                type="button"
                class="text-white bg-app-green hover:bg-app-green-600 hover:scale-101 transition-all duration-200 ease-in-out hover:cursor-pointer rounded-2xl text-sm px-3 py-2 text-center inline-flex items-center"
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
            <a
              v-if="currentProject?.site"
              :href="currentProject?.site"
              target="_blank"
              aria-label="Site"
            >
              <button
                type="button"
                class="text-white bg-app-green hover:bg-app-green-600 hover:scale-101 transition-all duration-200 ease-in-out hover:cursor-pointer rounded-2xl text-sm px-3 py-2 text-center inline-flex items-center"
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

      <!-- Features & Challenges -->
      <div
        class="flex flex-col lg:flex-row items-center justify-between gap-10 mt-10 max-w-6xl mx-auto"
      >
        <!-- Features -->
        <div class="w-full md:w-2/3 lg:w-1/2 text-white">
          <p class="text-2xl font-bold pb-3">
            {{ t("projects.project-info.main_features") }}
          </p>
          <ul
            class="list-disc list-outside pl-4 marker:text-app-green space-y-2 text-base sm:text-xl"
          >
            <li v-for="feature in currentProject?.features" :key="feature">
              {{ feature }}
            </li>
          </ul>
        </div>

        <!-- Challenges -->
        <div
          class="w-full md:w-2/3 lg:w-1/2 text-white self-center lg:self-start"
        >
          <p class="text-2xl font-bold pb-3">
            {{ t("projects.project-info.challenges") }}
          </p>
          <p class="text-base sm:text-lg leading-relaxed">
            {{ currentProject?.challenges }}
          </p>
        </div>
      </div>

      <!-- Navigation entre projets + retour -->
      <div
        class="mt-16 flex justify-between items-center max-w-6xl mx-auto text-white relative"
      >
        <!-- Colonne gauche -->
        <div class="flex-1">
          <router-link
            v-if="prevProject"
            :to="`/projects/${prevProject.id}`"
            class="hover:underline text-white"
          >
            <div class="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff8d20"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-circle-arrow-left-icon lucide-circle-arrow-left"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M16 12H8" />
                <path d="m12 8-4 4 4 4" />
              </svg>
              {{ t("projects.project-info.previous") }}
            </div>
          </router-link>
        </div>

        <!-- Colonne centre -->
        <div class="flex-none">
          <router-link
            to="/"
            class="inline-block bg-app-green text-white px-5 py-2 rounded-2xl hover:bg-app-green-600 transition-all"
          >
            {{ t("projects.project-info.profile") }}
          </router-link>
        </div>

        <!-- Colonne droite -->
        <div class="flex-1 text-right">
          <router-link
            v-if="nextProject"
            :to="`/projects/${nextProject.id}`"
            class="hover:underline text-white"
          >
            <div class="flex justify-end gap-1">
              {{ t("projects.project-info.next") }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff8d20"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-circle-arrow-left-icon lucide-circle-arrow-left rotate-180"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M16 12H8" />
                <path d="m12 8-4 4 4 4" />
              </svg>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <Rights />
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import Rights from "../components/Rights.vue";
import Skill from "../components/Skill.vue";

const { t } = useI18n();

const route = useRoute();

const projectId = computed(() => route.params.id);

const currentProject = computed(() =>
  projects.find((p) => p.id === projectId.value)
);

const images = {
  vue: new URL("../assets/skills/vuejs.png", import.meta.url).href,
  ts: new URL("../assets/skills/typeScript.png", import.meta.url).href,
  tailwind: new URL("../assets/skills/tailwind.png", import.meta.url).href,
  node: new URL("../assets/skills/node.png", import.meta.url).href,
  sql: new URL("../assets//skills/sql.png", import.meta.url).href,
  figma: new URL("../assets/skills/figma.png", import.meta.url).href,
  git: new URL("../assets/skills/git.png", import.meta.url).href,
  docker: new URL("../assets/skills/docker.png", import.meta.url).href,
  jira: new URL("../assets/skills/jira.png", import.meta.url).href,
};
const currentIndex = computed(() =>
  projects.findIndex((p) => p.id === projectId.value)
);

const prevProject = computed(() =>
  currentIndex.value > 0 ? projects[currentIndex.value - 1] : null
);

const nextProject = computed(() =>
  currentIndex.value < projects.length - 1
    ? projects[currentIndex.value + 1]
    : null
);

const projects = [
  {
    id: "casa-cal-y-sol",
    firstTitle: "Casa",
    secondTitle: "Cal Y Sol",
    description: t("projects.project-info.casa-cal-y-sol.description"),
    image: new URL("../assets/portfolio/casacalysol.png", import.meta.url).href,
    stacks: [
      { skillName: "Vue.js", image: images.vue },
      { skillName: "Tailwind", image: images.tailwind },
      { skillName: "Node.js", image: images.node },
      { skillName: "Figma", image: images.figma },
    ],
    github: "https://github.com/valentinhippolyte/casa-cal-y-sol",
    site: "https://casacalysol.com",

    features: [
      t("projects.project-info.casa-cal-y-sol.features.1"),
      t("projects.project-info.casa-cal-y-sol.features.2"),
      t("projects.project-info.casa-cal-y-sol.features.3"),
      t("projects.project-info.casa-cal-y-sol.features.4"),
    ],
    challenges: t("projects.project-info.casa-cal-y-sol.challenge"),
  },
  {
    id: "ghiblix",
    firstTitle: "Ghiblix",
    description: t("projects.project-info.ghiblix.description"),
    image: new URL("../assets/portfolio/ghiblix.png", import.meta.url).href,
    stacks: [
      { skillName: "Vue.js", image: images.vue },
      { skillName: "Tailwind", image: images.tailwind },
      { skillName: "Node.js", image: images.node },
      { skillName: "Git", image: images.git },
    ],
    github: "https://github.com/valentinhippolyte/Ghiblix/",
    site: "https://ghiblix-seven.vercel.app/",

    features: [
      t("projects.project-info.ghiblix.features.1"),
      t("projects.project-info.ghiblix.features.2"),
      t("projects.project-info.ghiblix.features.3"),
      t("projects.project-info.ghiblix.features.4"),
    ],
    challenges: t("projects.project-info.ghiblix.challenge"),
  },
  {
    id: "full-stack-boilerplate",
    firstTitle: "Full Stack",
    secondTitle: "Boilerplate",
    description: t("projects.project-info.full-stack-boilerplate.description"),
    image: new URL("../assets/portfolio/boilerplate.png", import.meta.url).href,
    stacks: [
      { skillName: "Vue.js", image: images.vue },
      { skillName: "Docker", image: images.docker },
      { skillName: "Node.js", image: images.node },
      { skillName: "Git", image: images.git },
    ],
    github: "https://github.com/valentinhippolyte/my-fullstack-boilerplate",

    features: [
      t("projects.project-info.full-stack-boilerplate.features.1"),
      t("projects.project-info.full-stack-boilerplate.features.2"),
      t("projects.project-info.full-stack-boilerplate.features.3"),
      t("projects.project-info.full-stack-boilerplate.features.4"),
    ],
    challenges: t("projects.project-info.full-stack-boilerplate.challenge"),
  },
];
</script>
