<template>
  <div class="sticky top-0 z-40">
    <Popover class="relative" v-slot="{ close }">
      <div
        :class="
          top
            ? 'border-transparent bg-gray-900/0 backdrop-opacity-0'
            : 'border-gray-800 bg-gray-900/90 backdrop-opacity-100'
        "
        class="h-16 border-b backdrop-blur transition-all duration-300"
      >
        <Container class="flex h-full items-center justify-between py-4">
          <ProfilePicture />
          <div class="flex items-center space-x-4 sm:space-x-6">
            <div class="hidden items-center space-x-6 sm:flex">
              <component
                v-for="link in links"
                :is="link.external ? 'a' : 'nuxt-link'"
                :to="link.url"
                :href="link.url"
                :target="link.external ? '_blank' : undefined"
                class="animated-underline relative text-white"
                :class="{
                  'bg-gradient text-gradient font-semibold':
                    link.url === '/'
                      ? $route.path === '/'
                      : $route.path.startsWith(link.url),
                }"
              >
                {{ link.name }}
              </component>
            </div>
            <a
              href="#contact"
              class="rounded-full bg-white px-6 py-2 font-medium text-gray-900 duration-300 hover:scale-95 focus:outline-none"
            >
              Contact
            </a>
            <PopoverButton
              class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-200 transition-all hover:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 sm:hidden"
            >
              <span class="sr-only">Open menu</span>
              <MenuIcon class="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
        </Container>
      </div>
      <transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="scale-95 opacity-0"
        enter-to-class="scale-100 opacity-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="scale-100 opacity-100"
        leave-to-class="scale-95 opacity-0"
      >
        <PopoverPanel
          focus
          class="fixed inset-0 z-50 flex origin-center transform items-center justify-center bg-gray-900 p-4 transition sm:hidden"
        >
          <PopoverButton
            class="absolute top-4 right-4 inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-200 transition-all hover:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 sm:hidden"
          >
            <span class="sr-only">Close menu</span>
            <XIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
          <div
            class="flex flex-col items-center justify-center space-y-6 text-xl"
          >
            <component
              :is="link.external ? 'a' : 'nuxt-link'"
              v-for="link in links"
              :to="link.url"
              :href="link.url"
              :target="link.external ? '_blank' : undefined"
              @click.native="() => close()"
              class="animated-underline relative text-white"
              :class="{
                'bg-gradient text-gradient font-semibold':
                  link.url === '/'
                    ? $route.path === '/'
                    : $route.path.startsWith(link.url),
              }"
            >
              {{ link.name }}
            </component>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { PopoverButton, PopoverPanel, Popover } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import { useI18n } from "vue-i18n";
import { Link } from "~/types";

const { tm } = useI18n();

const links = computed(() => tm("global.links.navigation") as Link[]);

const top = ref<boolean>();
useWindowEventListener("scroll", () => (top.value = window.scrollY < 100));
</script>
