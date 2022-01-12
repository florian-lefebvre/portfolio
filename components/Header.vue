<template>
  <div class="sticky top-0 z-40">
    <Popover class="relative" v-slot="{ close }">
      <div class="h-16 backdrop-blur-md bg-gray-900/90">
        <Container class="flex items-center justify-between h-full py-4">
          <nuxt-link
            to="/"
            class="w-10 h-10 rounded-full bg-gradient-to-tr from-primary-600 to-secondary-400 focus:ring focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-primary-600"
          ></nuxt-link>
          <div class="flex items-center space-x-4 sm:space-x-6">
            <div class="items-center hidden space-x-6 sm:flex">
              <nuxt-link
                v-for="link in links"
                :to="link.url"
                class="text-white relative after:absolute after:bg-gradient-to-tr after:from-primary-600 after:rounded-full after:to-secondary-400 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                active-class="font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-primary-600 to-secondary-400"
              >
                {{ link.name }}
              </nuxt-link>
            </div>
            <a
              href="#contact"
              class="px-6 py-2 font-medium text-gray-900 duration-300 bg-white rounded-full hover:scale-95 focus:outline-none"
            >
              Contact
            </a>
            <PopoverButton
              class="inline-flex items-center justify-center p-2 text-gray-200 transition-all bg-gray-800 rounded-md hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:hidden focus:ring-offset-gray-900"
            >
              <span class="sr-only">Open menu</span>
              <MenuIcon class="w-6 h-6" aria-hidden="true" />
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
          class="fixed inset-0 z-50 flex items-center justify-center p-4 transition origin-center transform bg-gray-900 sm:hidden"
        >
          <PopoverButton
            class="absolute inline-flex items-center justify-center p-2 text-gray-200 transition-all bg-gray-800 rounded-md top-4 right-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:hidden focus:ring-offset-gray-900"
          >
            <span class="sr-only">Open menu</span>
            <XIcon class="w-6 h-6" aria-hidden="true" />
          </PopoverButton>
          <div
            class="flex flex-col items-center justify-center space-y-6 text-xl"
          >
            <nuxt-link
              v-for="link in links"
              :to="link.url"
              @click.native="() => close()"
              class="text-white relative after:absolute after:bg-gradient-to-tr after:from-primary-600 after:rounded-full after:to-secondary-400 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
              active-class="font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-primary-600 to-secondary-400"
            >
              {{ link.name }}
            </nuxt-link>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { PopoverButton, PopoverPanel, Popover } from "@headlessui/vue";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/vue/outline";
import { Link } from "~~/types";

const links = ref<Link[]>([
  { name: "Home", url: "/" },
  { name: "About me", url: "/about" },
  { name: "Projects", url: "/projects" },
  { name: "Blog", url: "/blog" },
  { name: "Github", url: "/github", external: true },
]);

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: RefreshIcon,
  },
];

const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
</script>
