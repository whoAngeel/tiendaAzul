<template>
    <aside id="logo-sidebar" class="fixed top-0 left-0 z-40  h-screen  bg-primary" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto">
            <a href="#" class="flex items-center ps-2.5 mb-5 text-primary-content py-8">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 me-3 sm:h-7" alt="Flowbite Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap ">Tienda Azul</span>
            </a>
            <ul class="space-y-2 font-medium text-primary-content">

                <li>
                    <a href="#" class="flex btn  btn-primary ">
                        <font-awesome-icon :icon="['fas', 'house']" />
                        <span class="flex-1 ms-3 whitespace-nowrap">Inicio</span>

                    </a>
                </li>
                <li>
                    <a href="#" class="flex btn  btn-primary ">
                        <font-awesome-icon :icon="['fas', 'user-group']" />
                        <span class="flex-1 ms-3 whitespace-nowrap">Usuarios</span>

                    </a>
                </li>
                <li>
                    <a href="#" class="flex btn  btn-primary ">
                        <svg class="flex-shrink-0 w-5 h-5 transition duration-7" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path
                                d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">Productos</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex btn  btn-primary ">
                        <svg class="flex-shrink-0 w-5 h-5 transition duration-7" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path
                                d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
                    </a>
                </li>
                <li>
                    <RouterLink to="/login" class="flex btn  btn-primary  ">
                        <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
                        <span class="flex-1 ms-3 whitespace-nowrap">Cerrar Sesión</span>
                    </RouterLink>
                </li>

            </ul>
        </div>
    </aside>
</template>
