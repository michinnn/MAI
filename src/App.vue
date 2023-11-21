
<script setup>
import Contact from './components/Contact.vue';
import About from './components/About.vue';

import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';

const isContactShown = ref(false);

const scrollToTop = () =>{
    window.scrollTo(0,0);
  }

const base = import.meta.env.BASE_URL;
</script>

<template>

<div class="w-full min-h-screen">
  <!-- NAVIGATION BAR -->
  <nav class="flex fixed top-0 left-0 right-0 justify-between h-16 items-center px-32 rounded-b-md bg-slate-100/70 shadow-md z-50">
    <div>
      <img src="./assets/images/logo2.png" alt="logo" class="h-10">
    </div>
    <div class="flex space-x-10 font-dmsans font-semibold text-pinkish gap-10">
      <a :href="`${base}#app`">HOME</a>
      <a :href="`${base}#portfolio`">PORTFOLIO</a>
      <RouterLink @click="scrollToTop()" to="/about">ABOUT</RouterLink>
      <div class="cursor-pointer" @click="isContactShown = !isContactShown">CONTACT</div>
    </div>
  </nav>
<!-- END OF NAVIGATION BAR -->

  <Transition name="slide-fade">
    <Contact :isContactShown="isContactShown"/>
  </Transition>

  <RouterView/>

</div>
</template>

<style>
html{
  scroll-behavior: smooth;
}

.slide-fade-enter-active {
  transition: all 200ms cubic-bezier(0.75, 0, 1, 1);
}

.slide-fade-leave-active {
  transition: all 200ms cubic-bezier(0.215, 0.61, 0.355, 1);
}

.slide-fade-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>