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
      md:z-50
      relative
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
    <div class="text-left mx-4 sm:mx-20 lg:mx-40 max-w-screen-2xl">
      <div class="font-serif text-8xl my-2">
        <em>
          <VueWriter
            :typeSpeed="80"
            :caret="underscore"
            :array="['Website', 'Legacy', 'Personal Space']"
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
    <div class="mb-8 w-full text-white/50 font-thin animate-pulse flex-row">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 mx-auto animate-bounce"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
        />
      </svg>
      <div>Scroll down to start</div>
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
        { name: "Portfolio", link: "Work" },
        { name: "About Me", link: "Me" },
        { name: "Contact", link: "Form" },
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