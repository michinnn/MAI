
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

const isMenuShown = ref(false);

</script>

<template>

<div class="w-full min-h-screen">
  <!-- NAVIGATION BAR -->
  <nav class="relative flex fixed top-0 left-0 right-0 justify-between h-16 items-center lg:px-32 px-10 rounded-b-md bg-slate-100/70 shadow-md z-50">
    <div>
      <img src="./assets/images/logo2.png" alt="logo" class="lg:hidden h-10 cursor-pointer lg:cursor-default" 
      @click="isMenuShown = !isMenuShown">
      <img src="./assets/images/logo2.png" alt="logo" class="lg:block hidden h-10 cursor-pointer lg:cursor-default">
    </div>
    <div class="lg:flex space-x-10 font-dmsans font-semibold text-pinkish gap-10 hidden">
      <a :href="`${base}#app`">HOME</a>
      <a :href="`${base}#portfolio`">PORTFOLIO</a>
      <RouterLink @click="scrollToTop()" to="/about">ABOUT</RouterLink>
      <div class="cursor-pointer" @click="isContactShown = !isContactShown">CONTACT</div>
    </div>
    <Transition name="slide-fade">
    <div v-if="isMenuShown" class="flex flex-col absolute top-16 left-0 bg-slate-100/70 font-dmsans font-semibold text-pinkish gap-3 px-10 py-5 shadow-md rounded">
      <a :href="`${base}#app`">HOME</a>
      <a :href="`${base}#portfolio`">PORTFOLIO</a>
      <RouterLink @click="scrollToTop()" to="/about">ABOUT</RouterLink>
      <div class="cursor-pointer" @click="isContactShown = !isContactShown">CONTACT</div>
    </div>
  </Transition>
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