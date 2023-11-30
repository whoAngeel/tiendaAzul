<template>
    <Navbar title="Usuarios" />
    <Modal :show="showCreateModal">
        <template #title>
            <h3 class="text-xl font-bold text-center">Registrar usuario</h3>
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
            <CrearUsuario @closeModal="toggleModal()" />
        </template>
    </Modal>

    <Modal :show="showEditModal">
        <template #title>
            <h3 class="text-xl font-bold text-center">Editar usuario</h3>
        </template>
        <template #closeModal>
            <div class="relative">
                <button class="btn btn-sm text-xl hover:text-2xl btn-circle btn-ghost absolute right-1 top-0"
                    @click="toggleModalEdit()">
                    <FontAwesomeIcon :icon="['fas', 'xmark']" />
                </button>
            </div>
        </template>
        <template #body>
            <EditUsuario @closeModal="toggleModalEdit()" :usuario="usuario" />
        </template>
    </Modal>

    <Modal :show="showDeleteModal">
        <template #title>
            <h3 class="text-xl font-bold text-center">Confirmar eliminar usuario</h3>
        </template>
        <template #closeModal>
            <div class="relative">
                <button class="btn btn-sm text-xl hover:text-2xl btn-circle btn-ghost absolute right-1 top-0"
                    @click="toggleModalDelete()">
                    <FontAwesomeIcon :icon="['fas', 'xmark']" />
                </button>
            </div>
        </template>
        <template #body>
            <BorrarUsuario @closeModal="toggleModalDelete()" :usuario="usuario" />
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

    <div>
        <div class="text-3xl font-bold flex items-center justify-center content-center h-full mt-10"
            v-if="usuarios.length === 0">
            No se encuentran usuarios
        </div>
        <div v-else class="overflow-x-auto flex justify-center mt-4">
            <table class="table w-3/4">
                <!-- head -->
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Teléfono</th>
                        <th>Email</th>
                        <th>Rol</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <!-- row 1 -->
                    <tr v-for="user in usuarios" :key="user.id">
                        <td>
                            <div class="flex items-center gap-3">
                                <div>
                                    <div class="font-bold">{{ user.Nombre }} {{ user.Apellido }}</div>
                                </div>
                            </div>
                        </td>
                        <td>{{ user.Telefono }}</td>
                        <td>{{ user.Email }}</td>
                        <td>{{ user.Rol }}</td>
                        <th class="">
                            <button class="btn btn-xs btn-info" @click="seleccionarUsuario(user.id)">Editar</button>
                        </th>
                        <th>
                            <button class="btn btn-xs bg-red-500 text-slate-200"
                                @click="seleccionarBorrar(user.id)">Borrar</button>
                        </th>
                    </tr>
                    <tr></tr>
                </tbody>
                <!-- foot -->
                <!-- <tfoot>
                <tr>
                    <th>Nombre</th>
                    <th>Teléfono</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th></th>
                </tr>
            </tfoot> -->
            </table>
        </div>
    </div>
</template>

<script setup>
import Navbar from "../components/navbar/Navbar.vue";
import Modal from "@/components/Modal.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useToggle } from "@vueuse/core";
import CreateUser from "../components/forms/crearUsuario.vue";
import { useUsuariosStore } from '../stores/usuarios'
import EditUsuario from "../components/forms/editUsuario.vue";
import { computed, ref, toRef } from 'vue'
import BorrarUsuario from "../components/forms/BorrarUsuario.vue";
import CrearUsuario from "../components/forms/crearUsuario.vue";

const usersStore = useUsuariosStore()

const usuarios = usersStore.getUsuarios();
const usuario = ref({})

const [showCreateModal, toggleModal] = useToggle();
const [showEditModal, toggleModalEdit] = useToggle();
const [showDeleteModal, toggleModalDelete] = useToggle()

const seleccionarUsuario = (id) => {
    const selectedUser = usersStore.getUserById(id)
    toggleModalEdit()
    // console.log(selectedUser);
    usuario.value = selectedUser
}

const seleccionarBorrar = (id) => {
    usuario.value = usersStore.getUserById(id)
    //alert(usuario.value)
    toggleModalDelete()
}

</script>
