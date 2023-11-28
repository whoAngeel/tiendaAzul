import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUsuariosStore = defineStore('usuariosStore', () => {
    const usuarios = ref([
        {
            id: 1,
            nombre: 'Juan Pérez',
            apellido: 'García',
            email: 'juan.perez@example.com',
            telefono: '123456789',
            rol: 'admin',
            contraseña: '123456',
            fechaCreacion: new Date(),
        },
        {
            id: 2,
            nombre: 'María López',
            apellido: 'Sánchez',
            email: 'maria.lopez@example.com',
            telefono: '987654321',
            rol: 'usuario',
            contraseña: '123456',
            fechaCreacion: new Date(),
        },
    ]);

    const getUsuarios = () => {
        return usuarios.value
    }

    return {
        usuarios,
        getUsuarios
    }

})
