<template>
  <div class="flex items-baseline">
    <div class="pt-10 flex justify-center w-full">
      <!-- Conteneur des liens de navigation centré -->
      <div class="flex items-center gap-8 sm:gap-16">
        <p class="text-base sm:text-xl text-white font-bold">
          {{ t("nav.about") }}
        </p>
        <p class="text-base sm:text-xl text-white font-bold">
          {{ t("nav.projects") }}
        </p>
        <p class="text-base sm:text-xl text-white font-bold">
          {{ t("nav.contact") }}
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
</script>
