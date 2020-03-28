import Vue from "vue";
import VueRouter from "vue-router";

import Index from "@/views/Index";
import ProjectList from "@/views/ProjectList";
import Project from "@/views/Project";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Index,
    children: [
      {
        path: "",
        name: "allProjects",
        component: ProjectList
      },
      {
        path: "/project/:projectId",
        name: "singleProject",
        component: Project,
        props: true
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
