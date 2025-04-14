import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import "./style.css";

import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes.js";

import en from "./locales/en.json";
import fr from "./locales/fr.json";

const savedLanguage = localStorage.getItem("lang") || "en";

const i18n = createI18n({
  legacy: false,
  locale: savedLanguage,
  fallbackLocale: "en",
  messages: {
    en,
    fr,
  },
});

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

const app = createApp(App);

app.use(i18n);
app.use(router);

app.mount("#app");
