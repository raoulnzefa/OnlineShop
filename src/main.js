import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import { routes } from "./routes/routes";

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode : "history"
})

Vue.use(VueResource);

export const eventBus = new Vue();

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
