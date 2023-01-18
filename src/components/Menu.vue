<template>
  <Slide :closeOnNavigation="true">
    <div class="flex flex-col text-white gap-8 font-thin">
      <router-link
        to="/"
        class="
          hover:underline hover:scale-105 hover:font-normal
          transition-all
          duration-500
          ease-out
        "
        >Home</router-link
      >
      <a
        v-for="section in sections"
        :key="section.name"
        :id="section.name"
        :href="section.link"
        class="
          hover:underline hover:scale-105 hover:font-normal
          transition-all
          duration-500
          ease-out
        "
      >
        <span>{{ section.name }}</span>
      </a>
    </div>

    <!-- <div
      class="
        md:flex
        flex-col
        p-3
        text-center
        mx-auto
        z-10
        text-gray-200
        font-thin
        mt-4
        hidden
      "
    >
      <div
        v-for="section in sections"
        :key="section.name"
        class="
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
        <a href="#" @click.prevent="goSection(section.link)">
          {{ section.name }}
        </a>
      </div>
    </div> -->
  </Slide>
</template>

<script>
import { Slide } from "vue3-burger-menu";

export default {
  name: " Menu ",
  components: {
    Slide,
  },
  data() {
    return {
      sections: [
        { name: "Works", link: "/#Work" },
        { name: "About Me", link: "/#Me" },
        { name: "Contact", link: "/#Contact" },
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
.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  left: 36px;
  top: 36px;
  cursor: pointer;
  z-index: 500;
}
.bm-burger-bars {
  background-color: #000;
}
.line-style {
  position: absolute;
  height: 15%;
  left: 0;
  right: 0;
}
.cross-style {
  position: absolute;
  top: 12px;
  right: 2px;
  cursor: pointer;
}
.bm-cross {
  background: #ffffff;
}
.bm-cross-button {
  height: 30px;
  width: 30px;
}
.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  background: rgb(89, 89, 89);
  background: linear-gradient(
    0deg,
    rgba(89, 89, 89, 0.15592174369747902) 3%,
    rgba(89, 89, 89, 1) 50%
  );
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}

.bm-overlay {
  background: rgba(0, 0, 0, 0.5);
}
.bm-item-list {
  color: #b8b7ad;
  margin-left: 10%;
  font-size: 20px;
}
.bm-item-list > * {
  display: flex;
  text-decoration: none;
  padding: 0.7em;
}
.bm-item-list > * > span {
  margin-left: 10px;
  font-weight: 300;
  color: white;
}
</style>