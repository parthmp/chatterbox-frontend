import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'
import router from './routes/routes.ts';
import './style.css';
import App from './App.vue';
import MyTeal from './presets/MyTeal.js'

const app = createApp(App);
const MyPreset = definePreset(Aura, MyTeal);

app.use(PrimeVue, {
    theme: {
        preset: MyPreset,
        options: {
            darkModeSelector: '.p-dark',
        }
    },
    ripple: true
});

app.use(router);
app.mount('#app');
