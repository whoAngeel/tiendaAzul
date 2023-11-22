<template>
    <form @submit="onSubmit">
        <div class="space-y-0 bg-white ">
         

        <div class="form-control p-2 ">
            <div class="items-center w-full space-y-0 text-gray-700 md:inline-flex md:space-y-0 ">
                <h2 class="max-w-sm mx-auto md:w-1/3">
                    Nombre
                </h2>
                <div class="max-w-sm mx-auto md:w-2/3 relative ">
                        <input type="text" v-bind="name" pattern="([a-zA-ZáéíóúÁÉÍÓÚ]+\s?){1,2}" required title="Solo se permiten letras" id="user-info-nombre" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Nombre"/>
                </div>
            </div>
            <div class="flex items-center justify-end ">
                <label>
                    <span class="label-text-alt text-opacity-70 text-red-500">{{ errors.name }}</span>
                </label>
            </div>
        </div>

        <div class="form-control p-2 ">
            <div class="items-center w-full space-y-0 text-gray-700 md:inline-flex md:space-y-0">
                <h2 class="max-w-sm mx-auto md:w-1/3">
                    Apellidos
                </h2>
                <div class="max-w-sm mx-auto md:w-2/3 relative">
                        <input type="text" v-bind="lastname" pattern="([a-zA-ZáéíóúÁÉÍÓÚ]+\s?){1,2}" required title="Solo se permiten letras" id="user-info-apellidos" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Apellidos"/>
                </div>
            </div>
            <div class="flex items-center justify-end">
                <label>
                    <span class="label-text-alt text-opacity-70 text-red-500">{{ errors.lastname }}</span>
                </label>
            </div>
        </div>

        <hr>

        <div class="form-control p-2">
            <div class="items-center w-full space-y-0 text-gray-700 md:inline-flex md:space-y-0">
                <h2 class="max-w-sm mx-auto md:w-1/3">
                    Telefono
                </h2>
                <div class="max-w-sm mx-auto md:w-2/3 relative">
                        <input type="phone" maxlength="10" v-bind="phone" pattern="[0-9]{10}" title="Debe contener 10 numeros" id="user-info-telefono" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Telefono"/>
                </div>
            </div>
            <div class="flex items-center justify-end">
                <label>
                    <span class="label-text-alt text-opacity-70 text-red-500">{{ errors.phone }}</span>
                </label>
            </div>
        </div>

        <div class="form-control p-2 ">
            <div class="items-center w-full space-y-0 text-gray-700 md:inline-flex md:space-y-0">
                <h2 class="max-w-sm mx-auto md:w-1/3">
                    Correo Electronico
                </h2>
                <div class="max-w-sm mx-auto md:w-2/3 relative">
                        <input type="email" v-bind="email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required title="example@example.example" id="user-info-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email"/>
                </div>
            </div>
            <div class="flex items-center justify-end">
                <label>
                    <span class="label-text-alt text-opacity-70 text-red-500">{{ errors.email }}</span>
                </label>
            </div>
        </div>
        
        <hr>

        <div class="form-control p-2">
            <div class="items-center w-full space-y-0 text-gray-700 md:inline-flex md:space-y-0">
                <h2 class="max-w-sm mx-auto md:w-1/3">
                    Rol  
                </h2>
                <div class="max-w-sm mx-auto md:w-2/3 relative">
                    <select id="user-info-rol" v-model="rol.value" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-secondary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" disabled>Seleccione un rol</option>
                        <option value="propietario">Propietario</option>
                        <option value="admin">Administrador</option>
                        <option value="gerente">Gerente</option>
                        <option value="almacenista">Almacenista</option>
                        <option value="cajero">Cajero</option>
                    </select>
                </div>
            </div>
            <div class="flex items-center justify-end">
                <label>
                    <span class="label-text-alt text-opacity-70 text-red-500">{{ errors[rol.name] }}</span>
                </label>
            </div>
        </div>

        <hr>

        <div class="form-control p-2">
            <div class="items-center w-full space-y-0 text-gray-700 md:inline-flex md:space-y-0">
                <h2 class="max-w-sm mx-auto md:w-1/3">
                    Contraseña
                </h2>
                <div class="max-w-sm mx-auto md:w-2/3 relative">
                        <input type="password" v-bind="password"  required id="user-info-password" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Contraseña"/>
                </div>
            </div>
            <div class="flex items-center justify-end">
                <label>
                    <span class="label-text-alt text-opacity-70 text-red-500">{{ errors.password }}</span>
                </label>
            </div>
        </div>




                            <div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
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
        email: yup.string().required("El e-mail es requerida"),
        name: yup.string().required("El nombre es requerida"),
        lastname: yup.string().required("El apellido es requerida"),
        phone: yup.string().required("telefono de 10 digitos"),
        rol: yup.string().required("Rol es requerida"),
        password: yup.string().required("La contraseña es requerida")
        
    })
})


const email= defineInputBinds("email");
const name= defineInputBinds("name");
const lastname= defineInputBinds("lastname");
const phone= defineInputBinds("phone");
const rol= defineInputBinds("rol.value");
const password= defineInputBinds("password");

const onSubmit = handleSubmit((values) => {
    ///lo q tenga q hacer con el back
 
});


</script>
