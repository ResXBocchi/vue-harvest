import { createRouter, createWebHistory } from "vue-router";
import Input from "../views/Input.vue";
import Output from "../views/Output.vue";

const routes = [
  {
    path: "/",
    name: "Input",
    component: Input,
    props: true
  },
  {
    path: "/output",
    name: "Output",
    component: Output,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
