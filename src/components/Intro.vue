<template>
  <div
    class="
      min-h-[50vh]
      justify-center
      text-center text-black
      grid grid-flow-col
      place-content-stretch
      py-4
    "
  >
    <div class="p-4 h-full">
      <div
        class="
          grid grid-flow-col grid-cols-2
          gap-4
          max-w-5xl
          align-middle
          h-full
        "
      >
        <div class="h-auto self-center">
          <span class="font-serif text-xl font-bold italic"
            >Your space, your legacy, your website. </span
          >Websites are for everyone, from large companies to solo
          entrepreneurs, from photographers to physicians. In today’s digital
          age, anyone who is anyone has their identity under the limelight in
          their own personal space online. Stand out. Be different. Rise above
          the competition. Click send me a message and start making your vision
          a reality!
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
              onclick="location.href='/#Contact'"
            >
              Send a message
            </button>
          </div>
        </div>
        <kinesis-container>
          <kinesis-element
            tag="div"
            :strength="10"
            type="depth"
            class="
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