<template>
  <Section>
    <SectionsTitle title="Projects" />
    <div class="grid gap-6 mb-12 lg:grid-cols-2 2xl:grid-cols-3">
      <XyzConflict
        v-for="(e, i) in projects"
        :key="i"
        xyz="delay-8 small-1 fade stagger-4"
        class="flex flex-col p-6 transition-transform transform bg-gray-300 cursor-default dark:bg-gray-900 rounded-2xl"
        endClass="md:hover:-translate-y-2"
      >
        <div class="mb-2 text-xl md:text-2xl font-semibold">
          {{ e.title }}
        </div>
        <div
          class="mb-8 md:text-lg text-gray-700 dark:text-gray-300 text-justify"
        >
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
              class="px-2 py-1 mb-1 mr-2 text-sm font-medium text-gray-800 transition-colors bg-gray-400 bg-opacity-40 dark:bg-opacity-100 dark:text-gray-400 dark:bg-gray-800 rounded-xl"
            >
              {{ t }}
            </div>
          </div>
        </div>
      </XyzConflict>
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
          content:
            "I finally finished v3 of the 1st site I made! That's a basic showcase site but I think it looks really great. And it runs on Nuxt 3 🎉",
          links: [
            {
              text: "Website",
              url: "https://www.ohf31.fr"
            }
          ],
          tags: [
            "Js",
            "Nuxt 3",
            "Vue 3",
            "Tailwind CSS",
            "Typescript",
            "Vercel",
            "SSR"
          ]
        },
        {
          title: "RégioLangues",
          content:
            "RégioLangues is a website I made for my brother. I was only involved in the coding, not the data. Its goal: gather resources around the web on the topic of French regional languages. It uses Supabase for the backend.",
          links: [
            {
              text: "Website",
              url: "https://www.regiolangues.fr"
            }
          ],
          tags: [
            "Vue",
            "Nuxt",
            "Js",
            "Tailwind CSS",
            "SSR",
            "Supabase",
            "Vercel",
            "Typescript"
          ]
        },
        {
          title: "Supabase",
          content:
            "Supabase is an awesome open source project. I already contributed several times to the public website.",
          links: [
            {
              text: "Website",
              url: "https://supabase.com"
            },
            {
              text: "GitHub",
              url: "https://github.com/supabase"
            }
          ],
          tags: ["Open Source", "Supabase", "React", "Js", "Tailwind CSS"]
        },
        {
          title: "yNotes app",
          content:
            "yNotes is a mobile application that retrieves data from the student life services used by most French schools. It reshapes and adds many features. I'm involved in the development and the design of the app.",
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
          tags: ["UI/UX design", "Dart", "Flutter", "Figma"]
        },
        {
          title: "yNotes website",
          content:
            "At yNotes, we needed a support center and a more consistent website, so I remade everything. This allowed me to discover animation with AnimXYZ and learn how to make a more modern design.",
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
          title: "ynotes-packages",
          content:
            "I'm making Flutter libraries for the yNotes app to make its development easier: theming, components and more.",
          links: [
            {
              text: "Github",
              url: "https://github.com/EduWireApps/ynotes-packages"
            }
          ],
          tags: ["Dart", "Flutter"]
        },
        {
          title: "flutter_responsive_breakpoints",
          content:
            "I love Tailwind CSS and how easy it is to achieve great responsive designs quickly. I made this package to make my life easier with Flutter using the Tailwind CSS breakpoints.",
          links: [
            {
              text: "Pub.dev",
              url: "https://pub.dev/packages/flutter_responsive_breakpoints"
            },
            {
              text: "Github",
              url:
                "https://github.com/florian-lefebvre/flutter_responsive_breakpoints"
            }
          ],
          tags: ["Dart", "Flutter", "Pub package"]
        },
        {
          title: "Special characters",
          content:
            "Writing special characters such as ¿ is often (if not always) a headache, especially with foreign languages. This website aims to make it easier. I'm not done with this project yet, which is on hold for the moment.",
          links: [
            {
              text: "Website",
              url: "https://special-characters.vercel.app"
            }
          ],
          tags: [
            "Vue",
            "Nuxt",
            "Tailwind CSS",
            "Vercel",
            "Strapi",
            "GraphQL",
            "Typescript"
          ]
        },
        {
          title: "My portfolio",
          content:
            "Not much to say except that I am quite satisfied with the result.",
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
          title: "shortcuts-app",
          content:
            "I needed an application that would have shortcuts the same way Opera does, in the sidebar. So I coded it using Electron.js. It was really fun to do.",
          links: [
            {
              text: "Github",
              url: "https://github.com/florian-lefebvre/shortcuts-app"
            },
            {
              text: "Releases",
              url: "https://github.com/florian-lefebvre/shortcuts-app/releases"
            }
          ],
          tags: ["Electron", "Vue", "Tailwind CSS"]
        },
        {
          title: "Vertical timeline component",
          content:
            "The CSS grid timeline component of my journey through this portfolio can also be found on tailwindcomponents.com.",
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
          content:
            "I did this for a school project. The repository includes examples such as gifs and audio messages.",
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
          content:
            "The name speaks for itself. I made this very small site for a friend of mine from high school.",
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
        },
        {
          title: "Glutton Runner",
          content:
            "The first (and only) game I coded using UE4 was Glutton Runner, an endless game. Unfortunately, this engine was not adapted to my needs, so I paused the project. (It is unplayable)",
          links: [
            {
              text: "Play Store",
              url:
                "https://play.google.com/store/apps/details?id=com.GirofleStudio.GluttonRunner"
            }
          ],
          tags: ["Unreal Engine 4", "Mobile"]
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
