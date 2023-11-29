import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const $toast = useToast();

export const useProveedoresStore = defineStore('proveedores', () => {
    let currentProviderId = 2;
    const proveedores = [
        {
            id: 1,
            nombre: 'Sigma',
            telefono: '123456789',
        },
        {
            id: 2,
            nombre: 'Proveedor 2',
            telefono: '987654321',
        }, {
            id: 3,
            nombre: "Pelusa",
            telefono: "913415512"
        }
    ];

    const getProveedores = () => {
        return proveedores;
    }
    const addProveedor = (proveedor) => {
        currentProviderId++
        proveedor.id = currentProviderId
        proveedores.push(proveedor)
        $toast.success("Proveedor agregado correctamente")
    }

    const deleteProveedor = (id) => {
        const indiceProveedor = proveedores.findIndex((prov) => prov.id === id)
        if (indiceProveedor !== -1) {
            proveedores.splice(indiceProveedor, 1);
        }
        $toast.success("Proveedor eliminado correctamente")
    }

    const getProveedorById = (id) => {
        const prov = proveedores.find(prov => prov.id === id)
        return prov
    }
    const updateProveedor = (id, changes) => {
        const index = proveedores.findIndex(prov => prov.id === id)
        if (index === -1) {
            $toast.error("Proveedor no encontrado")
            return
        }
        const updatedProveedor = Object.assign({}, proveedores[index], changes)
        proveedores[index] = updatedProveedor
        $toast.success("Proveedor actualizado")
    }

    return {
        proveedores,
        getProveedores,
        addProveedor,
        deleteProveedor,
        getProveedorById,
        updateProveedor
    }
})
