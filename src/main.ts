import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import { createPinia } from "pinia";
import VWave from "v-wave";

const pinia = createPinia();

const app = createApp(App);

app.use(VWave, {
    color: "#c3c3c3",
    initialOpacity: 0.2,
    easing: "ease-in",
});

app.use(pinia).use(router).mount("#app");
