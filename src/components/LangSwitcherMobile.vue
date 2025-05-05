<template>
  <button
    @click="toggleLanguage"
    class="pl-2 pr-4 py-2 flex flex-row items-center rounded-sm text-xs font-bold bg-app-green text-white hover: cursor-pointer"
  >
    <span class="text-xs">{{ selectedLanguage === "en" ? "En" : "Fr" }}</span>
    <img
      :src="images[selectedLanguage]"
      :alt="selectedLanguage === 'en' ? 'English flag' : 'Drapeau français'"
      class="w-4 h-4 ml-1"
    />
  </button>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const images = {
  en: new URL("../assets/icons/en.png", import.meta.url).href,
  fr: new URL("../assets/icons/fr.png", import.meta.url).href,
};

const { locale } = useI18n();
const selectedLanguage = ref(localStorage.getItem("lang") || "en");

const toggleLanguage = () => {
  selectedLanguage.value = selectedLanguage.value === "en" ? "fr" : "en";
  locale.value = selectedLanguage.value;
  localStorage.setItem("lang", selectedLanguage.value);
};
</script>
