<template>
  <div>
    <Header />
    <div class="container px-4 mx-auto">
      <Hero />
      <Intro />
      <div class="space-y-8">
        <div>Timeline</div>
        <div>
          <div>Skills and techs</div>
          <div class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div
              v-for="(e, i) in 12"
              :key="i"
              class="bg-gray-300 dark:bg-gray-900 p-6 rounded-2xl flex justify-center"
            >
              {{ i }}
            </div>
          </div>
          <div>
            High Medium Low
          </div>
        </div>
        <div>
          <div>
            Projects
          </div>
          <div>
            <div>ohf31.fr</div>
            <div>portfolio</div>
            <div>yNotes website</div>
            <div>yNotes app</div>
            <div>Glutton Runner</div>
            <div>shortcuts-app</div>
            <div>
              tailcomponents
              https://tailwindcomponents.com/component/vertical-timeline
            </div>
            <div>insta clone</div>
            <div>barcode generator</div>
          </div>
        </div>
        <div>Education</div>
        <div>Music</div>
        <div>Contact</div>
      </div>
      <div>
        <div class="">
          <div
            class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
          >
            <!-- left -->
            <div class="flex flex-row-reverse md:contents">
              <div
                class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 class="font-semibold text-lg mb-1">Lorem ipsum</h3>
                <p class="leading-tight text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  quaerat?
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
            </div>
            <!-- right -->
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
              <div
                class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 class="font-semibold text-lg mb-1">Lorem ipsum</h3>
                <p class="leading-tight text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vitae, facilis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
