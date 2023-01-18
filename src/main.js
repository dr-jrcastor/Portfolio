import { createApp } from 'vue';
import './index.css';
import VueWriter from "vue-writer";
import VueKinesis from "vue-kinesis";
import router from "./router/index";
// import Particles from "vue3-particles";

import 'aos/dist/aos.css';

import App from './App.vue';

const app = createApp(App);
app.use(VueKinesis);
app.use(VueWriter);
app.use(router);
// app.use(Particles);

app.mount("#app");
