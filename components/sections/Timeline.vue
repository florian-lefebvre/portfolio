<template>
  <Section>
    <Title title="Journey" />
    <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
      <div
        v-for="(e, i) in events"
        :key="i"
        class="flex md:contents"
        :class="{ 'flex-row-reverse': i % 2 === 0 }"
      >
        <div
          v-if="i % 2 !== 0"
          class="relative col-start-5 col-end-6 mr-7 md:mx-auto"
        >
          <div class="flex items-center justify-center w-6 h-full">
            <div
              class="w-1 h-full"
              :class="[
                i === 0 ? 'rounded-t-full bg-gradient-to-b' : '',
                i === events.length - 1
                  ? 'rounded-b-full bg-gradient-to-t'
                  : '',
                i === 0 || i === events.length - 1
                  ? 'from-gray-200 via-gray-400 to-gray-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-600'
                  : 'bg-gray-400 dark:bg-gray-600'
              ]"
            ></div>
          </div>
          <div
            class="absolute w-6 h-6 -mt-3 bg-gray-500 border-4 border-gray-200 rounded-full top-1/2 dark:bg-gray-300 dark:border-gray-800"
          ></div>
        </div>
        <div
          xyz="fade down-1 delay-10 stagger-4"
          :style="`--xyz-index: ${i};`"
          class="relative p-4 my-6 transition-transform transform bg-gray-300 dark:bg-gray-700 rounded-xl md:hover:scale-105 xyz-nested"
          :class="
            i % 2 === 0
              ? 'col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto'
              : 'col-start-6 col-end-10 mr-auto'
          "
        >
          <h3 class="text-lg lg:text-xl font-semibold" v-html="e.title"></h3>
          <p
            v-if="e.content !== ''"
            class="mt-2 leading-6 text-justify"
            v-html="e.content"
          ></p>
          <span
            class="absolute text-sm text-gray-500 -top-5 left-2 whitespace-nowrap dark:text-gray-400"
            v-html="e.date"
          ></span>
        </div>
        <div
          v-if="i % 2 === 0"
          class="relative col-start-5 col-end-6 mr-7 md:mx-auto"
        >
          <div class="flex items-center justify-center w-6 h-full">
            <div
              class="w-1 h-full bg-gray-400 dark:bg-gray-600"
              :class="[
                i === 0 ? 'rounded-t-full bg-gradient-to-b' : '',
                i === events.length - 1
                  ? 'rounded-b-full bg-gradient-to-t'
                  : '',
                i === 0 || i === events.length - 1
                  ? 'from-gray-200 via-gray-400 to-gray-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-600'
                  : 'bg-gray-400 dark:bg-gray-600'
              ]"
            ></div>
          </div>
          <div
            class="absolute w-6 h-6 -mt-3 bg-gray-500 border-4 border-gray-200 rounded-full top-1/2 dark:bg-gray-300 dark:border-gray-800"
          ></div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          title: "I discover Unreal Engine 4",
          content: "Such an amazing discovery: the world of coding...",
          date: "January 2018"
        },
        {
          title: "I publish Glutton Runner on the Play Store",
          content: "",
          date: "May 2019"
        },
        {
          title: "I build my first website",
          content:
            "My orchestra's website was pretty ugly, so I decided to rewrite it from scratch by taking the Traversy media HTML5 crash course. I did it in a month, and it was a great introduction to HTML and CSS.",
          date: "December 2019"
        },
        {
          title: "I learn PHP and jQuery",
          content:
            "After the public site of my orchestra, I wanted to make a private area with user authentication, dashboard, storage...I learned procedural PHP and jQuery, but it was really very tedious. I gave up while waiting to learn more adapted technologies.",
          date: "January - May 2020"
        },
        {
          title: "I discover Bootstrap",
          content:
            "Until now, I did everything by myself. Then I had the courage to get into Bootstrap, and I loved it.",
          date: "June 2020"
        },
        {
          title: "I build my portfolio using Jekyll",
          content: "",
          date: "August - September 2020"
        },
        {
          title: "Exploring Laravel and GraphQL",
          content:
            "After the summer vacations, I spent some time looking for the next technologies to learn. I came to the conclusion that Laravel and GraphQL were what I wanted, but after taking care of the frontend.",
          date: "September 2020"
        },
        {
          title: "I learn Vue, Nuxt and Tailwind CSS",
          content:
            "Now that I knew what to learn for the backend, I had to figure out what technologies to use for the frontend. I chose Nuxt, based on Vue, as well as Tailwind CSS. These technologies are amazing.",
          date: "October 2020"
        },
        {
          title: "I join the yNotes project",
          content: "",
          date: "October 2020"
        },
        {
          title: "I rework my portfolio using Nuxt and Tailwind CSS",
          content: "",
          date: "November 2020"
        },
        {
          title: "I release shortcuts-app 0.3.0",
          content: "",
          date: "December 2020 - January 2021"
        },
        {
          title:
            "I rework the yNotes website using Nuxt, Tailwind CSS and AnimXYZ",
          content: "",
          date: "January 2021"
        },
        {
          title: "I rework my portfolio once again",
          content: "",
          date: "February 2021"
        }
      ]
    };
  }
};
</script>

<style></style>
