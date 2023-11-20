

<template>
<div>


    <div class="contnaier pt-12 h-screen">
      <div class="flex justify-end items-center text-pinkish px-32">
         <div class="absolute left-0 h-1.5 bg-pinkish w-[980px]"></div>
         <h1 class="flex change-text">ABOUT ME.</h1>
      </div>

      <div class="flex justify-between px-32">
        <div class="w-1/4 h-1/4 relative">
          <img src="/me.jpg" alt="" class="rounded-full aspect-square absolute -bottom-8 -right-10">
          <img src="/primo.png" alt="" class="spin absolute left-2 top-2 w-20 h-20">
          <div class="w-80 h-80 border border-black rounded-full"></div>
        </div>
        <p class="flex justify-end items-center w-1/2 font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet rutrum lorem. Proin vel eleifend lorem. Sed risus nisl, posuere ac sollicitudin sit amet, lobortis ac mauris. Quisque tellus tellus, hendrerit id ex sed, tempor congue nunc. Duis ac sagittis odio. Phasellus a ante vel ex cursus ornare sit amet a dui. Suspendisse a diam sed orci eleifend volutpat. Suspendisse ac ante hendrerit, dignissim orci id, eleifend neque. Suspendisse egestas at libero placerat euismod. Cras lacinia, urna a imperdiet lacinia, lorem est interdum lectus, eget lacinia lacus mauris nec mauris. Fusce auctor, purus nec posuere rhoncus, leo enim dictum massa, nec auctor dui sapien sit amet nibh.</p>
      </div>
      
   </div>
    
    <div class="contnaier pt-12 h-screen">
      <div class="flex justify-start items-center text-pinkish px-32">
        <div class="absolute right-0 h-1.5 bg-pinkish w-[1100px]"></div>
        <h1 class="flex change-text">SKILLS.</h1>
      </div>
    </div>


  <div class="contnaier pt-12 h-screen">
      <div class="flex justify-end items-center text-pinkish px-32">
        <div class="absolute left-0 h-1.5 bg-pinkish w-[850px]"></div>
        <h1 class="flex change-text">CERTIFICATES.</h1>
      </div>
    </div>
  </div>
  </template>

<style scoped>

.spin{
  transition: transform .7s ease-in-out;
}

.spin:hover{
  transform: rotate(360deg);
}
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}


.change-text {
  font-size: 80pt;
  animation-name: fontChange;
  animation-duration: 5s;
  animation-iteration-count: infinite;
}

@keyframes fontChange {
  0% {
    font-family: Armouk;
  }
  20% {
    font-family: Gallero;
  }
  40% {
    font-family: Fubiox;
  }
  60% {
    font-family: Gallero;
  }
  80% {
    font-family: Fubiox;
  }
  100%{
    font-family: Armouk;
  }
}

</style>