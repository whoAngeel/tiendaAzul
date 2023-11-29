<template>
    <form @submit="onSubmit" class="mt-5">
        <div class="space-y-0 bg-white ">

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-nombre">
                        Nombre
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
            <div class="form-control mt-6 flex justify-center items-center">
                <button class="btn btn-primary w-5/12" :disabled="isSubmitting">
                    <span class="loading loading-bars loading-xs" v-if="isSubmitting"></span>
                    <span v-else>Crear proveedor</span>
                </button>
            </div>

        </div>
    </form>
</template>


<script setup>

import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { useProveedoresStore } from '../../stores/proveedores'

const store = useProveedoresStore()

const emits = defineEmits(['closeModal'])

const { defineInputBinds, handleSubmit, errors, isSubmitting } = useForm({
    validationSchema: yup.object({
        nombre: yup.string().required("El nombre es requerido"),
        telefono: yup.number().required(),
    })
})


const nombre = defineInputBinds("nombre");
const telefono = defineInputBinds("telefono");

const onSubmit = handleSubmit((values) => {
    store.addProveedor(values)
    emits('closeModal')

});


</script>
