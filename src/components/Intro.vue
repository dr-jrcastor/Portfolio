<template>
  <div
    class="
      min-h-[50vh]
      justify-center
      text-center text-black
      grid grid-flow-col
      place-content-stretch
      py-4
      max-w-screen-2xl
      mx-auto
    "
  >
    <div class="p-4 h-full">
      <div
        class="
          grid grid-flow-col grid-cols-2
          gap-4
          lg:gap-16
          max-w-5xl
          align-middle
          h-full
        "
      >
        <div class="col-span-2 md:col-span-1 h-auto self-center">
          <div class="font-serif text-xl font-bold italic mb-1">
            Your space, your legacy, your website.
          </div>
          Websites are for everyone, from large companies to solo entrepreneurs,
          from photographers to physicians. In today’s digital age, anyone who
          is anyone has their identity under the limelight in their own personal
          space online. Stand out. Be different. Rise above the competition.
          Click below and start making your vision a reality!
          <div>
            <button
              class="
                justify-self-end
                rounded
                bg-blue-800/80
                text-white/80
                cursor-pointer
                w-fit
                h-fit
                px-4
                py-2
                transition
                ease-in-out
                delay-100
                hover:scale-110 hover:bg-blue-800 hover:text-white
                duration-200
                mt-4
              "
              onclick="location.href='/#Form'"
            >
              Let's start with a "hello"!
            </button>
          </div>
        </div>
        <kinesis-container>
          <kinesis-element
            tag="div"
            :strength="10"
            type="depth"
            class="
              col-span-1
              md:col-span-2
              w-full
              h-full
              bg-gray-600
              bg-[url('https://source.unsplash.com/random/900x300/?happy')]
              bg-cover bg-no-repeat bg-center
              drop-shadow-2xl
            "
          >
          </kinesis-element>
        </kinesis-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",
};
</script>

<style>
</style>