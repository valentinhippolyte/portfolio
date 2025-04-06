<template>
  <div class="flex items-baseline">
    <div class="pt-10 flex justify-center w-full">
      <!-- Conteneur des liens de navigation centré -->
      <div class="flex items-center gap-8 sm:gap-16">
        <p
          v-for="link in navLinks"
          :key="link.key"
          class="text-base sm:text-xl text-white font-bold relative group cursor-pointer transition-colors duration-300 hover:text-app-green"
        >
          {{ t(link.label) }}
          <span
            class="absolute left-0 -bottom-1 h-0.5 w-0 bg-app-green transition-all duration-300 group-hover:w-full"
          ></span>
        </p>
      </div>
    </div>

    <div class="pr-4">
      <!-- LangSwitcher visible sur grand écran (sm et plus) -->
      <LangSwitcher class="hidden sm:inline-flex" />
      <!-- LangSwitcherMobile visible uniquement sur mobile -->
      <LangSwitcherMobile class="block sm:hidden" />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import LangSwitcher from "./LangSwitcher.vue";
import LangSwitcherMobile from "./LangSwitcherMobile.vue";

const { t } = useI18n();

const navLinks = [
  { key: "about", label: "nav.about" },
  { key: "projects", label: "nav.projects" },
  { key: "contact", label: "nav.contact" },
];
</script>
