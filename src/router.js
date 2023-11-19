import { createRouter, createWebHistory } from 'vue-router'
import Home from "./Views/Home.vue"
import Login from "./Views/Login.vue"


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/login",
        name: "login",
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export { router }
