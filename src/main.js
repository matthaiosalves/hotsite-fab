import './assets/css/style.css';
import './assets/css/bootstrap.min.css';
import './assets/plugins/bootstrap.bundle.min.js';
import './assets/plugins/tooltip.js';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(router)

app.mount('#app')
