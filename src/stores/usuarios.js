import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const $toast = useToast();

export const useUsuariosStore = defineStore('usuariosStore', () => {
    let currentuserId = 2
    const usuarios = ref([
        {
            id: 1,
            nombre: 'Juan',
            apellido: 'García',
            email: 'juan.perez@example.com',
            telefono: '123456789',
            rol: 'Vendedor',
            password: '123456',
        },
        {
            id: 2,
            nombre: 'María',
            apellido: 'Sánchez',
            email: 'maria.lopez@example.com',
            telefono: '987654321',
            rol: 'Administrador',
            password: '123456',
        },
    ]);

    const getUsuarios = () => {
        return usuarios.value
    }

    const addUser = (user) => {
        currentuserId++
        user.id = currentuserId
        usuarios.value.push(user)
        $toast.success('Usuario agregado')
    }

    const deleteUser = (id) => {
        const users = usuarios.value.filter(user => user.id != id)
        usuarios.value = users
        $toast.success("USuario eliminado")
    }

    return {
        usuarios,
        getUsuarios,
        addUser,
        deleteUser
    }

})
