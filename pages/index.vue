<template>
  <div>
    <section
      class="text-purple-100 body-font bg-gradient-to-r from-purple-500 to-purple-800"
    >
      <div
        class="container mx-auto px-5 py-24 md:flex-row flex-col items-center text-center"
      >
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Hi! I'm Florian LEFEBVRE
        </h1>
        <p class="mb-8 leading-relaxed lg:w-2/3 mx-auto">
          I am a French student who likes to program on his free time since
          2018, when I discovered programming with
          <strong>Unreal Engine 4</strong>. In December 2019, I started web
          development and since then, I can't stop :
          <strong>Tailwind css</strong>, <strong>Laravel</strong>,
          <strong>Vue.js</strong>... And many more to come!
        </p>
        <div class="flex justify-center">
          <nuxt-link
            to="/work"
            class="shadow inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-400 rounded text-lg font-medium uppercase"
          >
            Work
          </nuxt-link>
          <nuxt-link
            to="/contact"
            class="shadow-lg ml-4 inline-flex text-purple-100 bg-transparent border-2 border-purple-100 hover:bg-purple-100 hover:text-purple-500 py-2 px-6 focus:outline-none rounded text-lg font-medium uppercase"
          >
            Get in touch
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div
          class="flex flex-wrap w-full mb-20 flex-col items-center text-center"
        >
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
          >
            I know a lot of technologies and tools
          </h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-base">
            From Git to Vue.js through Bootstrap or Unreal Engine, I have
            knowledge in many areas
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <Skill
            title="HTML5"
            variant="success"
            status="Mastered"
            desc="HTML5 is a markup language used for structuring and presenting
                content on the World Wide Web."
            projectsDesc="I use HTML5 in all my web projects."
            :projects="[
              { text: 'name', url: '/work', external: true },
              { text: 'name2', url: '/contact' }
            ]"
            :links="[
              {
                text: 'Learn more',
                url:
                  'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
                external: true
              }
            ]"
          />
          <Skill
            title="Scss"
            variant="success"
            status="Good knowledge"
            desc="Sass is the most mature, stable, and powerful professional grade CSS extension language in the world."
            color="#CD6799"
            icon="sass-icon"
            :projects="[
              {
                text: 'OHF31 - public',
                url: '/work/ohf31-public',
                external: true
              }
            ]"
            :links="[
              {
                text: 'Official website',
                url: 'https://sass-lang.com/',
                external: true
              }
            ]"
          />
          <Skill
            title="test"
            variant="warning"
            status="OMG"
            desc="lorem ipsum"
          />
          <Skill
            title="Wow"
            variant="danger"
            status="DANGEROUS LANGUAGE"
            desc="lorem ipsum"
          />
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div
              class="border border-gray-300 p-6 rounded-lg shadow divide-y divide-gray-300"
            >
              <div class="flex items-center mb-2 pb-2">
                <div
                  class="w-10 h-10 transform scale-150 inline-flex items-center justify-center rounded-full bg-gray-100 mr-4 shadow-md border-gray-300 border"
                >
                </div>
                <div>
                  <h2
                    class="text-lg text-purple-500 font-medium title-font text-xl"
                  >
                    HTML5
                  </h2>
                  <div
                    class="bg-green-300 text-green-800 font-medium px-2 py-1 text-xs rounded-r border-l-4 border-green-800 uppercase"
                  >
                    Mastered
                  </div>
                </div>
              </div>
              <p class="leading-relaxed text-base py-2">
                HTML5 is a markup language used for structuring and presenting
                content on the World Wide Web.
              </p>
              <div class="py-2">
                <h3 class="font-medium uppercase text-gray-900">Projects</h3>
                <p>I use HTML5 in all my web projects.</p>
              </div>
              <div class="pt-2">
                <a
                  class="text-purple-500 inline-flex items-center hover:text-purple-700"
                  href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
                  target="_blank"
                  rel="noreferrer noopener"
                  >Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-300 p-6 rounded-lg">
              <div
                class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-4"
              >
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                The Catalyzer
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-300 p-6 rounded-lg">
              <div
                class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-4"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                Neptune
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-300 p-6 rounded-lg">
              <div
                class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-4"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"
                  ></path>
                </svg>
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                Melanchole
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-300 p-6 rounded-lg">
              <div
                class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-4"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                </svg>
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                Bunker
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-300 p-6 rounded-lg">
              <div
                class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-4"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                Ramona Falls
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Skill from "@/components/Skill/Skill";

export default {
  components: {
    Skill
  },
  head: {
    title: "Home"
  }
};
</script>

<style></style>
