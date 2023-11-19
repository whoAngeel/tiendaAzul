<template>
    <div class="min-h-screen bg-base-200 flex items-center justify-center">
        <div class="card shrink-0 w-2/4 max-w-sm shadow-2xl bg-base-100">
            <form @submit="onSubmit" class="card-body">
                <h2 class="text-center text-2xl font-bold">Iniciar sesión</h2>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text text-lg font-medium">Usuario:</span>
                    </label>
                    <input type="text" placeholder="Usuario" v-bind="username" class="input input-bordered" />
                    <label class="label">
                        <span class="label-text-alt text-error">{{ errors.username }}</span>
                    </label>
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text text-lg font-medium">Contraseña: </span>
                    </label>
                    <input type="password" placeholder="Contraseña" v-bind="password" class="input input-bordered" />
                    <label class="label">
                        <span class="label-text-alt text-error">{{ errors.password }}</span>
                    </label>
                    <!-- <label class="label">
                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
              </label> -->
                </div>
                <div class="form-control mt-6">
                    <button class="btn btn-primary" :disabled="isSubmitting">
                        <span class="loading loading-bars loading-xs" v-if="isSubmitting"></span>
                        <span v-else>Iniciar sesión</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const { defineInputBinds, handleSubmit, errors, isSubmitting } = useForm({
    validationSchema: yup.object({
        username: yup.string().min(3, "Al menos tres caracteres").required("El username es requerido"), // dentro de los () de cada validacion puede tener el mensaje de error
        password: yup.string().required("La contraseña es requerida")
    })
})

const username = defineInputBinds("username")
const password = defineInputBinds('password')

const onSubmit = handleSubmit((values) => {
    console.log('login');
    console.log(values); // send data to API

    //TODO aqui va el login con el backend
    return new Promise(resolve => { //TODO quitar esto cuando ya este el listo el backend
        setTimeout(() => {
            console.log('Submitted', JSON.stringify(values, null, 2));
            resolve();
        }, 2000);
    });
});
</script>
