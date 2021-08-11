<template>
  <Section>
    <SectionsTitle title="Education" />
    <div class="gap-6 mb-10 grid">
      <div
        v-for="(s, i) in education"
        :key="i"
        xyz="delay-8 small-1 fade stagger-6"
        class="bg-gray-300 dark:bg-gray-900 p-8 rounded-xl transition-transform transform xyz-nested"
      >
        <div>
          <div
            v-html="s.date"
            class="text-sm lg:text-base opacity-70 font-medium"
          ></div>
          <div
            v-html="s.school"
            class="text-2xl lg:text-3xl font-semibold mb-2"
          ></div>
        </div>
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 mt-5">
          <div>
            <div
              class="text-xl lg:text-2xl font-medium text-gray-600 dark:text-gray-300"
            >
              Diplomas & curriculum
            </div>
            <div
              class="h-px bg-gray-600 dark:bg-gray-300 w-full mb-3 lg:mb-6"
            ></div>
            <div class="space-y-1 ml-4">
              <div
                v-for="(e, i1) in s.elements"
                :key="i1"
                v-html="e"
                class="lg:text-lg text-justify leading-6 list-item"
              ></div>
            </div>
          </div>
          <div>
            <div
              class="text-xl lg:text-2xl font-medium text-gray-600 dark:text-gray-300"
            >
              Activities
            </div>
            <div
              class="h-px bg-gray-600 dark:bg-gray-300 w-full mb-3 lg:mb-6"
            ></div>
            <div class="space-y-1 ml-4">
              <div
                v-for="(x, i1) in s.activities"
                :key="i1"
                class=" rounded-xl"
              >
                <div
                  v-html="x.text"
                  class="lg:text-lg leading-6 text-justify list-item"
                ></div>
                <div class="flex flex-wrap mt-2" v-if="x.links.length !== 0">
                  <a
                    v-for="(l, i2) in x.links"
                    :key="i2"
                    :href="l.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mb-1 mr-3 font-semibold transition-colors border-b-2 border-transparent dark:hover:border-gray-200 hover:border-gray-800"
                    >{{ l.text }}</a
                  >
                </div>
              </div>
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
      education: [
        {
          date: "2015 - 2019",
          school: "Secondary school Sainte Geneviève at Saint Jory",
          elements: [
            "Spanish option",
            "Diplôme National du Brevet mention Très Bien (G.C.S.E equivalent with honourable mention)",
            "Certificate PSC1 (First aid certificate)"
          ],
          activities: [
            {
              text:
                "For 2 years, help with the management of the school's IT (installation, configuration, and updating of computers and peripherals under Windows 10)",
              links: []
            },
            {
              text: "Creation of a computer club",
              links: []
            },
            {
              text:
                'Internship of observation in the last year ("année de 3ème") in the architectural firm SYN ARCHITECTURES',
              links: [
                {
                  text: "SYN ARCHITECTURES",
                  url: "http://www.syn-architectures.com/"
                }
              ]
            }
          ]
        },
        {
          date: "2019 - Today",
          school: "High school Le Ferradou at Blagnac",
          elements: [
            "European English section",
            "High school diploma speciality teaching: mathematics, physics-chemistry and NCS (Numerical and Computer Science)"
          ],
          activities: [
            {
              text:
                'First year ("année de 2nde") observation internship in the IT company Atos, at Mundi Web Services',
              links: [
                {
                  text: "Atos",
                  url: "https://atos.net/"
                },
                {
                  text: "Mundi Web Services",
                  url: "https://mundiwebservices.com/"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style></style>
