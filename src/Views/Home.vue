<template>
    <!-- <Navbar title="Home" /> -->
    <SideBar />
    <div class="w-screen">
        <SideBar class="w-1/6" />

        <div class="h-screen bg-base-100 w-5/6 fixed right-0">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import Navbar from '../components/navbar/Navbar.vue';
import SideBar from '../components/navbar/SideBar.vue';

</script>
