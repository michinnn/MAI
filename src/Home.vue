<script setup>
    import Portfolio from './components/Portfolio.vue';
</script>

<template>
    <div>
          <!-- START OF BODY -->
  <div id="app" class="flex relative w-full min-h-screen items-center justify-between px-32">

<!-- START OF MAPLE -->

<div style="background-image: url(maple.png); background-repeat: no-repeat;" class="h-[50vh] w-[52vw] absolute right-0 lg:top-0 -top-24"> </div>
<div style="background-image: url(maple2.png); background-repeat: no-repeat; background-size: 100%;" class="h-1/2 w-[41vw] absolute left-0 lg:bottom-0 -bottom-56"> </div>

  <!-- END OF MAPLE -->

  <div class="flex flex-col lg:flex-row justify-center w-full h-full absolute top-0 right-0 left-0 bottom-0 lg:px-32 lg:py-40 px-10 py-28">
    <div class="flex justify-center lg:justify-start items-center lg:w-1/2 pb-5">
      <img src="./assets/images/profile.jpg" alt="profile" class="border-4 border-pinkish/50 w-8/12 rounded-md z-40">
    </div>


    <!-- START OF NAMES -->

  <div class="flex flex-col justify-center lg:items-end items-center text-pinkish text-4xl lg:text-5xl z-40 font-bold w-full lg:w-1/2 lg:h-full">

    <div class="flex flex-col items-end w-fit">
      <p class="leading-6 lg:leading-8">MARIA ANDRHEA IVHON</p>
      <p class="leading-6 lg:leading-8 opacity-50">MARIA ANDRHEA IVHON</p>
      <p class="leading-6 lg:leading-8 opacity-20">MARIA ANDRHEA IVHON</p>

      <div class="flex w-full text-xs text-black font-medium pt-2">
        <p>an aspiring front-end developer / UI/UX designer / Graphic Designer.</p>
      </div>
    </div>      
  </div>
  <!-- END OF NAMES -->
</div>
</div>
<!-- END OF BODY -->

<Portfolio/>
    </div>
</template>