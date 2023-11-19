import { createRouter, createWebHistory } from 'vue-router'
import Home from "./Views/Home.vue"
import Login from "./Views/Login.vue"
import Inicio from "./Views/Inicio.vue"
import Productos from './Views/Productos.vue'
import Usuarios from './Views/Usuarios.vue'
import Ventas from './Views/Ventas.vue'
import Proveedores from './Views/Proveedores.vue'


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
                path: "inicio",
                name: "Inicio",
                component: () => import("./Views/Inicio.vue")
            },
            {
                path: "productos",
                name: "Productos",
                component: Productos
            },
            {
                path: "usuarios",
                name: "Usuarios",
                component: Usuarios
            },
            {
                path: 'ventas',
                name: "Ventas",
                component: Ventas
            },
            {
                path: 'proveedores',
                name: "Proveedores",
                component: Proveedores
            }
        ]
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
