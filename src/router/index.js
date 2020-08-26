import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import DemoIndex from "../views/demo/index.vue";

import HomeDemo from "../views/demo/Home.vue";
import AlertDemo from "../views/demo/components/Alert.vue";
import HomeDemoPug from "../views/demo/pug/Home.vue";
import AlertDemoPug from "../views/demo/pug/components/Alert.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/demo",
    name: "Home",
    component: DemoIndex,
    children: [
      {
        path: "/demo/",
        name: "HomeDemo",
        component: HomeDemo,
      },
      {
        path: "/demo/pug",
        name: "HomeDemo",
        component: DemoIndex,
        children: [
          {
            path: "/demo/pug/",
            name: "HomeDemo",
            component: HomeDemoPug,
          },
          {
            path: "/demo/pug/alert",
            name: "AlertDemoPug",
            component: AlertDemoPug,
          },
        ],
      },
      {
        path: "/demo/alert",
        name: "AlertDemoPug",
        component: AlertDemo,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
