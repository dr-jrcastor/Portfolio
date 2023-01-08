<template>
  <div class="min-h-screen text-center text-black">
    <div class="mx-auto py-4">
      <div class="my-4">
        <h2 class="font-sans font-semibold text-3xl">Previous Works</h2>
        <h3>A few of my previous projects!</h3>
      </div>
      <div
        id="project_wrapper"
        class="
          rounded-t-3xl
          snap-y snap-mandatory
          h-screen
          overflow-auto
          overscroll-auto
          scroll-smooth
          bg-neutral-900
        "
      >
        <div
          v-for="project in projects"
          :key="project.id"
          :id="project.id"
          class="
            h-screen
            text-black text-center
            relative
            p-10
            snap-center
            scroll-mt-4
            shrink-0
            border-4
          "
        >
          <img
            :src="project.src"
            :alt="project.alt"
            class="
              absolute
              z-0
              top-0
              left-0
              object-left-top
              min-h-screen
              md:brightness-50
              hover:md:brightness-100
              transition
              ease-in-out
              duration-700
              object-cover
              overflow-hidden
            "
          />
          <div
            class="
              bg-black/50
              hover:drop-shadow-2xl hover:scale-105 hover:lg:-translate-x-4
              transition
              ease-in-out
              duration-300
              text-white
              p-4
              rounded
              z-10
              backdrop-blur
              h-fit
              cursor-default
              w-full
              lg:w-1/3 lg:absolute lg:right-10
            "
          >
            <div class="text-xl font-medium">
              {{ project.title }}
            </div>
            <div
              class="
                md:text-white/50
                hover:text-white
                transition
                ease-in-out
                duration-700
              "
            >
              <div class="text-md font-normal my-4">
                {{ project.blurb }}
              </div>
              <div class="text-sm font-light my-4">
                {{ project.madewith }}
              </div>
            </div>
            <div>
              <button
                class="
                  text-sm
                  w-fit
                  px-4
                  py-2
                  border
                  rounded
                  text-white/50
                  hover:text-white hover:scale-110
                  transition
                  duration-200
                "
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PGHAnes from "/PGH_Anes.jpg";

export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          id: "PGH_Anesthesiology",
          src: "/PGH_Anes.jpg",
          alt: "PGH Anesthesiology Official Website",
          title:
            "University of the Philippines Department of Anesthesiology Official Website",
          blurb:
            "The Department's official website that serves as their way to communicate to the general public as well as their own members. This project came with a custom content management system that is used by the Department's administrators to this day.",
          madewith: "Made with: HTML5, CSS, JS, with Vue.js and Laravel",
        },
        {
          id: "Nesabel Online",
          src: "/Nesabel.jpg",
          alt: "Nesabel Online Grocery",
          title: "Nesabel Online Grocery",
          blurb:
            "An e-commerce platform serving tens of thousands of products to thousands of customers from all over Metro Manila and parts of Central Luzon daily. Initially solely a brick-and-mortar store, Nesabel Online has become a significant stream of revenue for the company.",
          madewith: "Made with: Shopify/Liquid, HTML5, CSS3, JS",
        },
        {
          id: "PGH Procs",
          src: "/PGH_Procs.jpg",
          alt: "PGH Procs Website",
          title: "PGH Procs",
          blurb:
            "A non-profit online platform for the employees and students of the Philippine General Hospital, the country's largest training hospital. It contains over a hundred tutorials on various tasks that a medical intern, clerk, or student is expected to encounter in their respective rotations in the hospital. As of writing, it has helped over 240 personnel navigate the university hospital and provide the best care to its patients.",
          madewith: "Made with: HTML5, CSS3, JS, Vue.js and Laravel",
        },
      ],
    };
  },
};
</script>

<style>
</style>