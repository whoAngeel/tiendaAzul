<template>
    <form @submit="onSubmit" class="mt-5">
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-nombre">
                    Nombre
                </label>
            </div>
            <div class="md:w-2/3">
                <input class="input max-w-xs w-full" v-bind="Nombre" type="text">
                <label class="label">
                    <span class="label-text-alt text-red-400">
                        {{ errors.Nombre }}
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
                <input class="input max-w-xs w-full" v-bind="Apellido" type="text">
                <label class="label">
                    <span class="label-text-alt text-red-400">
                        {{ errors.Apellido }}
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
                <input class="input max-w-xs w-full" v-bind="Email" type="text">
                <label class="label">
                    <span class="label-text-alt text-red-400">
                        {{ errors.Email }}
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
                <input class="input max-w-xs w-full" v-bind="Telefono" type="text">
                <label class="label">
                    <span class="label-text-alt text-red-400">
                        {{ errors.Telefono }}
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
                <select class="select select-bordered w-full max-w-xs" v-model="Rol" id="Rol">
                    <option disabled value="">Selecciona uno</option>
                    <option>Vendedor</option>
                    <option>Administrador</option>
                    <option>Gerente</option>
                </select>
                <label class="label">
                    <span class="label-text-alt text-red-400">
                        {{ errors.Rol }}
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
                <input class="input max-w-xs w-full" type="password" v-bind="Contraseña" placeholder="**************">
                <label class="label">
                    <span class="label-text-alt text-red-400">
                        {{ errors.Contraseña }}
                    </span>
                </label>
            </div>
        </div>


        <div class="form-control mt-6">
            <button class="btn btn-primary" :disabled="isSubmitting">
                <span class="loading loading-bars loading-xs" v-if="isSubmitting"></span>
                <span v-else>Crear usuario</span>
            </button>
        </div>

    </form>
</template>

<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { useUsuariosStore } from '../../stores/usuarios'

const usersStore = useUsuariosStore()

const rol = ref('')

const emits = defineEmits(['closeModal'])

const { defineInputBinds, handleSubmit, errors, isSubmitting } = useForm({
    validationSchema: yup.object({
        Nombre: yup.string().min(3).required(),
        Apellido: yup.string().min(3).required(),
        Email: yup.string().email('Invalid Email').required(),
        Telefono: yup.number().required(),
        // rol: yup.string().required(),
        Contraseña: yup.string().required()
    })
})

const Nombre = defineInputBinds("Nombre")
const Apellido = defineInputBinds("Apellido")
const Email = defineInputBinds("Email")
const Telefono = defineInputBinds('Telefono')
//const Rol = defineInputBinds("Rol")
const Contraseña = defineInputBinds('Contraseña')

const onSubmit = handleSubmit((values) => {
    console.log("creando");
    const usuario = { ...values, Rol: Rol.value};
    //alert(usuario)
    usersStore.addUser(usuario)
    emits('closeModal')
})
</script>
