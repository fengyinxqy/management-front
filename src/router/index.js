import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/index.vue"),
    },
    {
      path: "/dormitoryManage",
      name: "dormitoryManage",
      component: () => import("../views/dormitory-manage/index.vue"),
    },
    {
      path: "/personManage",
      name: "personManage",
      component: () => import("../views/person-manage/index.vue"),
    },
  ],
});

export default router;
