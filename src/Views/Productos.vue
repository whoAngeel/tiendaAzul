<template>
    <Navbar title="Productos" />

    <Modal :show="showCreateModal">

        <template #title>
            <h3 class="text-xl font-bold text-center">Crear nuevo producto</h3>
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
            <!-- TODO aqui debe ir el formulario para crear un producot -->
            <CreateProduct />
        </template>
    </Modal>

    <div class="flex justify-between w-3/4 mx-auto mt-4">
        <button class="btn flex items-center" @click="toggleModal()">
            <font-awesome-icon :icon="['fas', 'plus']" />Agregar
        </button>
        <button class="btn flex items-center">
            <font-awesome-icon :icon="['fas', 'bag-shopping']" />Orden de compra
        </button>
        <div class="flex">
            <span class="inline-flex items-center px-3 text-sm">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            </span>
            <input id="website-admin" class="input block flex-1 min-w-0 w-full text-sm" placeholder="Buscar" />
        </div>
    </div>

    <div class="overflow-x-auto flex justify-center mt-4">
        <table class="table w-3/4">
            <!-- head -->
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Precio compra</th>
                    <th>Precio venta</th>
                    <th>Existencias</th>
                    <th>Caducidad</th>
                    <th>Proveedor</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <!-- row 1 -->
                <tr>
                    <td>12345</td>
                    <td>
                        <div class="flex items-center gap-3">
                            <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                    <img src="http://placekitten.com/g/300/300" alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold">Leche</div>
                            </div>
                        </div>
                    </td>
                    <td>$0.00</td>
                    <td>$0.00</td>
                    <td>5</td>
                    <td>dd-mm-yyyy</td>
                    <td>Mancha S.A.</td>
                    <th>
                        <button class="btn btn-ghost btn-xs">details</button>
                    </th>
                </tr>
            </tbody>
            <!-- foot -->
            <tfoot>
                <tr>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Precio compra</th>
                    <th>Precio venta</th>
                    <th>Existencias</th>
                    <th>Caducidad</th>
                    <th>Proveedor</th>
                    <th></th>
                </tr>
            </tfoot>
        </table>
    </div>

    <!--  Modal -->
</template>

<script setup>
import Navbar from "../components/navbar/Navbar.vue";
import Modal from '@/components/Modal.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useToggle } from '@vueuse/core'
import CreateProduct from "../components/forms/CreateProduct.vue";

const [showCreateModal, toggleModal] = useToggle()


</script>
