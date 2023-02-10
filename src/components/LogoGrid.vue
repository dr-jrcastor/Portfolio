<template>
  <div
    v-for="image in images"
    :key="image.id"
    class="
      h-20
      w-20
      opacity-90
      transition
      ease-in-out
      delay-100
      hover:scale-150 hover:opacity-100
      duration-300
    "
    data-aos="flip-up"
    data-aos-anchor-placement="center center"
  >
    <img
      v-if="(image.loaded = true)"
      :src="image.src"
      :alt="image.alt"
      @load="image.loaded = true"
    />
  </div>
</template>

<script>
export default {
  name: "LogoGrid",
  data() {
    return {
      images: [
        { id: 1, src: "/html.png", alt: "HTML Logo", loaded: false },
        { id: 2, src: "/shopify.png", alt: "Shopify Logo", loaded: false },
        { id: 3, src: "/mysql.png", alt: "MySQL Logo", loaded: false },
        { id: 4, src: "/css.png", alt: "CSS Logo", loaded: false },
        { id: 5, src: "/wp.png", alt: "Wordpress Logo", loaded: false },
        { id: 6, src: "/vue.png", alt: "Vue Logo", loaded: false },
        { id: 7, src: "/js.png", alt: "JavaScript Logo", loaded: false },
        { id: 8, src: "/php.png", alt: "PHP Logo", loaded: false },
        { id: 9, src: "/laravel.png", alt: "Laravel Logo", loaded: false },
      ],
    };
  },
};
</script>

<style>
</style>