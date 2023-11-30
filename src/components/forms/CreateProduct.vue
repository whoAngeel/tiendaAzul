<template>
    <form @submit="onSubmit" class="mt-5">
        <div class="space-y-0 bg-white ">


            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-nombre">
                        Nombre del Producto
                    </label>
                </div>
                <div class="md:w-2/3 ">
                    <input type="text" v-bind="name" pattern="^[^\s]+" required title="Solo se permiten letras"
                        id="producto-nombre" class=" input max-w-xs w-full" placeholder="Nombre" />

                    <label>
                        <span class="label-text-alt text-red-400">
                            {{ errors.name }}
                        </span>
                    </label>
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-nombre">
                        Proveedor
                    </label>
                </div>
                    <div class="md:w-2/3">
                        <input type="text" v-bind="proveedor" required title="Solo se permiten letras"
                            id="producto-proveedor"
                            class="input max-w-xs w-full"
                            placeholder="Proveedor id" />
                    <label>
                        <span class="label-text-alt text-red-400">
                            {{ errors.proveedor }}
                        </span>
                    </label>
                </div>
            </div>
            <div class="form-control p-4 mt-6 flex justify-center items-center">
                <button class="btn btn-primary w-5/12" :disabled="isSubmitting">
                    <span class="loading loading-bars loading-xs" v-if="isSubmitting"></span>
                    <span v-else>Crear producto</span>
                </button>
            </div>

        </div>
    </form>
</template>


<script setup>

import { useForm } from 'vee-validate';
import * as yup from 'yup';
import Modal from '../Modal.vue';

const { defineInputBinds, handleSubmit, errors, isSubmitting } = useForm({
    validationSchema: yup.object({
        name: yup.string().required("El nombre es requerido"),
        proveedor: yup.string().required("El proveedor es requerido"),


    })
})




const name = defineInputBinds("name");
const proveedor = defineInputBinds("proveedor");

const onSubmit = handleSubmit((values) => {
    ///lo q tenga q hacer con el back
    this.$emit('toggleModal()');
});


</script>
