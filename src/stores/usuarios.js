import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import axios from 'axios';

const $toast = useToast();

export const useUsuariosStore = defineStore('usuariosStore', () => {

    var usuarios= [];

    const getUsuarios =  () => {
            axios
              .get('http://localhost:8000/api/Usuarios')
              .then(response => (usuarios = response.data))
      return usuarios
    }

    const addUser = (user) => {
        
        axios.post('http://localhost:8000/api/Usuarios',user).then(response=>(
            $toast.success('Usuario agregado')
            )).catch(error => {
                alert(error)
          })
        usuarios.push(user)
        //$toast.success('Usuario agregado')
    }

    const deleteUser = (id) => {///no existe el metodo
        const índiceUsuario = usuarios.findIndex((usuario) => usuario.id === id);

        if (índiceUsuario !== -1) {
            usuarios.splice(índiceUsuario, 1);
            axios.delete('http://localhost:8000/api/Usuarios/'+id)
            .then(response => {
                $toast.success("Usuario eliminado")
            })
            .catch(error => {
              console.log(error);
              alert(error)
            });
        }
        // usuarios = users
        //$toast.success("Usuario eliminado")
    }

    const getUserById = (id) => {
        var user = usuarios.find(user => user.id === id)
        //alert(user)
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
