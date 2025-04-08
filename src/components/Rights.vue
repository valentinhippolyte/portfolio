<template>
  <p
    class="bg-app-second-bg text-white text-center pb-5 pt-16 md:pt-26 lg:pt-40"
  >
    &copy; 2025 ▸ {{ t("rights") }}
  </p>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
