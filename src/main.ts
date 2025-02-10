import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import App from './App.vue'
import { Button } from 'primevue'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

app.component('prime-btn', Button)
app.mount('#app')