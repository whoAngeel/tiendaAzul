<template>
    <form @submit="onSubmit">
        <div class="space-y-0 bg-white ">
         

        <div class="form-control p-2 ">
            <div class="items-center w-full space-y-0 text-gray-700 md:inline-flex md:space-y-0 ">
                <h2 class="max-w-sm mx-auto md:w-1/3">
                    Nombre
                </h2>
                <div class="max-w-sm mx-auto md:w-2/3 relative ">
                        <input type="text" v-bind="name" pattern="([a-zA-ZáéíóúÁÉÍÓÚ]+\s?){1,2}" required title="Solo se permiten letras" id="user-info-nombre" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-500 opacity-80 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Nombre"/>
                </div>
            </div>
            <div class="flex items-center justify-end ">
                <label>
                    <span class="label-text-alt text-opacity-70 text-red-500">{{ errors.name }}</span>
                </label>
            </div>
        </div>

        <div class="form-control p-2">
            <div class="items-center w-full space-y-0 text-gray-700 md:inline-flex md:space-y-0">
                <h2 class="max-w-sm mx-auto md:w-1/3">
                    Telefono
                </h2>
                <div class="max-w-sm mx-auto md:w-2/3 relative">
                        <input type="phone" maxlength="10" required v-bind="phone" pattern="[0-9]{10}" title="Debe contener 10 numeros" id="user-info-telefono" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-500 opacity-80 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Telefono"/>
                </div>
            </div>
            <div class="flex items-center justify-end">
                <label>
                    <span class="label-text-alt text-opacity-70 text-red-500">{{ errors.phone }}</span>
                </label>
            </div>
        </div>

                            <div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/4">
                                <button class="btn btn-primary" :disabled="isSubmitting">
                        <span class="loading loading-bars loading-xs" v-if="isSubmitting"></span>
                        <span v-else>Registrar</span>
                    </button>
                            </div>
                        </div>
                    </form>
</template>


<script setup>

import { useForm } from 'vee-validate';
import * as yup from 'yup';

const { defineInputBinds, handleSubmit, errors, isSubmitting } = useForm({
    validationSchema: yup.object({        
        name: yup.string().required("El nombre es requerida"),        
        phone: yup.string().required("Se nececita un Telefono de 10 digitos"),
        
        
    })
})



const name= defineInputBinds("name");
const phone= defineInputBinds("phone");

const onSubmit = handleSubmit((values) => {
    ///lo q tenga q hacer ya validado
    
 
});


</script>
