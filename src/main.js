import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import 'bootstrap/dist/js/bootstrap.bundle.js'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../public/assets/css/theme.css";
import "../public/assets/vendor/fontawesome/css/all.min.css";
import jQuery from 'jquery'
//global declaration of jquery
global.jQuery = jQuery
global.$ = jQuery

const app = createApp(App);


app.use(router);
router.app = app;

app.use(store);
store.app = app;
app.mount('#app');