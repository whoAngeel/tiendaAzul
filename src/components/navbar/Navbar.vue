<template>
    <div class="navbar bg-primary">

        <div class="flex-1">
            <span class="text-2xl font-semibold text-base-100">{{ title }}</span>

        </div>
        <div class="flex-none">
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img alt="Tailwind CSS Navbar component" src="http://placekitten.com/g/300/300" />
                    </div>
                </label>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <ThemeController />
                    </li>
                    <li><a>{{ username }}</a></li>
                    <li>
                        <a class="justify-between">
                            Perfil
                        </a>
                    </li>
                    <li><a>Cerrar Sesión</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ThemeController from '../ThemeController.vue'

const props = defineProps(['title'])
const username = ref("mancha")
</script>
