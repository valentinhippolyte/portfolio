<template>
  <div class="min-h-[calc(100vh-72px)] flex flex-col justify-center">
    <div class="flex flex-col sm:flex-row items-center justify-evenly mt-10">
      <div>
        <img
          src="../assets/photo.jpg"
          class="size-48 sm:size-60 md:size-72 rounded-full"
          alt="Valentin Hippolyte"
        />
      </div>

      <div class="text-white text-center sm:text-left">
        <p class="my-4 text-2xl sm:text-3xl">{{ t("introduce.hi") }}</p>
        <p class="mb-4 text-4xl sm:text-5xl">
          {{ t("introduce.im") }}
          <span class="font-bold text-app-green">
            {{ t("introduce.firstname") }}
            <span class="hidden lg:inline-block">{{
              t("introduce.lastname")
            }}</span>
          </span>
        </p>
        <p class="my-4 text-2xl sm:text-3xl" v-html="t('introduce.job')"></p>

        <div
          class="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 mt-2"
        >
          <div class="flex justify-between items-center w-full">
            <a
              href="mailto:valentin.hippolyte@outlook.fr"
              target="_blank"
              aria-label="Email"
            >
              <div
                class="size-10 rounded-full overflow-hidden flex items-center bg-white p-2 transition-transform duration-300 ease-in-out hover:scale-101 hover:-translate-y-1 hover:cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#117f7e"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-mail-icon lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/valentin-hippolyte/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <div
                class="size-10 rounded-full overflow-hidden flex justify-center items-center bg-white p-1.5 transition-transform duration-300 ease-in-out hover:scale-101 hover:-translate-y-1 hover:cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#117f7e"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-linkedin-icon lucide-linkedin"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                  />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
            </a>
            <a
              href="https://github.com/valentinhippolyte"
              target="_blank"
              aria-label="GitHub"
            >
              <div
                class="size-10 rounded-full overflow-hidden flex justify-center items-center bg-white p-1.5 transition-transform duration-300 ease-in-out hover:scale-101 hover:-translate-y-1 hover:cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#117f7e"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-github-icon lucide-github"
                >
                  <path
                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                  />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
            </a>
          </div>
          <div class="flex justify-center sm:justify-end w-full">
            <a
              :href="
                currentLocale === 'en'
                  ? '../assets/cv_en.pdf'
                  : '../assets/cv_fr.pdf'
              "
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV"
            >
              <button
                type="button"
                class="text-white bg-app-green hover:bg-app-green-600 hover:scale-101 transition-all duration-300 ease-in-out hover:cursor-pointer rounded-2xl text-sm px-3 py-2 text-center inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-download-icon lucide-download"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                &nbsp; {{ t("introduce.cv") }}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const currentLocale = computed(() => locale.value);

const { t } = useI18n();
</script>
