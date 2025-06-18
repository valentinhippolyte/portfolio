<template>
  <section
    id="about"
    class="bg-app-second-bg min-h-screen flex items-center justify-center"
  >
    <div class="w-full">
      <Title
        :firstTitle="t('aboutMe.title1')"
        :secondTitle="t('aboutMe.title2')"
      />

      <div
        class="flex flex-col justify-center px-12 sm:px-24 md:px-36 lg:px-56 pb-8 sm:pb-16 md:pb-26 lg:pb-40"
      >
        <div
          class="flex flex-col xl:flex-row gap-20 mt-10 text-white xl:items-start"
        >
          <!-- WHO AM I -->
          <div class="max-w-2xl flex-1">
            <p class="text-2xl font-bold pb-3">{{ t("aboutMe.who") }}</p>
            <div class="flex flex-col items-start gap-3">
              <p
                class="text-base sm:text-xl"
                v-html="t('aboutMe.presentation1')"
              ></p>
              <br />
              <p
                class="text-base sm:text-xl font-light"
                v-html="t('aboutMe.presentation2')"
              ></p>
            </div>
          </div>

          <!-- SKILLS -->
          <div class="w-full max-w-2xl flex-1">
            <p class="text-2xl font-bold pb-3">{{ t("aboutMe.skills") }}</p>

            <!-- Languages & Frameworks -->
            <div class="flex flex-col items-start gap-3 mb-6">
              <div class="flex items-center gap-2">
                <div class="size-3 bg-app-green rounded-full"></div>
                <p class="text-xl font-bold">{{ t("aboutMe.languages") }}</p>
              </div>
              <div class="flex items-center gap-4 flex-wrap">
                <Skill :src="images.vue" skillName="Vue.js" />
                <Skill :src="images.node" skillName="Node.js" />
                <Skill :src="images.symfony" skillName="Symfony" />
                <Skill :src="images.tailwind" skillName="Tailwind CSS" />
                <Skill :src="images.sql" skillName="SQL" />
              </div>
            </div>

            <!-- Tools & Workflow -->
            <div class="flex flex-col items-start gap-3">
              <div class="flex items-center gap-2">
                <div class="size-3 bg-app-green rounded-full"></div>
                <p class="text-xl font-bold">{{ t("aboutMe.tools") }}</p>
              </div>
              <div class="flex items-center gap-4 flex-wrap">
                <Skill :src="images.git" skillName="Git" />
                <Skill :src="images.docker" skillName="Docker" />
                <Skill :src="images.jira" skillName="Jira" />
                <Skill :src="images.figma" skillName="Figma" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import Skill from "../components/Skill.vue";
import Title from "../components/Title.vue";

const { t } = useI18n();

const images = {
  vue: new URL("../assets/skills/vue.png", import.meta.url).href,
  symfony: new URL("../assets/skills/symfony.png", import.meta.url).href,
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
