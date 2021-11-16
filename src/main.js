import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCookies from 'vue3-cookies'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../public/assets/css/theme.css";
import "../public/assets/vendor/fontawesome/css/all.min.css";

const app = createApp(App);
app.use(router);
router.app = app;

app.use(store);
store.app = app;

app.use(VueCookies,{
    expireTimes: "30d",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None"
});
app.mount('#app');