<template>
<<<<<<< HEAD
  <Navbar title="Usuarios" />

  <div class="flex justify-between w-3/4 mx-auto mt-4">
    <button class="btn flex items-center">
      <font-awesome-icon :icon="['fas', 'plus']" />Agregar
    </button>
    <div class="flex">
      <span
        class="inline-flex items-center px-3 text-sm" >
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </span>
      <input
        id="website-admin"
        class="input block flex-1 min-w-0 w-full text-sm"
        placeholder="Buscar"/>
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
          <td>
            9511423658
            <br />
          </td>
          <td>mancha@manchillas.com</td>
          <td>Administradora</td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
        
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
=======
    <Navbar title="Usuarios" />
    <div>
        <div class="overflow-x-auto">
            <table class="table">
                <!-- head -->
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <!-- row 1 -->
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div class="flex items-center gap-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img src="http://placekitten.com/g/300/300" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">Hart Hagerty</div>
                                    <div class="text-sm opacity-50">United States</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Zemlak, Daniel and Leannon
                            <br />
                            <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
                        </td>
                        <td>Purple</td>
                        <th>
                            <button class="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                    <!-- row 2 -->
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div class="flex items-center gap-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img src="http://placekitten.com/g/300/300" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">Brice Swyre</div>
                                    <div class="text-sm opacity-50">China</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Carroll Group
                            <br />
                            <span class="badge badge-ghost badge-sm">Tax Accountant</span>
                        </td>
                        <td>Red</td>
                        <th>
                            <button class="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                    <!-- row 3 -->
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div class="flex items-center gap-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img src="http://placekitten.com/g/300/300" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">Marjy Ferencz</div>
                                    <div class="text-sm opacity-50">Russia</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Rowe-Schoen
                            <br />
                            <span class="badge badge-ghost badge-sm">Office Assistant I</span>
                        </td>
                        <td>Crimson</td>
                        <th>
                            <button class="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                    <!-- row 4 -->
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div class="flex items-center gap-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img src="http://placekitten.com/g/300/300" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">Yancy Tear</div>
                                    <div class="text-sm opacity-50">Brazil</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Wyman-Ledner
                            <br />
                            <span class="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                        </td>
                        <td>Indigo</td>
                        <th>
                            <button class="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                </tbody>
                <!-- foot -->
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </tfoot>

            </table>
        </div>
    </div>
>>>>>>> 4e77177ab3c21b3c88c0ad907038ac38e9d4fe60
</template>

<script setup>
import Navbar from "../components/navbar/Navbar.vue";
</script>
