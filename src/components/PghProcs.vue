<template>
  <div v-cloak>
    <div class="mx-8 lg:mx-24 my-24 lg:my-24 font-extralight">
      <div class="mt-24 lg:mt-48 mb-24">
        <h1 class="font-medium text-5xl lg:text-9xl">PGH Procs</h1>
        <div class="my-8 text-center text-3xl">
          A
          <span class="font-light"
            >simple side-project that became the central information hub</span
          >
          for the country's
          <span class="font-light"> premiere university hospital</span>.
        </div>
        <div class="my-8 text-center text-2xl">
          Catering to over 600,000 patients per year, the hospital's work force,
          which consisted of students and government employees are faced with a
          daunting number of tasks to carry out. An efficient and easy-to-use
          platform where employees and students can exchange information
          regarding procedures and paperwork in the hospital would help ease
          this burden.
        </div>
      </div>
      <kinesis-container
        event="scroll"
        class="mb-8 flex flex-wrap justify-center"
      >
        <kinesis-element
          class="lg:basis-1/2 rounded-lg drop-shadow-2xl overflow-clip"
          :strength="-20"
          axis="x"
          :maxX="10"
        >
          <img src="/PGH_Procs.jpg" alt="" />
        </kinesis-element>
        <kinesis-element
          :maxX="1"
          class="
            lg:basis-1/2 lg:-ml-16
            rounded-sm
            p-4
            drop-shadow-2xl
            bg-white/50
            backdrop-blur
            my-auto
            h-fit
            text-lg text-center
          "
          :strength="20"
          axis="x"
        >
          A website was built on top of an existing telegram channel, providing
          additional functions such as a search, voting, and commenting
          capabilities to the articles. Users were also able to submit their own
          entries to help other students and employees!
          <br />
          <br />
          The front-end was made with Vue.js, the progressive Javascript
          Framework, while the back-end was made with Laravel, a
          model-view-controller PHP framework. The design was made with the
          thought of simplicity and ease-of-use in mind.
        </kinesis-element>
      </kinesis-container>
      <kinesis-container
        event="scroll"
        class="my-32 flex flex-wrap justify-center"
      >
        <kinesis-element
          class="
            lg:basis-1/2 lg:-ml-16
            rounded-lg
            drop-shadow-2xl
            overflow-clip
            lg:order-last
          "
          :strength="50"
          axis="x"
        >
          <img src="/PGH_Procs_article.jpg" alt="PGH Anesthesiology Admin" />
        </kinesis-element>
        <kinesis-element
          class="
            lg:basis-1/2
            rounded-sm
            p-4
            drop-shadow-2xl
            bg-white/50
            backdrop-blur
            my-auto
            h-fit
            text-lg text-center
          "
          :strength="-30"
          axis="x"
        >
          In just a month, the user base grew from just 10 to over 240
          personnel. This has saved thousands of hours to the hospital's work
          force, allowing prompt assistance and provision of care to the
          patients of the hospital.
        </kinesis-element>
      </kinesis-container>
      <kinesis-container event="scroll" class="my-32 lg:my-16 flex flex-wrap">
        <kinesis-element
          class="
            lg:basis-1/2 lg:justify-end lg:-mr-16
            drop-shadow-2xl
            overflow-clip
            flex
            gap-4
            my-4
            justify-center
          "
          :strength="30"
          axis="x"
        >
          <img
            src="/PGH_Procs_article_mobile.jpg"
            alt="PGH Anesthesiology Admin Mobile Version"
            class="w-5/12 rounded-lg"
          />
          <img
            src="/PGH_Procs_backend.jpg"
            alt="PGH Anesthesiology Mobile Version"
            class="w-5/12 rounded-lg"
          />
        </kinesis-element>
        <kinesis-element
          class="
            lg:basis-1/2
            rounded-sm
            p-4
            drop-shadow-2xl
            bg-white/50
            backdrop-blur
            my-auto
            h-fit
            text-lg text-center
            justify-center
            lg:justify-start
          "
          :strength="-30"
          axis="x"
        >
          As with all modern websites, mobile-responsiveness is a priority for
          this website as well. The administrative side and public-facing sides
          were designed to be able to adapt to all screen sizes, whether it be a
          mobile phone, a tablet, or a desktop.
        </kinesis-element>
      </kinesis-container>
    </div>
    <contact-me></contact-me>
  </div>
</template>

<script>
import ContactMe from "./ContactMe.vue";

export default {
  components: { ContactMe },
  name: "PghProcs",
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>