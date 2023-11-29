<template>
    <Navbar title="Proveedores" />
    <Modal :show="showCreateModal">
        <template #title>
            <h3 class="text-xl font-bold text-center">Registrar proveedor</h3>
        </template>
        <template #closeModal>
            <div class="relative">
                <button class="btn btn-sm text-xl hover:text-2xl btn-circle btn-ghost absolute right-1 top-0"
                    @click="toggleModal()">
                    <FontAwesomeIcon :icon="['fas', 'xmark']" />
                </button>
            </div>
        </template>
        <template #body>
            <CreateProveedor @closeModal="toggleModal()" />

        </template>
    </Modal>

    <div class="flex justify-between w-3/4 mx-auto mt-4">
        <button class="btn flex items-center" @click="toggleModal()">
            <font-awesome-icon :icon="['fas', 'plus']" />Agregar
        </button>
        <div class="flex">
            <span class="inline-flex items-center px-3 text-sm">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            </span>
            <input id="website-admin" class="input block flex-1 min-w-0 w-full text-sm" placeholder="Buscar" />
        </div>
    </div>
    <div class="flex flex-wrap justify-around mt-8 w-full">
        <div class="" v-for="proveedor in proveedores" :key="proveedor.id">
            <ProveedorCard :proveedor="proveedor"></ProveedorCard>
        </div>
    </div>
</template>

<script setup>
import Navbar from "../components/navbar/Navbar.vue";
import ProveedorCard from "../components/ProveedorCard.vue";
import Modal from "@/components/Modal.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useToggle } from "@vueuse/core";
import CreateProveedor from "../components/forms/CreateProveedor.vue";
import { useProveedoresStore } from '../stores/proveedores'

const store = useProveedoresStore();

const [showCreateModal, toggleModal] = useToggle();

const proveedores = store.getProveedores()
</script>
