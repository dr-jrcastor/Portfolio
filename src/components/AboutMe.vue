<template>
  <div class="text-black py-4 w-screen relative max-w-screen-2xl mx-auto">
    <div
      class="
        grid grid-flow-row
        gap-4
        mx-4
        lg:mx-24
        my-3
        lg:my-8
        place-content-center
        relative
      "
    >
      <div
        class="
          max-w-xl
          md:absolute md:right-0
          top-0
          md:opacity-20
          lg:opacity-40
          lg:hover:opacity-100
          lg:hover:translate-x-10
          lg:hover:shadow-2xl
          transition-all
          duration-500
          delay-500
          md:mb-16 md:mr-16
          order-first
        "
        data-aos="fade-left"
        data-aos-anchor-placement="bottom center"
      >
        <img src="/Profile.jpg" alt="Headshot" class="rounded-2xl" />
      </div>
      <div
        class="
          h-full
          font-sans font-semibold
          text-6xl
          lg:text-8xl
          leading-relaxed
        "
      >
        <h2><span data-aos="fade-down">Hi, I'm JR!</span></h2>
      </div>
      <div>
        <ul class="text-2xl lg:text-4xl mb-4 font-light md:w-1/2">
          <li class="mb-2" data-aos="fade-left">
            <Check /> Freelance full stack developer
          </li>
          <li class="mb-2" data-aos="fade-left">
            <Check /> Based in the Philippines
          </li>
          <li class="mb-2" data-aos="fade-left">
            <Check /> Designing and developing websites since 2020
          </li>
        </ul>
        <!-- <div
          class="
            max-w-xl
            md:absolute md:right-0
            top-0
            md:opacity-20
            lg:opacity-40
            lg:hover:opacity-100
            lg:hover:translate-x-10
            lg:hover:shadow-2xl
            transition-all
            duration-500
            delay-500
            md:mb-16 md:mr-16
          "
        >
          <img src="/Profile.jpg" alt="Headshot" class="rounded-2xl" />
        </div> -->
      </div>
      <div class="lg:w-1/2">
        <div data-aos="fade-up" data-aos-anchor-placement="center bottom">
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
        class="text-xl lg:text-2xl font-light md:text-center lg:w-1/2"
        data-aos="fade-up"
        data-aos-anchor-placement="center bottom"
      >
        Areas of Expertise:
      </div>
      <div
        class="
          grid grid-flow-col grid-rows-3
          place-content-center
          gap-4
          lg:w-1/2
        "
      >
        <logo-grid></logo-grid>
      </div>
      <div data-aos="fade-right" data-aos-anchor-placement="center bottom">
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