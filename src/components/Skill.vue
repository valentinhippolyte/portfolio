<template>
  <div class="relative group">
    <div
      :class="`${size}`"
      class="rounded-full overflow-hidden flex justify-center items-center bg-white p-1.5 cursor-pointer"
    >
      <img :src="src" :alt="skillName" class="w-7 h-7 object-cover" />
    </div>

    <!-- Tooltip -->
    <div
      class="absolute bottom-full mb-2 hidden group-hover:block text-sm text-white bg-app-green rounded p-2 w-max"
    >
      {{ skillName }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  src: String,
  skillName: String,
  size: {
    type: String,
    default: "size-12",
  },
});
</script>
