<template>
    <div ref="modal" v-if="show" class="fixed inset-0 flex items-center justify-center bg-slate-800 z-50 background">
        <div class="bg-white w-auto p-4 rounded-lg shadow-lg sm:w-6/12 lg:w-5/12 md:6/12">
            <slot class="" name="closeModal"></slot>

            <slot name="title"></slot>
            <slot name="body"></slot>
        </div>
    </div>
</template>

<script setup>

import { onMounted, ref, onBeforeUnmount } from 'vue';
const modal = ref(null)

const emits = defineEmits(['close'])

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    }
})

function clickListener(e) {
    if (e.target === modal.value) {
        emits('close')
    }
}
function closeOnEscapeListener(e) {
    if (e.key === 'Escape') {
        emits('close')
    }
}

onMounted(() => {
    window.addEventListener('click', clickListener)
    window.addEventListener('keydown', closeOnEscapeListener)
})

onBeforeUnmount(() => {
    window.removeEventListener('click', clickListener)
    window.removeEventListener('keydown', closeOnEscapeListener)
})
</script>

<style scoped>
.background {
    background-color: rgb(0, 0, 0);
    /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4);
    /* Black w/ opacity */
}
</style>
