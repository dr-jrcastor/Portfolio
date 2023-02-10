<template>
  <div v-cloak>
    <div class="mx-8 lg:mx-24 my-24 lg:my-24 font-extralight">
      <div class="mt-24 lg:mt-48 mb-24">
        <h1 class="font-medium text-5xl lg:text-9xl">Nesabel Online</h1>
        <div class="my-8 text-center text-3xl">
          Bringing a
          <span class="font-light"> family brick-and-mortar grocery</span> to
          immensely more customers and greater heights.
        </div>
        <div class="my-8 text-center text-2xl">
          Nesabel Corporation, a family-owned retail and wholesale grocery,
          needed to provide its customers a way to buy their goods without
          leaving their homes. At the height of the pandemic, attempts were made
          to make the store accessible to those affected by the lockdown;
          however, the company still needed a more robust, easy-to-navigate, and
          custom online ordering system which has since then blossomed into a
          full-fledged store of its own.
        </div>
      </div>
      <kinesis-container
        event="scroll"
        class="mb-8 flex flex-wrap justify-center"
      >
        <kinesis-element
          class="lg:basis-1/2 rounded-lg drop-shadow-2xl overflow-clip my-4"
          :strength="-20"
          axis="x"
          :maxX="10"
        >
          <img src="/Nesabel.jpg" alt="" />
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
          The company needed a website that was easy to navigate and use, with
          custom features that fit the current needs of the store. This included
          a variety of options in branches, wholesale, or retail, a custom cart
          and many, many more!
          <br />
          <br />
          The front-end was made with Liquid, the official template language by
          Shopify, while the back-end was integrated with Shopify's current
          platform. The design was made in close coordination with the owners.
          After weeks of careful planning, a user-friendly and beautiful shop
          was released to the public, and now serves thousands of orders per
          month!
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
            my-4
          "
          :strength="50"
          axis="x"
        >
          <img src="/Nesabel_Products.jpg" alt="PGH Anesthesiology Admin" />
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
          In order to meet the demands of the company and its customers, we set
          out to build a customer-centric design that made checking out items
          and making sales as easy and efficient as possible. This included a
          color profile that matched the company's current theme, with good
          contrast, and readable font on all devices.
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
            src="/Nesabel_mobile_Products.jpg"
            alt="PGH Anesthesiology Admin Mobile Version"
            class="w-5/12 rounded-lg"
          />
          <img
            src="/Nesabel_mobile_Cart.jpg"
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
          this website as well. The entire site and all pages were designed and
          developed to be able to adapt to all screen sizes, whether it be a
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
  name: "NesabelOnline",
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