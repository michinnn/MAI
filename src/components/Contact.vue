<script setup>
    const props = defineProps(['isContactShown']);
    import { Icon } from '@iconify/vue';
</script>

<template>
    <div v-if="isContactShown" class="w-full">
        <nav class="bg-slate-100/80 absolute right-0 lg:left-0 lg:h-16 lg:px-32 px-10 rounded-b-md shadow-md z-40">
            <div class="flex lg:flex-row flex-col lg:h-full lg:w-full lg:justify-end lg:items-center items-end lg:gap-10 py-2 justify-center">
                <p class="flex items-center text-pinkish gap-2">
                    <Icon icon="mdi:gmail" class="lg:h-6 h-5 Lg:w-6 w-5"/>
                    <span>maiocampo.sanchez@gmail.com</span>
                </p>
                <a href="https://www.facebook.com/Mai6131" class="flex text-pinkish gap-2 items-center" target="_blank">
                    <Icon icon="uil:facebook" class="lg:w-6 w-5 lg:h-6 h-5" />
                    <span>Andrhea Ivhon Ocampo</span>
                </a>
            </div>
        </nav>
    </div>
</template>