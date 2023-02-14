<template>
  <div class="h-screen">
    <section class="" ref="Home">
      <Hero />
    </section>
    <section class="" ref="Intro" data-aos="fade-in">
      <Intro />
    </section>
    <section class="" id="Work" data-aos="fade-in">
      <Projects />
    </section>
    <section class="overflow-x-hidden" id="Me">
      <AboutMe />
    </section>
    <section class="" id="Contact">
      <ContactMe />
    </section>
  </div>
</template>

<script>
import LogoGrid from "./LogoGrid.vue";
import Projects from "./Projects.vue";
import Hero from "./Hero.vue";
import Intro from "./Intro.vue";
import AboutMe from "./AboutMe.vue";
import ContactMe from "./ContactMe.vue";
import Hamburger from "./Hamburger.vue";
import Menu from "./Menu.vue";
export default {
  name: "Home",
  components: {
    LogoGrid,
    Projects,
    Hero,
    Intro,
    AboutMe,
    ContactMe,
    Hamburger,
    Menu,
  },
};
</script>

<style>
</style>