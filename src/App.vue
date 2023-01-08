<script setup>
import LogoGrid from "./components/LogoGrid.vue";
import Projects from "./components/Projects.vue";
import Hero from "./components/Hero.vue";
import Intro from "./components/Intro.vue";
import AboutMe from "./components/AboutMe.vue";
import ContactMe from "./components/ContactMe.vue";
import Loading from "./components/Loading.vue";
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <div class="scroll-smooth">
    <!--
        Menu
      -->
    <div class="h-screen snap-y snap-mandatory">
      <section class="snap-start" ref="Home">
        <Hero />
      </section>
      <section class="snap-start" ref="Intro" data-aos="fade-in">
        <Intro />
      </section>
      <section class="snap-start" id="Work" data-aos="fade-in">
        <Projects />
      </section>
      <section class="snap-start" id="Me">
        <AboutMe />
      </section>
      <section class="snap-start" id="Contact">
        <ContactMe />
      </section>
    </div>
  </div>
</template>

<style scoped>
</style>
