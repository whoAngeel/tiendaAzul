import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const $toast = useToast();

export const useUsuariosStore = defineStore('usuariosStore', () => {
    let currentuserId = 2
    const usuarios = [
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
    ];

    const getUsuarios = () => {
        return usuarios
    }

    const addUser = (user) => {
        currentuserId++
        user.id = currentuserId
        usuarios.push(user)
        $toast.success('Usuario agregado')
    }

    const deleteUser = (id) => {
        const users = usuarios.filter(user => user.id != id)
        usuarios = users
        $toast.success("USuario eliminado")
    }

    const getUserById = (id) => {
        const user = usuarios.find(user => user.id === id)
        return user
    }

    const updateUser = (id, changes) => {
        const userIndex = usuarios.findIndex((user) => user.id === id)
        if (userIndex === -1) {
            $toast.error("Usuario no encontrado")
            return
        } // usuario no encontrado
        const updateUser = Object.assign({}, usuarios[userIndex], changes)
        usuarios[userIndex] = updateUser
        $toast.success("Usuario actualizado")
    }

    return {
        usuarios,
        getUsuarios,
        addUser,
        deleteUser,
        getUserById,
        updateUser
    }

})
