<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useRoute } from 'vue-router'
import { computed, ref, onMounted } from 'vue'
import AppFooter from './components/AppFooter.vue'

const route = useRoute()
const isHomePage = computed(() => route.name === 'home' || route.path === '/')

// Dark mode functionality
const isDarkMode = ref(false)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('darkMode', isDarkMode.value.toString())
  document.documentElement.classList.toggle('dark', isDarkMode.value)
}

onMounted(() => {
  // Check for saved dark mode preference or default to false
  const savedDarkMode = localStorage.getItem('darkMode')
  if (savedDarkMode !== null) {
    isDarkMode.value = savedDarkMode === 'true'
  } else {
    // Check system preference
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  document.documentElement.classList.toggle('dark', isDarkMode.value)
})
</script>

<template>
  <header>
    <nav class="navbar" :class="{ 'navbar-home': isHomePage }">
      <div class="nav-container">
        <div class="nav-logo">
          <RouterLink to="/" class="logo-link">
            <img
              src="/images/icons/android-chrome-192x192.png"
              alt="NgodingSkuyy"
              class="nav-logo-image"
            />
            <h2>NgodingSkuyy</h2>
          </RouterLink>
        </div>
        <div class="nav-links">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <RouterLink to="/about" class="nav-link">About</RouterLink>
          <a href="https://discord.gg/uhZWnUeeW8" target="_blank" class="nav-link discord-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37.07.07 0 0 0 3.647 4.4C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.30zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
              />
            </svg>
            Discord
          </a>
          <a href="https://github.com/ngodingskuyy" target="_blank" class="nav-link github-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.30.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            GitHub
          </a>
          <button
            @click="toggleDarkMode"
            class="nav-link dark-mode-toggle"
            title="Toggle Dark Mode"
          >
            <svg v-if="!isDarkMode" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <!-- Sun icon -->
              <path
                d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM12 1l3.5 3.5-2.121 2.121L12 5.243 10.621 6.62 8.5 4.5 12 1zM1 12l3.5-3.5 2.121 2.121L5.243 12l1.378 1.379L4.5 15.5 1 12zm22 0l-3.5 3.5-2.121-2.121L18.757 12l-1.378-1.379L19.5 8.5 23 12zM12 23l-3.5-3.5 2.121-2.121L12 18.757l1.379-1.378L15.5 19.5 12 23z"
              />
            </svg>
            <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <!-- Moon icon -->
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />

  <AppFooter />
</template>

<style scoped>
.navbar {
  background: var(--gradient-primary);
  padding: 1rem 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.navbar-home {
  background: var(--gradient-primary);
  backdrop-filter: blur(10px);
}

:root.dark .navbar {
  background: var(--gradient-primary);
}

:root.dark .navbar-home {
  background: var(--gradient-primary);
  backdrop-filter: blur(10px);
}

.navbar-home .github-link,
.navbar-home .discord-link {
  background-color: rgba(255, 255, 255, 0.15);
}

:root.dark .navbar-home .github-link,
:root.dark .navbar-home .discord-link {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

:root.dark .navbar-home .dark-mode-toggle {
  background-color: rgba(255, 255, 255, 0.1) !important;
  border-color: rgba(255, 255, 255, 0.2) !important;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.nav-logo {
  transition: all 0.3s ease;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
}

.logo-link h2 {
  color: white;
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-logo-image {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.nav-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  background: none;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.github-link,
.discord-link {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.github-link:hover,
.discord-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
}

.discord-link {
  background-color: rgba(88, 101, 242, 0.2);
  border-color: rgba(88, 101, 242, 0.3);
}

.discord-link:hover {
  background-color: rgba(88, 101, 242, 0.3);
  border-color: rgba(88, 101, 242, 0.4);
}

.dark-mode-toggle {
  background-color: rgba(255, 255, 255, 0.1) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
}

.dark-mode-toggle:hover {
  background-color: rgba(255, 255, 255, 0.2) !important;
  border-color: rgba(255, 255, 255, 0.3) !important;
}

.router-link-exact-active {
  background-color: rgba(255, 255, 255, 0.2) !important;
}

.logo-link.router-link-exact-active {
  background-color: transparent !important;
}

/* Responsive design */
@media (max-width: 768px) {
  .nav-container {
    padding: 0 1rem;
  }

  .nav-links {
    gap: 0.5rem;
  }

  .nav-link {
    padding: 0.25rem 0.5rem;
    font-size: 0.9rem;
  }

  .logo-link h2 {
    font-size: 1.25rem;
  }

  .nav-logo-image {
    width: 24px;
    height: 24px;
  }
}

@media (max-width: 480px) {
  .nav-links {
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 1rem;
    background: var(--gradient-primary);
    padding: 1rem;
    border-radius: 10px;
    min-width: 200px;
    box-shadow: var(--shadow);
  }

  .nav-link {
    width: 100%;
    justify-content: center;
  }
}
</style>
