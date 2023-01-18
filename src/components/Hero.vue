<template>
  <div
    class="
      flex flex-col
      justify-between
      min-h-full
      h-screen
      text-center
      bg-neutral-900 bg-[url('/graph-paper.svg')]
      text-white
    "
  >
    <div
      class="
        flex flex-col
        p-3
        text-center
        mx-auto
        z-10
        text-gray-200
        font-thin
        mt-4
      "
    >
      <div
        v-for="section in sections"
        :key="section.name"
        class="
          hidden
          md:block
          text-sm
          my-0.5
          hover:underline
          hover:scale-125
          hover:font-normal
          hover:bg-neutral-900/70
          transition-all
          duration-500
          ease-out
          text-white
          cursor-pointer
        "
      >
        <a :href="'#' + section.link">
          {{ section.name }}
        </a>
      </div>
    </div>
    <div class="text-left mx-4 sm:mx-20 lg:mx-40">
      <div class="font-serif text-8xl my-2">
        <em>
          <VueWriter
            :typeSpeed="70"
            :caret="underscore"
            :array="['Personal Space', 'Legacy', 'Website']"
          >
            Your
          </VueWriter>
        </em>
      </div>
      <div
        class="font-sans font-thin text-lg transition duration-100 ease-in-out"
      >
        Let's Build Something Great
      </div>
    </div>
    <div class="mb-4 w-full text-white/50 font-thin animate-pulse">
      Scroll down to start
    </div>
  </div>
</template>

<script>
import Menu from "./Menu.vue";

export default {
  name: "Hero",
  components: { Menu },
  data() {
    return {
      sections: [
        { name: "Works", link: "Work" },
        { name: "Me", link: "Me" },
        { name: "Contact", link: "Contact" },
      ],
    };
  },
  methods: {
    goSection(val) {
      this.$emit("go-section", val);
    },
  },
};
</script>

<style>
</style>