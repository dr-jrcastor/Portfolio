<template>
  <div
    class="
      h-screen
      bg-zinc-800
      text-white text-3xl
      flex flex-col
      gap-y-16
      w-full
      z-50
      absolute
      text-center
      right-0
      py-16
      font-light
    "
  >
    <div class="absolute top-4 right-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-10 h-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
    <div>Home</div>
    <div>Work</div>
    <div>Me</div>
    <div>Contact</div>
  </div>
</template>

<script>
export default {
  name: "Hamburger",
};
</script>

<style>
</style>