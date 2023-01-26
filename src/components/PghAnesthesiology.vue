<template>
  <div v-cloak>
    <div class="mx-8 lg:mx-24 my-24 lg:my-24 font-extralight">
      <div class="mt-24 lg:mt-48 mb-24">
        <h1 class="font-medium text-5xl lg:text-8xl">
          PGH Anesthesiology Official Website
        </h1>
        <div class="my-8 text-center text-3xl">
          A <span class="font-light">world-class and modern website</span> for a
          <span class="font-light"> world-class and modern department </span>.
        </div>
        <div class="my-8 text-center text-2xl">
          The Department of Anesthesiology of the Philippine General Hospital
          wanted a refurbishment of their old website to a more professional,
          modern, and feature-filled website that clearly reflects the state of
          the department.
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
          <img src="/PGH_Anes.jpg" alt="" />
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
          They asked for a website that was primarily geared toward the public
          where they can share the latest happenings and projects of the
          department. Additionally, they also wanted a segment that only current
          members and alumni could access, where they planned to share quizzes,
          procedure and conference schedules, and the like.
          <br />
          <br />
          The front-end was made with Vue.js, the progressive Javascript
          Framewowrk, while the back-end was made with Laravel, a
          model-view-controller PHP framework. The design was made in close
          coordination with the deparmtnet heads and their website team. After
          thorough consultation and revisions, we settled on a design that was
          clean, crisp, and accomplished all their goals and more!
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
          <img src="/PGH_Anes_Admin.jpg" alt="PGH Anesthesiology Admin" />
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
          To keep up with a dynamic and ever-changing Department, it was
          important that the contents of the website could be edited with ease.
          Thus, we set out to create a bespoke content management system. A
          clear plan on the content they wish to publish and items they wanted
          to have changed was made, which was then developed into a beautiful,
          easy-to-navigate interface that could be easily taught to future team
          members.
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
            src="/Anes_admin_mobile.jpg"
            alt="PGH Anesthesiology Admin Mobile Version"
            class="w-5/12 rounded-lg"
          />
          <img
            src="/Anes_mobile.jpeg"
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
          were designed to be able to adapt to all screen sizes beautifully and
          consistently, whether it be a mobile phone, a tablet, or a desktop.
          <br />
          <br />
          This allowed members to access all their resources on the road, and
          website administrators to change their website from the convenienve of
          their mobile phones.
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
  name: "PghAnesthesiology",
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