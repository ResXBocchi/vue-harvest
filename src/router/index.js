import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Input.vue";
import Results from "../views/Output.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },
  {
    path: "/results",
    name: "Results",
    component: Results,
    props: true,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
