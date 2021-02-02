<template>
  <div>
    <Header />
    <div class="container px-4 mx-auto">
      <Hero />
      <Intro />
      <Timeline />
      <div class="space-y-8">
        <div>
          <div>Skillset</div>
          <div class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
            <div
              v-for="(e, i) in 12"
              :key="i"
              class="bg-gray-300 dark:bg-gray-900 p-6 rounded-2xl flex justify-center"
            >
              {{ i }}
            </div>
          </div>
          <div>
            Next
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
    </div>
    <Footer />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
