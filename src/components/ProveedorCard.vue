<template>
    <div class="card bg-accent w-70 shadow-xl">
        <div class="card-body">
            <h2 class="card-title">{{ proveedor.nombre }}</h2>
            <!-- <p>Código</p> -->
            <p>{{ proveedor.telefono }}</p>
            <div class="card-actions justify-between">
                <button class="btn btn-sm flex items-center">
                    <font-awesome-icon :icon="['fas', 'pen-to-square']" />Modificar
                </button>
                <button class="btn btn-sm btn-primary flex items-center">
                    <font-awesome-icon :icon="['fas', 'trash']" />Eliminar
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const { proveedor } = defineProps(['proveedor'])

</script>
