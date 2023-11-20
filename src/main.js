import './style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Image from 'primevue/image';

const app = createApp(App)

app.use(router)

app.component('Image', Image);

app.use(PrimeVue);

app.mount('#app')