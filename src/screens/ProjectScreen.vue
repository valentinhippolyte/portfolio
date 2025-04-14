<template>
  <Title firstTitle="Casa" secondTitle="Cal Y Sol" />
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Title from "../components/title.vue";

const route = useRoute();

const projectId = route.params.id;

const currentProject = computed(() => projects.find((p) => p.id === projectId));

const projects = [
  {
    id: "casa-cal-y-sol",
    name: "Casa Cal Y Sol",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    image: new URL("../assets/icons/en.png", import.meta.url).href,
    stacks: {
      "Stack 1": "Stack 1",
      "Stack 2": "Stack 2",
      "Stack 3": "Stack 3",
      "Stack 4": "Stack 4",
    },
    github: "link",
    site: "link",

    features: {
      "Feature 1": "Description of Feature 1",
      "Feature 2": "Description of Feature 2",
      "Feature 3": "Description of Feature 3",
      "Feature 4": "Description of Feature 4",
    },
    challenges: "Description of Challenge",
  },
  {
    id: "ghiblix",
    name: "Ghiblix",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    image: new URL("../assets/icons/en.png", import.meta.url).href,
    stacks: {
      "Stack 1": "Stack 1",
      "Stack 2": "Stack 2",
      "Stack 3": "Stack 3",
      "Stack 4": "Stack 4",
    },
    github: "link",
    site: "link",

    features: {
      "Feature 1": "Description of Feature 1",
      "Feature 2": "Description of Feature 2",
      "Feature 3": "Description of Feature 3",
      "Feature 4": "Description of Feature 4",
    },
    challenges: "Description of Challenge",
  },
  {
    id: "daily-tracker",
    name: "Daily Tracker",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    image: new URL("../assets/icons/en.png", import.meta.url).href,
    stacks: {
      "Stack 1": "Stack 1",
      "Stack 2": "Stack 2",
      "Stack 3": "Stack 3",
      "Stack 4": "Stack 4",
    },
    github: "link",
    site: "link",

    features: {
      "Feature 1": "Description of Feature 1",
      "Feature 2": "Description of Feature 2",
      "Feature 3": "Description of Feature 3",
      "Feature 4": "Description of Feature 4",
    },
    challenges: "Description of Challenge",
  },
];
</script>
