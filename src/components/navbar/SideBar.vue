<template>
    <aside id="logo-sidebar" class="fixed top-0 left-0 z-40  h-screen bg-primary" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto">
            <a href="#" class="flex items-center ps-2.5 mb-5 text-primary-content py-8">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 me-3 sm:h-7" alt="Flowbite Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap ">Tienda Azul</span>
            </a>
            <ul class="space-y-2 font-medium text-primary-content">

                <li>
                    <RouterLink to="/inicio" class="flex btn  btn-primary  ">
                        <font-awesome-icon :icon="['fas', 'house']" />
                        <span class="flex-1 ms-3 whitespace-nowrap">Inicio</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/usuarios" class="flex btn  btn-primary  ">
                        <font-awesome-icon :icon="['fas', 'user-group']" />
                        <span class="flex-1 ms-3 whitespace-nowrap">Usuarios</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/productos" class="flex btn  btn-primary  ">
                        <font-awesome-icon :icon="['fas', 'basket-shopping']" />
                        <span class="flex-1 ms-3 whitespace-nowrap">Productos</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/ventas" class="flex btn  btn-primary  ">
                        <font-awesome-icon :icon="['fas', 'cash-register']" />
                        <span class="flex-1 ms-3 whitespace-nowrap">Ventas</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/proveedores" class="flex btn  btn-primary  ">
                        <font-awesome-icon :icon="['fas', 'truck-moving']" />
                        <span class="flex-1 ms-3 whitespace-nowrap">Proveedores</span>
                    </RouterLink>
                </li>
                <li>
                    <button @click="logout" class="flex btn  btn-primary  ">
                        <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
                        <span class="flex-1 ms-3 whitespace-nowrap">Cerrar Sesión</span>
                    </button>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const logout = () => {
    //TODO logica para cerrar sesion
    router.push("/login")
}

</script>

<style scoped>
li>.router-link-active {
    background-color: #526D82;


}
</style>
