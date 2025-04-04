<template>
  <div class="flex flex-row items-center">
    <button
      @click="toggleLanguage('en')"
      :class="{
        'bg-app-green': selectedLanguage === 'en',
        'bg-app-green/20': selectedLanguage !== 'en',
      }"
      class="pl-2 pr-4 py-2 flex flex-row items-center border-r-0 rounded-l-sm text-xs font-bold text-white hover: cursor-pointer"
    >
      <span class="text-xs">En</span>
      <img src="../assets/icons/en.png" class="w-4 h-4 ml-1" />
    </button>

    <button
      @click="toggleLanguage('fr')"
      :class="{
        'bg-app-green': selectedLanguage === 'fr',
        'bg-app-green/20': selectedLanguage !== 'fr',
      }"
      class="pl-2 pr-4 py-2 flex flex-row items-center border-l-0 rounded-r-sm text-white text-xs font-bold hover: cursor-pointer"
    >
      <span class="text-xs">Fr</span>
      <img src="../assets/icons/fr.png" class="w-4 h-4 ml-1" />
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const selectedLanguage = ref("en"); // Default language is 'en'
const { locale } = useI18n();

const toggleLanguage = (language) => {
  selectedLanguage.value = language;
  locale.value = language;
  localStorage.setItem("lang", language);
};
</script>
