import Home from "./components/Home.vue";
import NotFoundScreen from "./screens/notFoundScreen.vue";
import ProjectScreen from "./screens/ProjectScreen.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/projects/:id", component: ProjectScreen },
  { path: "/:pathMatch(.*)*", component: NotFoundScreen },
];
