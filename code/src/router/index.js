import { createWebHistory, createRouter } from "vue-router";
import HomeView from "../../src/views/HomeView.vue";
import LoginView from "../../src/views/LoginView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/login", component: LoginView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
