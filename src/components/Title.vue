<template>
  <div class="pl-12 pt-8 sm:pl-24 sm:pt-16 md:pl-36 md:pt-26 lg:pl-56 lg:pt-40">
    <h2 class="text-4xl font-bold text-app-orange">
      {{ fistTitle }} <span class="text-white">{{ secondTitle }}</span>
    </h2>
    <div class="bg-app-green h-1.5 w-13 mt-1"></div>
  </div>
</template>

<script setup>
defineProps(["fistTitle", "secondTitle"]); // L'enfant reçoit la donnée
</script>
