<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const visible = ref(true);

const base = import.meta.env.BASE_URL;

const certificates = ref([
    {name:"Information Technology Specialist", url:`${base}/certificate/InformationTechnologySpecialist.png`, href: ""},
    {name:"Microsoft Office Specialist", url:`${base}/certificate/MicrosoftOfficeSpecialist.png`, href:""},
    {name:"Get Started with Figma", url:`${base}/certificate/GetStartedwithFigma.png`, href: ""},
])

const skills = ref([
    {name: "CSS", url:`${base}/skills/css.png`},
    {name: "HTML", url:`${base}/skills/html.png`},
    {name: "Tailwind", url:`${base}/skills/tailwind.png`},
    {name: "Vue JS", url:`${base}/skills/vuejs.png`},
    {name: "Figma", url:`${base}/skills/figma.png`},
    {name: "Github", url:`${base}/skills/github.png`},
    {name: "Adobe Illustrator", url:`${base}/skills/illustrator.png`},
    {name: "Adobe Photoshop", url:`${base}/skills/photoshop.png`},
])
</script>

<template>
<div>


    <div class="pt-12 lg:h-screen">
      <div class="flex justify-end items-center text-pinkish">
         <div class="absolute left-0 h-1.5 bg-pinkish w-[95vw]"></div>
         <div class="bg-white z-10">
          <h1 class="change-text lg:pr-32 lg:pl-4">ABOUT ME.</h1>
         </div>
      </div>
      <div class="flex flex-col lg:flex-row justify-between items-center lg:px-32">
  
        <div class="lg:w-1/4 lg:h-1/4 relative">
          <img src="/me.png" alt="" class="w-56 h-56 lg:w-80 lg:h-80 absolute -bottom-4 -right-5 lg:-bottom-8 lg:-right-10">
          <img src="/primo.png" alt="" class="spin absolute left-2 top-2 w-12 h-12 lg:w-20 lg:h-20">
          <div class="w-56 h-56 lg:w-80 lg:h-80 border-2 border-pinkish rounded-full"></div>
        </div>
          <div class="flex flex-col justify-between pl-8 pr-8 pt-8 lg:w-1/2 lg:p-0 relative">
            <p class="font-medium text-black-300">Hello World! This is Ma. Andrhea Ivhon O. Sanchez an aspiring UI/UX Designer and Front-End Developer who is willing to enhance my skill and knowledge in my chosen field. Taking a Bachelor of Science in Information Technology Education major in Web and Mobile Application Development. I am currently on my On-The-Job training as UI designer trainee and Q.A trainee. Showing my creativeness and ideas in a blank canvas/screen is what I love to do. Just look through my website, enjoy and have a nice day!</p>
            <p class="font-bold italic pt-5 ">Visit at:</p>
            <div class="flex gap-2">
              <a href="https://www.linkedin.com/in/mai-sanchez/" target="_blank" class="text-pinkish font-semibold underline w-fit"><Icon icon="uil:linkedin"  class="w-7 h-7"/></a>
            <a href="https://www.behance.net/maisanchez" target="_blank" class="text-pinkish font-semibold underline w-fit"><Icon icon="fa-brands:behance-square" class="w-7 h-7"/></a>
                <div class="absolute left-80 bottom-0 lg:left-80 lg:top-0">
                  <div class="hidden lg:block lg:w-96 lg:h-96 border-4 border-pinkish/30 rounded-full"></div>
                  <div class="hidden lg:block lg:w-48 lg:h-48 bg-pinkish/40 rounded-full -mt-20"></div>
                </div>
           </div>
          
        </div>
      </div>
   </div>


    <img src="/pink.png" alt="" class="w-full">
      <div class="pt-12 bg-pinkish">
        <div class="flex justify-start items-center text-white">
          <div class="absolute right-0 h-1.5 bg-white w-[95vw]"></div>
          <div class="bg-pinkish z-10">
            <h1 class="change-text lg:pl-32 lg:pr-4">SKILLS.</h1>
          </div>
        </div>
         <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-20 px-10 lg:px-32 py-10 w-full pb-20">
           <div v-for="(skill,index) in skills" :key="index" class="hover:-translate-y-10 transition-transform duration-300 ease-in-out delay-100 w-full relative bg-pinkish shadow-2xl rounded" target="_blank">
                <div class="flex justify-center items-center pb-8">
                  <div style="background-repeat: no-repeat;
                   background-size: 50%;
                   background-position: center;"
                   class="w-full h-52" 
                  :style="{ 'background-image': 'url(' + skill.url + ')' }">    
                    <div class="text-white pb-3 flex items-end justify-center text-xs w-full h-full">
                       {{skill.name}}
                    </div>      
                </div> 
                </div>   
              </div>  
         </div>
      </div>
    <img src="/pink-reverse.png" alt="" class="w-full">



    <div class="pt-12 h-screen">
      <div class="flex justify-end items-center text-pinkish">
        <div class="absolute left-0 h-1.5 bg-pinkish w-[95vw]"></div>
        <div class="bg-white z-10">
          <h1 class="change-text lg:pr-32 lg:pl-4">CERTIFICATES.</h1>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row justify-between items-center gap-5 px-10 lg:px-32 py-10 w-full">
        <div v-for="(certs,index) in certificates" :key="index" class="lg:w-1/3 relative">
          <Image :src="certs.url" alt="certificate" preview 
          :pt="{ toolbar: ['absolute top-0 right-0 flex', 'p-8'],
                 closeicon: 'w-8 h-8',
                 rotaterighticon: 'hidden',
                 rotatelefticon: 'hidden',
                 zoomouticon: 'hidden',
                 zoominicon: 'hidden',
                 mask: { 
                  class: ['fixed top-0 left-0 w-full h-full text-white', 'flex items-center justify-center', 'bg-black bg-opacity-50']}}"/>
        </div>  
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

.change-text {
  font-size: 80pt;
  animation-name: fontChange;
  animation-duration: 5s;
  animation-iteration-count: infinite;
}
@media (max-width: 320px){
  .change-text{
    font-size: 30pt;
  }
}

@media (max-width: 640px){
  .change-text{
    font-size: 50pt;
  }
}

@media (max-width: 768px){
  .change-text{
    font-size: 60pt;
  }
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