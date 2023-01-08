<template>
  <div class="grid place-content-center text-black h-fit pt-4 bg-slate-200">
    <div class="grid text-center">
      <div
        class="h-full mt-10 font-sans font-semibold text-3xl"
        data-aos="fade-left"
      >
        <h2>Ready to start your journey? Send me a message below!</h2>
      </div>
      <div class="my-10 max-w-md mx-auto" data-aos="fade-right">
        You can let me know what you need, your budget, and any special
        considerations, and I will get back to you within 1-3 working days with
        a quotation. Or you can just say hi! 👋
      </div>
      <form
        ref="form"
        @submit.prevent="sendEmail"
        class="
          text-left
          grid
          md:grid-rows-4 md:grid-flow-col md:grid-cols-2
          place-content-stretch
          gap-4
          my-4
          mx-4
          md:mx-auto
        "
        data-aos="fade-in"
        data-aos-delay="400"
        data-aos-duration="700"
        data-aos-anchor-placement="bottom bottom"
      >
        <label for="sender_name"
          >Name:
          <input
            type="text"
            class="
              w-full
              form-input
              bg-slate-100
              rounded-md
              border-blue-400
              caret-blue-800
            "
            name="sender_name"
            placeholder="Enter name here..."
            v-model="sender_name"
        /></label>
        <label for="sender_email"
          >E-mail address:
          <input
            type="sender_email"
            v-model="sender_email"
            class="
              w-full
              form-input
              bg-slate-100
              rounded-md
              border-blue-400
              caret-blue-800
            "
            name="email"
            placeholder="Enter email here..."
        /></label>
        <label for="sender_contactnumber"
          >Contact number:
          <input
            type="tel"
            v-model="sender_contactnumber"
            class="
              w-full
              form-input
              bg-slate-100
              rounded-md
              border-blue-400
              caret-blue-800
            "
            name="contactnumber"
            placeholder="Enter number here..."
          />
        </label>
        <label for="message" class="row-span-3"
          >Message:
          <textarea
            name="message"
            id=""
            cols=""
            rows=""
            class="
              align-top
              w-full
              h-[calc(100%-24px)]
              m-0
              form-textarea
              bg-slate-100
              rounded-md
              border-blue-400
              resize-none
              caret-blue-800
            "
            placeholder="Say Hi! 😊"
          ></textarea>
        </label>
        <input
          type="submit"
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
          "
          value="Send"
        />
      </form>
    </div>
    <div
      class="
        w-screen
        bg-black
        text-white/20
        h-8
        text-center
        align-middle
        p-1
        my-auto
      "
    >
      &copy;2022 Websights
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactMe",
  data() {
    return {
      sender_name: "",
      sender_email: "",
      sender_contactnumber: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_fnw0qug",
          "template_ex449ig",
          e.target,
          "Yl112u4wiTHfsHMVn",
          {
            sender_name: this.sender_name,
            sender_email: this.sender_email,
            sender_contactnumber: this.sender_contactnumber,
            message: this.message,
          }
        );
        alert("Email sent!");
        // Reset form field
        this.sender_name = "";
        this.sender_email = "";
        this.sender_contactnumber = "";
        this.message = "";
      } catch (error) {
        console.log({ error });
      }
    },
  },
};
</script>

<style>
</style>