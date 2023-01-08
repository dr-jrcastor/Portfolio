<template>
  <div class="text-black py-4">
    <div
      class="
        grid grid-flow-row
        gap-4
        p-4
        max-w-3xl
        text-center
        place-content-center
        mx-auto
      "
    >
      <div class="h-full font-sans font-semibold text-4xl leading-relaxed">
        <h2><span class="text-2xl" data-aos="fade-down">Hi, I'm JR!</span></h2>
      </div>

      <div data-aos="fade-left">
        I am a freelance full stack developer based in the Philippines. I've
        been designing and developing websites since 2020! I have worked with
        <span class="font-medium italic"
          >solo entreprenuers to large companies</span
        >
        and on
        <span class="font-medium italic"
          >non-profit personal projects to big government projects</span
        >! I am very much willing to work with anyone, and no project is too
        <span class="text-sm">"small"</span> or
        <span class="text-lg">"big"</span> for me! I have previously worked with
        the following languages, frameworks, and platforms:
      </div>
      <div class="grid grid-flow-col grid-rows-3 place-content-center gap-4">
        <logo-grid></logo-grid>
      </div>
      <div data-aos="fade-right">
        I am a problem-solver at heart, attempting to find new and exciting ways
        to conquer challenges ever since I could remember. Three things to
        expect from working with me include organization, efficiency, and
        cost-effectiveness. Outside of developing websites, I am also a 5th year
        medical student, a content editor for a health information platform, and
        an avid football fan. ⚽️
      </div>
    </div>
  </div>
</template>

<script>
import LogoGrid from "./LogoGrid.vue";
export default {
  name: "AboutMe",
  components: { LogoGrid },
};
</script>

<style>
</style>