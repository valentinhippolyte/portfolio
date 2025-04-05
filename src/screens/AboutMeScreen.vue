<template>
  <div class="bg-app-second-bg">
    <Title fistTitle="ABOUT" secondTitle="ME" />

    <div
      class="flex flex-col justify-center px-12 sm:px-24 md:px-36 lg:px-56 pb-8 sm:pb-16 md:pb-26 lg:pb-40"
    >
      <div
        class="flex flex-col xl:flex-row gap-20 mt-10 text-white xl:items-start"
      >
        <!-- WHO AM I -->
        <div class="max-w-2xl flex-1">
          <h3 class="text-2xl font-bold pb-3">WHO AM I?</h3>
          <div class="flex flex-col items-start gap-3">
            <p class="text-base sm:text-xl">
              Hello, my name is Valentin HIPPOLYTE, a motivated and dynamic
              developer with a Master’s degree in Computer Engineering.
            </p>
            <br />
            <p class="text-base sm:text-xl">
              After three years of apprenticeship at Worldline, where I
              developed features for international banking clients, I am now
              looking for a new professional challenge.
            </p>
          </div>
        </div>

        <!-- SKILLS -->
        <div class="w-full max-w-2xl flex-1">
          <h3 class="text-2xl font-bold pb-3">SKILLS</h3>

          <!-- Languages & Frameworks -->
          <div class="flex flex-col items-start gap-3 mb-6">
            <div class="flex items-center gap-2">
              <div class="size-3 bg-app-green rotate-45"></div>
              <h4 class="text-xl font-bold">Languages & Frameworks:</h4>
            </div>
            <div class="flex items-center gap-4 flex-wrap">
              <Skill :src="images.vue" />
              <Skill :src="images.ts" />
              <Skill :src="images.tailwind" />
              <Skill :src="images.node" />
              <Skill :src="images.sql" />
            </div>
          </div>

          <!-- Tools & Workflow -->
          <div class="flex flex-col items-start gap-3">
            <div class="flex items-center gap-2">
              <div class="size-3 bg-app-green rotate-45"></div>
              <h4 class="text-xl font-bold">Tools & Workflow:</h4>
            </div>
            <div class="flex items-center gap-4 flex-wrap">
              <Skill :src="images.git" />
              <Skill :src="images.docker" />
              <Skill :src="images.jira" />
              <Skill :src="images.figma" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Skill from "../components/Skill.vue";
import Title from "../components/title.vue";

// Exemple d'objet images si tu l'utilises dans <script setup>
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
</script>
