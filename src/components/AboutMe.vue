<template>
  <div class="text-black py-4 w-screen relative max-w-screen-2xl mx-auto">
    <div class="mx-4 my-3 lg:mx-24 lg:my-8">
      <div
        class="
          font-sans font-semibold
          text-center
          sm:text-left
          text-6xl
          lg:text-8xl
          leading-relaxed
          shrink-0
        "
        data-aos-anchor-placement="center bottom"
        data-aos="fade-down"
      >
        <h2>Hi, I'm JR!</h2>
      </div>
      <div
        class="max-w-lg sm:float-right sm:w-1/2 mx-4 sm:-mt-16 sm:mb-4"
        data-aos-anchor-placement="center bottom"
        data-aos="fade-left"
      >
        <img src="/Profile.jpg" alt="Headshot" class="rounded-2xl shadow-2xl" />
      </div>
      <div class="my-4">
        <ul class="text-2xl lg:text-4xl font-light">
          <li
            class="mb-2"
            data-aos-anchor-placement="center bottom"
            data-aos="fade-left"
          >
            <Check /> Freelance full stack developer
          </li>
          <li
            class="mb-2"
            data-aos-anchor-placement="center bottom"
            data-aos="fade-left"
          >
            <Check /> Based in the Philippines
          </li>
          <li
            class="mb-2"
            data-aos-anchor-placement="center bottom"
            data-aos="fade-left"
          >
            <Check /> Designing and developing websites since 2020
          </li>
        </ul>
      </div>
      <div class="">
        <div data-aos-anchor-placement="center bottom" data-aos="fade-up">
          I have worked with
          <span class="font-medium italic"
            >solo entreprenuers to large companies</span
          >
          and on
          <span class="font-medium italic"
            >non-profit personal projects to big government projects</span
          >! I can work with anyone, and no project is too small or big for me!
        </div>
      </div>
      <div
        class="
          text-xl
          sm:text-center sm:clear-right
          lg:clear-none lg:text-2xl lg:font-light
          my-4
        "
        data-aos-anchor-placement="center bottom"
        data-aos="fade-up"
      >
        Areas of Expertise:
      </div>
      <div
        class="grid grid-flow-col grid-rows-3 place-content-center gap-4 my-4"
      >
        <logo-grid></logo-grid>
      </div>
      <div
        class="my-4"
        data-aos-anchor-placement="center bottom"
        data-aos="fade-right"
      >
        A problem-solver at heart, I love finding new and exciting ways to
        conquer challenges. I am efficient, organized, and I always strive to be
        cost-effective. Outside of developing websites, I am also a 5th year
        medical student, a content editor for a health information platform, and
        an avid football fan. ⚽️
      </div>
    </div>
  </div>
</template>

<script>
import LogoGrid from "./LogoGrid.vue";
import Check from "./Check.vue";
export default {
  name: "AboutMe",
  components: { LogoGrid, Check },
};
</script>

<style>
</style>