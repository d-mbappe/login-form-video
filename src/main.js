import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseButton from "@/components/ui/BaseButton.vue";

import '@/assets/scss/main.scss';


const app = createApp(App);

app.component('v-input', BaseInput);
app.component('v-button', BaseButton);

app.mount('#app');
