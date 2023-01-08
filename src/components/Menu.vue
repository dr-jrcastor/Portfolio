<template>
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
  </div>
</template>

<script>
export default {
  name: " Menu ",
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