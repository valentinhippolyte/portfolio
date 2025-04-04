import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import "./style.css";

import en from "./locales/en.json";
import fr from "./locales/fr.json";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    fr,
  },
});

const app = createApp(App);

app.use(i18n);

app.mount("#app");
