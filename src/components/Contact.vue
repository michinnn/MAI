<script setup>
    const props = defineProps(['isContactShown']);
    import { Icon } from '@iconify/vue';
</script>

<template>
    <div v-if="isContactShown" class="w-full">
        <nav class="flex bg-slate-100/80 fixed top-16 right-0 left-0 h-16 px-32 rounded-b-md shadow-md z-40">
            <div class="flex h-full w-full justify-end items-center gap-10">
                <p class="flex text-pinkish gap-2">
                    <Icon icon="gridicons:phone" class="w-6 h-6" />
                    <span>09682903857</span>
                </p>
                <p class="flex text-pinkish gap-2">
                    <Icon icon="mdi:gmail" class="h-6 w-6"/>
                    <span>maiocampo.sanchez@gmail.com</span>
                </p>
            </div>
        </nav>
    </div>
</template>