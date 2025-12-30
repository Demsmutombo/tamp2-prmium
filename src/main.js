import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { loadTheme } from './composables/useTheme.js'

// Charger le thème sauvegardé au démarrage AVANT de monter l'app
if (typeof window !== 'undefined') {
  loadTheme()
}

createApp(App).use(router).mount('#app')

