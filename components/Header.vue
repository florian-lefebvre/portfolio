<template>
  <XyzTransition appear-visible duration="auto">
    <header
      xyz="delay-15 up-100% fade duration-10"
      class="fixed top-0 left-0 z-50 w-full bg-gray-300 dark:bg-gray-900 shadow-md h-17"
    >
      <div class="container p-4 mx-auto flex items-center">
        <h2
          class="sm:text-xl font-light mr-auto text-gray-900 dark:text-white xyz-nested"
          xyz="delay-20 fade left-3 duration-8"
        >
          Florian
          <span class="font-medium">
            LEFEBVRE
          </span>
        </h2>
        <div
          class="space-x-3 flex items-center text-gray-900 dark:text-gray-200 xyz-nested"
          xyz="delay-25 fade small-1 duration-8"
        >
          <HeaderButton
            :link="`mailto:${profile.email}`"
            :external="true"
            label="Send me an email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </HeaderButton>
          <HeaderButton
            :link="profile.github"
            :external="true"
            label="Check out my Github"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 16 16"
              version="1.1"
              fill="currentColor"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </HeaderButton>
          <HeaderButton
            :link="profile.linkedin"
            :external="true"
            label="Check out my LinkedIn"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="currentColor"
            >
              <title>LinkedIn icon</title>
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </HeaderButton>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  </XyzTransition>
</template>

<script>
export default {
  data() {
    return {
      profile: process.env.profile
    };
  },
  methods: {
    toggle() {
      console.log("toggle");
    }
  }
};
</script>

<style></style>
