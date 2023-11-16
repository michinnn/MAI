<template>
    <div class="h-screen w-full">
        
        <div id="portfolio" class="flex flex-col text-pinkish jusify-center items-center font-medium w-full text-[110px] px-56 py-10">
                <p class="flex leading-3 opacity-50 justify-end w-full -mb-5">PORTFOLIO</p>
                <div class="flex justify-center items-center relative w-[98vw] h-full">
                    <div class="absolute left-0 h-2 bg-pinkish w-[450px]"></div>
                    <p class="z-30 leading-none">PORTFOLIO</p>
                    <div class="absolute right-0 h-2 bg-pinkish w-[450px]"></div>
                </div>
                <p class="flex leading-3 opacity-20 justify-start w-full -mt-5">PORTFOLIO</p>
        </div>
        <div class="text-[50px] px-32 text-center pt-16 text-pinkish">
        UI DESIGNS
    </div>
 <div class="flex gap-5 px-32 py-10 w-full">
    <a v-for="(uidesign,index) in uidesigns" :key="index" class="w-1/4 relative" :href="uidesign.href" target="_blank">
        <div class="absolute bg-black/0 inset-0 hover:bg-black/30 transition-color duration-150 ease-in-out text-white/0 hover:text-white/100 flex items-end text-xl pl-2 font-semibold pb-5">
            {{uidesign.name}}
        </div>
        <!-- <img :src = "uidesign.url"> -->
        <div style="background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;"
        class="w-full h-52" 
        :style="{ 'background-image': 'url(' + uidesign.url + ')' }">
            
        </div>
    </a>  

    
 </div>


    </div>

</template>

<script setup>
import { ref } from 'vue';

const uidesigns = ref([
    {name:"Attendance System", url:"/uidesigns/attendancesystem.png", href: "https://www.behance.net/gallery/184483719/Attendance-System-Website/modules/1042477149"},
    {name:"E-Commerce", url:"/uidesigns/datesfruitph.png", href:"https://www.behance.net/gallery/184482817/E-Commerce-UI-Design/modules/1042472751"},
    {name:"Attendance System - Mobile", url:"/uidesigns/attendancesystem-mobile-lobby@3x.png", href: "https://www.behance.net/gallery/184483521/Attendance-System-UI-Design/modules/1042476249"},
    {name:"Upcoming Events", url:"/uidesigns/I7-website@2x.png", href: "https://www.behance.net/gallery/184483299/Upcoming-Events-UI-Design/modules/1042475027"},
])
</script>