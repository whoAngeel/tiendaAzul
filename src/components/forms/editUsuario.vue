<template>
    <form @submit="onSubmit" class="mt-5">
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-nombre">
                    Nombres
                </label>
            </div>
            <div class="md:w-2/3">
                <input class="input max-w-xs w-full" v-bind="nombre" type="text">
                <label class="label">
                    <span class="label-text-alt text-red-400">
                        {{ errors.nombre }}
                    </span>
                </label>
            </div>
        </div>
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-nombre">
                    Apellido
                </label>
            </div>
            <div class="md:w-2/3">
                <input class="input max-w-xs w-full" v-bind="apellido" type="text">
                <label class="label">
                    <span class="label-text-alt text-red-400">
                        {{ errors.apellido }}
                    </span>
                </label>
            </div>
        </div>
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-nombre">
                    E-mail
                </label>
            </div>
            <div class="md:w-2/3">
                <input class="input max-w-xs w-full" v-bind="email" type="text">
                <label class="label">
                    <span class="label-text-alt text-red-400">
                        {{ errors.email }}
                    </span>
                </label>
            </div>
        </div>
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-nombre">
                    Telefono
                </label>
            </div>
            <div class="md:w-2/3">
                <input class="input max-w-xs w-full" v-bind="telefono" type="text">
                <label class="label">
                    <span class="label-text-alt text-red-400">
                        {{ errors.telefono }}
                    </span>
                </label>
            </div>
        </div>
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Rol
                </label>
            </div>
            <div class="md:w-2/3">
                <select class="select select-bordered w-full max-w-xs" v-model="rol">
                    <option disabled value="">Selecciona uno</option>
                    <option>Vendedor</option>
                    <option>Administrador</option>
                    <option>Gerente</option>
                </select>
                <label class="label">
                    <span class="label-text-alt text-red-400">
                        {{ errors.rol }}
                    </span>
                </label>
            </div>
        </div>
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Contraseña
                </label>
            </div>
            <div class="md:w-2/3">
                <input class="input max-w-xs w-full" type="password" v-bind="password" placeholder="**************">
                <label class="label">
                    <span class="label-text-alt text-red-400">
                        {{ errors.password }}
                    </span>
                </label>
            </div>
        </div>


        <div class="form-control mt-6">
            <button class="btn btn-primary" :disabled="isSubmitting">
                <span class="loading loading-bars loading-xs" v-if="isSubmitting"></span>
                <span v-else>Guardar usuario</span>
            </button>
        </div>

    </form>
</template>

<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { ref, onMounted, onBeforeMount } from 'vue'
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { useUsuariosStore } from '../../stores/usuarios'

const emits = defineEmits(['closeModal'])
const props = defineProps(['usuario'])

const $toast = useToast();
const usersStore = useUsuariosStore()

const rol = ref(props.usuario.rol)


const { defineInputBinds, handleSubmit, errors, isSubmitting } = useForm({
    validationSchema: yup.object({
        nombre: yup.string().min(3).required(),
        apellido: yup.string().min(3).required(),
        email: yup.string().email('Invalid Email').required(),
        telefono: yup.number().required(),
        // rol: yup.string().required(),
        password: yup.string().required()
    }),
    initialValues: {
        nombre: props.usuario.nombre,
        apellido: props.usuario.apellido,
        email: props.usuario.email,
        telefono: props.usuario.telefono,
        password: props.usuario.password
    }
})

const nombre = defineInputBinds("nombre")
const apellido = defineInputBinds("apellido")
const email = defineInputBinds("email")
const telefono = defineInputBinds('telefono')
// const rol = defineInputBinds("rol")
const password = defineInputBinds('password')

const onSubmit = handleSubmit((values) => {
    console.log("creando");
    const usuario = { ...values, rol: rol.value };

    usersStore.updateUser(props.usuario.id, usuario)
    emits('closeModal')
})

onMounted(() => {
    console.log("Hola");
})

</script>
