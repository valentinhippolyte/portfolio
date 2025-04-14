import Home from "./components/Home.vue";
import ProjectScreen from "./screens/ProjectScreen.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/projects/:id", component: ProjectScreen },
];
