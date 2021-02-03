<template>
  <Section>
    <h2 class="title xyz-nested" xyz="fade left-1 stagger-1">
      <div
        v-for="(e, i) in 'Projects'.split('')"
        :key="i"
        class="xyz-nested"
        v-html="e"
      ></div>
    </h2>
    <div class="grid gap-6 mb-12 lg:grid-cols-2 2xl:grid-cols-3">
      <div
        v-for="(e, i) in projects"
        :key="i"
        xyz="delay-8 small-1 fade stagger-4"
        class="flex flex-col p-6 transition-transform transform bg-gray-300 cursor-default dark:bg-gray-900 rounded-2xl md:hover:scale-105 xyz-nested"
      >
        <div class="mb-2 text-2xl font-semibold">
          {{ e.title }}
        </div>
        <div class="mb-8 text-lg text-gray-700 dark:text-gray-300">
          {{ e.content }}
        </div>
        <div class="mt-auto space-y-3">
          <div class="flex flex-wrap">
            <a
              v-for="(l, i1) in e.links"
              :key="i1"
              :href="l.url"
              target="_blank"
              rel="noopener noreferrer"
              class="mb-1 mr-3 font-semibold transition-colors border-b-2 border-transparent dark:hover:border-gray-200 hover:border-gray-800"
              >{{ l.text }}</a
            >
          </div>
          <div class="flex flex-wrap">
            <div
              v-for="(t, i2) in e.tags"
              :key="i2"
              class="px-2 py-1 mb-1 mr-2 font-medium text-gray-800 transition-colors bg-gray-400 bg-opacity-40 dark:bg-opacity-100 dark:text-gray-400 dark:bg-gray-800 rounded-xl"
            >
              {{ t }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "OHF31 website",
          content: "My first real project.",
          links: [
            {
              text: "Website",
              url: "https://www.ohf31.fr"
            }
          ],
          tags: ["PHP", "Bootstrap", "jQuery", "AOS", "video.js", "Scss"]
        },
        {
          title: "My portfolio",
          content: "lorem ipsum",
          links: [
            {
              text: "Website",
              url: "/"
            },
            {
              text: "Github",
              url: "https://github.com/florian-lefebvre/portfolio"
            }
          ],
          tags: ["Vue", "Nuxt", "Tailwind CSS", "Github Pages", "AnimXYZ", "Js"]
        },
        {
          title: "yNotes app",
          content: "aaa",
          links: [
            {
              text: "Website",
              url: "https://ynotes.fr/"
            },
            {
              text: "Github",
              url: "https://github.com/ModernChocolate/ynotes"
            }
          ],
          tags: ["UI/UX design", "Dart", "Flutter"]
        },
        {
          title: "yNotes website",
          content: "aaa",
          links: [
            {
              text: "Website",
              url: "https://ynotes.fr/"
            },
            {
              text: "Github",
              url: "https://github.com/ModernChocolate/ynotes-website"
            }
          ],
          tags: ["Vue", "Nuxt", "Tailwind CSS", "AnimXYZ", "Github Pages", "Js"]
        },
        {
          title: "GLutton Runner",
          content: "aaa",
          links: [
            {
              text: "Play Store",
              url:
                "https://play.google.com/store/apps/details?id=com.GirofleStudio.GluttonRunner"
            }
          ],
          tags: ["Unreal Engine 4", "Mobile"]
        },
        {
          title: "shortcuts-app",
          content: "aaa",
          links: [
            {
              text: "Github",
              url: "https://github.com/florian-lefebvre/shortcuts-app"
            }
          ],
          tags: ["Electron", "Vue", "Tailwind CSS"]
        },
        {
          title: "vertical timeline component",
          content: "aaa",
          links: [
            {
              text: "View",
              url: "https://tailwindcomponents.com/component/vertical-timeline"
            }
          ],
          tags: ["Tailwind CSS"]
        },
        {
          title: "Instagram chat clone with Tailwind CSS",
          content: "aaa",
          links: [
            {
              text: "Github",
              url: "https://github.com/florian-lefebvre/instagram-clone"
            }
          ],
          tags: ["Tailwind CSS", "CSS grid"]
        },
        {
          title: "Barcode generator",
          content: "aaa",
          links: [
            {
              text: "Website",
              url: "https://florian-lefebvre.github.io/barcode-generator/"
            },
            {
              text: "Github",
              url: "https://github.com/florian-lefebvre/barcode-generator"
            }
          ],
          tags: ["Bootstrap", "Js", "Github Pages"]
        }
      ]
    };
  },
  created() {
    this.projects.forEach(p => {
      p.tags = p.tags.sort();
    });
  }
};
</script>

<style></style>
