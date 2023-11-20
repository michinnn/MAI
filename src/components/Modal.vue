<template>
    <div class="h-screen flex items-center justify-center z-50 fixed inset-0 bg-black/50 ">

            <div class="absolute top-[50%] left-[50%] translate-x-[50%] translate-y-[50%] bg-white rounded flex flex-col items-center justify-center w-[40vw]">
                <div class="w-full flex items-center justify-between py-2 px-4 border-b">
                    <div class="invisible h-7 w-7"></div>
                    <div class="font-semibold"></div>
                    <div>x</div>
                </div>
                <div class="w-full overflow-auto">
                    <slot></slot>
                </div>
            </div>

    </div>
</template>