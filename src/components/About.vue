<template>
    <div class="contnaier mt-12">
            <h1 class="flex change-text text-black/90 px-32 justify-end">ABOUT ME.</h1>
    </div>
</template>
<style scoped>
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
  animation-duration: 3s;
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