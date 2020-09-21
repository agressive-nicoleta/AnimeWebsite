import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./Home.vue";
import Categories from "./Categories.vue";
import SearchPage from "./SearchPage.vue";
import Showpage from "./ShowPage.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/categories", component: Categories },
  { path: "/search", component: SearchPage },
  { path: "/show", component: Showpage }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
