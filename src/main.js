import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
const app = createApp(App).use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
    }
 },
router,
);
app.mount("#app");