<template>
  <div
    class="size-12 rounded-full overflow-hidden flex justify-center items-center bg-white p-1.5"
  >
    <img :src="src" alt="Skill icon" class="w-7 h-7 object-cover" />
  </div>
</template>

<script setup>
defineProps(["src"]);
</script>
