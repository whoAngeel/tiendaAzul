<template>
  <Navbar title="Usuarios" />
  <Modal :show="showCreateModal" @close="toggleModal()">
    <template #title>
      <h3 class="text-xl font-bold text-center">Registrar ususario</h3>
    </template>
    <template #closeModal>
      <div class="relative">
        <button
          class="btn btn-sm text-xl hover:text-2xl btn-circle btn-ghost absolute right-1 top-0"
          @click="toggleModal()"
        >
          <FontAwesomeIcon :icon="['fas', 'xmark']" />
        </button>
      </div>
    </template>
    <template #body>
      <!-- TODO aqui debe ir el formulario para crear un producot -->
      <form>formulario</form>
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
      <input
        id="website-admin"
        class="input block flex-1 min-w-0 w-full text-sm"
        placeholder="Buscar"
      />
    </div>
  </div>

  <div class="overflow-x-auto flex justify-center mt-4">
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
        <tr>
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img
                    src="http://placekitten.com/g/300/300"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div class="font-bold">Mancha</div>
              </div>
            </div>
          </td>
          <td>9518112345</td>
          <td>mancha@manchensias.com</td>
          <td>Jefa de jefas</td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
        <tr></tr>
      </tbody>
      <!-- foot -->
      <tfoot>
        <tr>
          <th>Nombre</th>
          <th>Teléfono</th>
          <th>Email</th>
          <th>Rol</th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup>
import Navbar from "../components/navbar/Navbar.vue";
import Modal from "@/components/Modal.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useToggle } from "@vueuse/core";

const [showCreateModal, toggleModal] = useToggle();
</script>
