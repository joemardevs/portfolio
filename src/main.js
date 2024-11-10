import "./assets/tailwind.css";
import "aos/dist/aos.css";
import { inject } from "@vercel/analytics";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

inject();

const app = createApp(App);

app.use(router);

app.mount("#app");
