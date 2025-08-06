import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Initialize Firebase
import './firebase/config'
import { useAuthStore } from './stores/auth'

// Development Firebase settings
import { setupFirebaseDevSettings, checkFirebaseConnection } from './firebase/dev-utils'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// Setup development Firebase settings
if (import.meta.env.DEV) {
    setupFirebaseDevSettings()
    setTimeout(checkFirebaseConnection, 1000) // Check connection after app loads
}

// Initialize auth store after Pinia is set up
const authStore = useAuthStore()
authStore.initAuth()

app.mount('#app')

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
