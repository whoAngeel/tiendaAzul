<template>
    <Navbar title="Ventas" />
    
    <div class="flex justify-end w-3/4 mx-auto mt-4">
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
          <th>Número de venta</th>
          <th>Fecha</th>
          <th>Subtotal</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr>
          <td>12345</td>
          <td>
              <div>
                <div class="font-bold">dd-mm-yyyy</div>
              </div>
          </td>
          <td>$0.00</td>
          <td>$0.00</td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
      </tbody>
      <!-- foot -->
      <tfoot>
        <tr>
          <th>Número de venta</th>
          <th>Fecha</th>
          <th>Subtotal</th>
          <th>Total</th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup>
import Navbar from '../components/navbar/Navbar.vue';

</script>
