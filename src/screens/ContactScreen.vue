<template>
  <section
    id="contact"
    class="bg-app-second-bg min-h-screen flex items-center justify-center"
  >
    <div class="w-full">
      <Title
        :firstTitle="t('contactMe.title1')"
        :secondTitle="t('contactMe.title2')"
      />

      <div
        class="flex flex-col gap-16 px-14 lg:flex-row lg:justify-around pt-16 md:pt-26 lg:pt-40"
      >
        <div
          class="flex flex-col sm:flex-row justify-around items-center gap-10 w-full"
        >
          <!-- Phone part -->
          <a
            href="tel:+33661086220"
            target="_blank"
            class="w-full sm:w-1/2 lg:w-1/2"
          >
            <div class="flex flex-col items-center gap-4 mb-10">
              <!-- Icon -->
              <div
                class="size-16 rounded-full overflow-hidden flex items-center bg-white p-2 hover:cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="90"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#117f7e"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-phone-icon lucide-phone"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  />
                </svg>
              </div>
              <!-- Title -->
              <p class="text-xl text-white font-bold">
                {{ t("contactMe.phone.title") }}
              </p>
              <!-- value -->
              <p class="text-lg text-white">{{ t("contactMe.phone.value") }}</p>
            </div>
          </a>

          <!-- Email part -->
          <a
            href="mailto:valentin.hippolyte@outlook.fr"
            target="_blank"
            class="w-full sm:w-1/2 lg:w-1/2"
          >
            <div class="flex flex-col items-center gap-4 mb-10">
              <!-- Icon -->
              <div
                class="size-16 rounded-full overflow-hidden flex items-center bg-white p-2 hover:cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="90"
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
              <!-- Title -->
              <p class="text-xl text-white font-bold">
                {{ t("contactMe.mail.title") }}
              </p>
              <!-- value -->
              <p class="text-lg text-white">valentin.hippolyte@outlook.fr</p>
            </div>
          </a>
        </div>

        <div
          class="flex flex-col sm:flex-row justify-around items-center gap-10 w-full"
        >
          <!-- Address part -->
          <div
            class="flex flex-col items-center gap-4 mb-10 w-full sm:w-1/2 lg:w-1/2"
          >
            <!-- Icon -->
            <div
              class="size-16 rounded-full overflow-hidden flex items-center bg-white p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="90"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#117f7e"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-map-pin-house-icon lucide-map-pin-house"
              >
                <path
                  d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"
                />
                <path
                  d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2"
                />
                <path d="M18 22v-3" />
                <circle cx="10" cy="10" r="3" />
              </svg>
            </div>
            <!-- Title -->
            <p class="text-xl text-white font-bold">
              {{ t("contactMe.address.title") }}
            </p>
            <!-- value -->
            <p class="text-lg text-white">{{ t("contactMe.address.value") }}</p>
          </div>

          <!-- Socials part -->
          <div
            class="flex flex-col items-center gap-10 mb-10 w-full sm:w-1/2 lg:w-1/2"
          >
            <h4 class="text-xl font-bold text-app-orange">
              {{ t("contactMe.follow") }}
              <span class="text-white">{{ t("contactMe.me") }}</span>
            </h4>
            <div class="flex gap-5">
              <!-- Icon -->
              <a
                href="https://www.linkedin.com/in/valentin-hippolyte/"
                target="_blank"
              >
                <div
                  class="size-12 rounded-full overflow-hidden flex items-center bg-white p-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="90"
                    height="90"
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
              <!-- Icon -->
              <a href="https://github.com/valentinhippolyte" target="_blank">
                <div
                  class="size-12 rounded-full overflow-hidden flex items-center bg-white p-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="90"
                    height="90"
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
          </div>
        </div>
      </div>
      <Rights />
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import Rights from "../components/Rights.vue";
import Title from "../components/Title.vue";

const { t } = useI18n();
</script>
