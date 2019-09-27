import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            component: () => import("@/views/Home"),
        },
        {
            name: "login",
            path: "/login",
            component: () => import("@/views/Login")
        },
        {
            name: "registration",
            path: "/registration",
            component: () => import("@/views/Registration")
        }
    ]
});