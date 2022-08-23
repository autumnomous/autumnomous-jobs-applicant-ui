import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";
import "../public/assets/css/theme.css";
import "../public/assets/vendor/fontawesome/css/all.min.css";
import jQuery from "jquery";


declare global{
    var jQuery:any;
    var $:any;
}


//global declaration of jquery
globalThis.jQuery = jQuery;
globalThis.$ = jQuery;


const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
