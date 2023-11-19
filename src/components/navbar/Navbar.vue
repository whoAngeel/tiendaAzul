<template>
    <div class="navbar bg-primary">

        <div class="flex-1 ml-4">
            <span class="text-2xl font-semibold text-base-100">{{ title }}</span>

        </div>
        <div class="flex-none ">
            <div class="dropdown dropdown-end ">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img alt="Tailwind CSS Navbar component" src="http://placekitten.com/g/300/300" />
                    </div>
                </label>

                <ul tabindex="0"
                    class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52 ">

                    <span class="text-center font-medium my-4 -mb-4">{{ username }}</span>
                    <div class="divider "></div>
                    <li class="-mt-4">
                        <!-- <a>
                            Perfil
                        </a> -->
                    </li>
                    <li><button @click="logout">Cerrar Sesión</button></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['title'])
const username = ref("mancha")

import { useRouter } from 'vue-router'
const router = useRouter()

const logout = () => {
    //TODO logica para cerrar sesion
    router.push("/login")
}
</script>

<style scoped>
</style>
