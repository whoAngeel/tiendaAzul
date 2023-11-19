<template>
    <!-- <Navbar title="Home" /> -->
    <!-- <SideBar /> -->
    <div class="w-screen">
        <SideBar class="w-1/6" />

        <div class="h-screen bg-base-100 w-5/6 fixed right-0">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import SideBar from '../components/navbar/SideBar.vue';
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
const router = useRouter()

onMounted(() => {
    router.push('/inicio')
})

</script>
