<template>
  <Navbar title="Proveedores" />

  <div class="flex justify-between w-3/4 mx-auto mt-4">
    <button class="btn flex items-center">
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
  <div class="flex justify-between w-3/4 mx-auto mt-4">
    <ProveedorCard> </ProveedorCard>
  </div>
</template>

<script setup>
import Navbar from "../components/navbar/Navbar.vue";
import ProveedorCard from "../components/ProveedorCard.vue";
</script>
