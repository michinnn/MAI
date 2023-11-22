<template>
    <div class="w-full">
        
        <div id="portfolio" class="flex flex-col text-pinkish jusify-center items-center font-medium w-full text-5xl lg:text-[110px] lg:px-56 px-3 py-10">
                <p class="flex leading-3 opacity-50 justify-end w-full -mb-5">PORTFOLIO</p>
                <div class="flex justify-center items-center relative w-[98vw] h-full">
                    <div class="absolute left-0 lg:h-2 h-1 bg-pinkish lg:w-[450px] w-[25vw]"></div>
                    <p class="z-30 leading-none">PORTFOLIO</p>
                    <div class="absolute right-0 lg:h-2 h-1 bg-pinkish lg:w-[450px] w-[25vw]"></div>
                </div>
                <p class="flex leading-3 opacity-20 justify-start w-full -mt-5">PORTFOLIO</p>
        </div>
    <!-- UI DESIGN START HERE -->
      <div class="lg:text-[50px] text-[40px] px-32 text-center pt-16 text-pinkish">
          UI DESIGNS
      </div>
        <div class="lg:flex lg:flex-row grid grid-cols-2 gap-5 lg:px-20 px-5 py-10 w-full">
    <a v-for="(uidesign,index) in uidesigns" :key="index" class="lg:w-1/4 w-full relative shadow-lg" :href="uidesign.href" target="_blank">
        <div class="absolute bg-black/0 inset-0 hover:bg-black/30 transition-color duration-150 ease-in-out text-white/0 hover:text-white/100 flex items-end text-xl pl-2 font-semibold pb-5">
            {{uidesign.name}}
        </div>
        <!-- <img :src = "uidesign.url"> -->
        <div style="background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;"
        class="w-full h-52 lg:h-80" 
        :style="{ 'background-image': 'url(' + uidesign.url + ')' }">          
        </div>    
    </a>  
    </div>
    <!-- UI DESIGN ENDS HERE -->

        <div class="lg:text-[50px] text-[40px] px-32 text-center pt-16 text-pinkish">
         DIGITAL ARTS
        </div>
        <div class="lg:flex lg:flex-row grid grid-cols-2 gap-5 lg:px-20 px-5 py-10 w-full">
    <a v-for="(digitalart,index) in digitalarts" :key="index" class="lg:w-1/4 w-full shadow-lg relative" :href="digitalart.href" target="_blank">
        <div class="absolute bg-black/0 inset-0 hover:bg-black/30 transition-color duration-150 ease-in-out text-white/0 hover:text-white/100 flex items-end text-xl pl-2 font-semibold pb-5">
            {{digitalart.name}}
        </div>
        <!-- <img :src = "uidesign.url"> -->
        <div style="background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;"
        class="w-full h-52 lg:h-80"
        :style="{ 'background-image': 'url(' + digitalart.url + ')' }">          
        </div>    
    </a>  
    </div>       


        <div class="lg:text-[50px] text-[40px] px-32 text-center pt-16 text-pinkish">
         LOGO DESIGNS
        </div>  
    <div class="lg:flex lg:flex-row grid grid-cols-2 gap-5 lg:px-20 px-5 py-10 w-full">
        <a v-for="(logodesign,index) in logodesigns" :key="index" class="lg:w-1/4 w-full relative shadow-lg" :href="logodesign.href" target="_blank">
            <div class="absolute bg-black/0 inset-0 hover:bg-black/30 transition-color duration-150 ease-in-out text-white/0 hover:text-white/100 flex items-end text-xl pl-2 font-semibold pb-5">
                {{logodesign.name}}
            </div>
            <!-- <img :src = "uidesign.url"> -->
            <div style="background-repeat: no-repeat;
            background-size: 100%;
            background-position: center;"
            class="w-full h-52 lg:h-80" 
            :style="{ 'background-image': 'url(' + logodesign.url + ')' }">          
            </div>    
        </a>  
    </div>       

</div>

</template>

<script setup>
import { ref } from 'vue';
const base = import.meta.env.BASE_URL;

const uidesigns = ref([
    {name:"Attendance System", url:`${base}/uidesigns/attendancesystem.png`, href: "https://www.behance.net/gallery/184483719/Attendance-System-Website/modules/1042477149"},
    {name:"E-Commerce", url:`${base}/uidesigns/datesfruitph.png`, href:"https://www.behance.net/gallery/184482817/E-Commerce-UI-Design/modules/1042472751"},
    {name:"Attendance System - Mobile", url:`${base}/uidesigns/attendancesystem-mobile-lobby@3x.png`, href: "https://www.behance.net/gallery/184483521/Attendance-System-UI-Design/modules/1042476249"},
    {name:"Upcoming Events", url:`${base}/uidesigns/I7-website@2x.png`, href: "https://www.behance.net/gallery/184483299/Upcoming-Events-UI-Design/modules/1042475027"},
])

const logodesigns = ref([
    {name:"MAI-SAN logo", url:`${base}/logodesign/l1.png`, href:""},
    {name:"Cesz Creates logo", url:`${base}/logodesign/l2.png`, href:""},
    {name:"MK Crochet Creations logo", url:`${base}/logodesign/l3.png`, href:""},
    {name:"Sneaky Clothing logo", url:`${base}/logodesign/l4.png`, href:""},
])

const digitalarts = ref([
    {name:"Mrs. Mary Chibi", url:`${base}/digitalarts/d1.png`, href:""},
    {name:"ZJ chibi", url:`${base}/digitalarts/d2.png`, href:""},
    {name:"VeeWise chibi", url:`${base}/digitalarts/d3.png`, href:""},
    {name:"OhMyV33nus chibi", url:`${base}/digitalarts/d4.png`, href:""},
])
</script>