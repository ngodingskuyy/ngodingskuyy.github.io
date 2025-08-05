<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useRoute } from 'vue-router'
import { computed, ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import AppFooter from './components/AppFooter.vue'
import { useLocaleStore } from './stores/locale'

const route = useRoute()
const isHomePage = computed(() => route.name === 'home' || route.path === '/')

// Locale store
const localeStore = useLocaleStore()
const { currentLocale, t } = storeToRefs(localeStore)
const { setLocale, initLocale } = localeStore

// Dark mode functionality
const isDarkMode = ref(false)

// Mobile menu
const isMobileMenuOpen = ref(false)
const isLanguageMenuOpen = ref(false)
const isResourcesMenuOpen = ref(false)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('darkMode', isDarkMode.value.toString())
  document.documentElement.classList.toggle('dark', isDarkMode.value)
}

const toggleLanguage = () => {
  const newLocale = currentLocale.value === 'en' ? 'id' : 'en'
  console.log('Switching from', currentLocale.value, 'to', newLocale)
  setLocale(newLocale)
  isLanguageMenuOpen.value = false
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const toggleLanguageMenu = () => {
  isLanguageMenuOpen.value = !isLanguageMenuOpen.value
  isResourcesMenuOpen.value = false
}

const toggleResourcesMenu = () => {
  isResourcesMenuOpen.value = !isResourcesMenuOpen.value
  isLanguageMenuOpen.value = false
}

const closeMenus = () => {
  isLanguageMenuOpen.value = false
  isResourcesMenuOpen.value = false
}

onMounted(() => {
  // Initialize locale
  initLocale()

  // Check for saved dark mode preference or default to false
  const savedDarkMode = localStorage.getItem('darkMode')
  if (savedDarkMode !== null) {
    isDarkMode.value = savedDarkMode === 'true'
  } else {
    // Check system preference
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  document.documentElement.classList.toggle('dark', isDarkMode.value)

  // Close menus when clicking outside
  document.addEventListener('click', (e) => {
    if (!(e.target as Element).closest('.navbar')) {
      closeMenus()
    }
  })
})
</script>

<template>
  <div id="app">
    <header class="vp-nav" :class="{ home: isHomePage }">
      <div class="navbar" :class="{ 'navbar-home': isHomePage }">
        <div class="wrapper">
          <div class="container">
            <!-- Logo/Title -->
            <div class="title">
              <div class="navbar-title">
                <RouterLink to="/" class="title-link" @click="closeMenus">
                  <img
                    src="/images/icons/android-chrome-192x192.png"
                    alt="NgodingSkuyy"
                    class="logo"
                  />
                  <span class="title-text">NgodingSkuyy</span>
                </RouterLink>
              </div>
            </div>

            <!-- Content -->
            <div class="content">
              <div class="content-body">
                <!-- Navigation Menu -->
                <nav aria-labelledby="main-nav-aria-label" class="navbar-menu menu">
                  <span id="main-nav-aria-label" class="visually-hidden">Main Navigation</span>

                  <RouterLink to="/" class="navbar-menu-link" @click="closeMenus">
                    <span>{{ t.home }}</span>
                  </RouterLink>

                  <RouterLink to="/about" class="navbar-menu-link" @click="closeMenus">
                    <span>{{ t.about }}</span>
                  </RouterLink>

                  <!-- Resources Flyout -->
                  <div class="flyout navbar-menu-group" @click.stop>
                    <button
                      type="button"
                      class="flyout-button"
                      aria-haspopup="true"
                      :aria-expanded="isResourcesMenuOpen"
                      @click="toggleResourcesMenu"
                    >
                      <span class="button-text">
                        <span>Resources</span>
                        <span class="chevron-down" :class="{ rotated: isResourcesMenuOpen }">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                          </svg>
                        </span>
                      </span>
                    </button>
                    <div class="flyout-menu" v-show="isResourcesMenuOpen">
                      <div class="menu-content">
                        <div class="menu-items">
                          <div class="menu-link">
                            <a
                              :href="`https://discord.gg/uhZWnUeeW8`"
                              target="_blank"
                              rel="noreferrer"
                              @click="closeMenus"
                            >
                              <span>{{ t.discord }}</span>
                            </a>
                          </div>
                          <div class="menu-link">
                            <a
                              href="https://github.com/ngodingskuyy"
                              target="_blank"
                              rel="noreferrer"
                              @click="closeMenus"
                            >
                              <span>GitHub Organization</span>
                            </a>
                          </div>
                          <div class="menu-link">
                            <a
                              href="https://github.com/ngodingskuyy/ngodingskuyy.github.io"
                              target="_blank"
                              rel="noreferrer"
                              @click="closeMenus"
                            >
                              <span>Contribute</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>

                <!-- Language Switcher -->
                <div class="flyout navbar-translations translations" @click.stop>
                  <button
                    type="button"
                    class="flyout-button"
                    aria-haspopup="true"
                    :aria-expanded="isLanguageMenuOpen"
                    aria-label="Change language"
                    @click="toggleLanguageMenu"
                  >
                    <span class="button-text">
                      <span class="language-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path
                            d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
                          />
                        </svg>
                      </span>
                      <span class="chevron-down" :class="{ rotated: isLanguageMenuOpen }">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                        </svg>
                      </span>
                    </span>
                  </button>
                  <div class="flyout-menu" v-show="isLanguageMenuOpen">
                    <div class="menu-content">
                      <div class="language-items">
                        <p class="language-title">
                          {{ currentLocale === 'en' ? 'English' : 'Indonesian' }}
                        </p>
                        <div class="menu-link">
                          <a href="#" @click.prevent="toggleLanguage">
                            <span>{{ currentLocale === 'en' ? 'Indonesian' : 'English' }}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Dark Mode Toggle -->
                <div class="navbar-appearance appearance">
                  <button
                    class="appearance-switch"
                    type="button"
                    role="switch"
                    :title="`Switch to ${isDarkMode ? 'light' : 'dark'} theme`"
                    :aria-checked="isDarkMode"
                    @click="toggleDarkMode"
                  >
                    <span class="switch-check">
                      <span class="switch-icon">
                        <span v-if="!isDarkMode" class="sun-icon">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path
                              d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM12 1l3.5 3.5-2.121 2.121L12 5.243 10.621 6.62 8.5 4.5 12 1zM1 12l3.5-3.5 2.121 2.121L5.243 12l1.378 1.379L4.5 15.5 1 12zm22 0l-3.5 3.5-2.121-2.121L18.757 12l-1.378-1.379L19.5 8.5 23 12zM12 23l-3.5-3.5 2.121-2.121L12 18.757l1.379-1.378L15.5 19.5 12 23z"
                            />
                          </svg>
                        </span>
                        <span v-else class="moon-icon">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />
                          </svg>
                        </span>
                      </span>
                    </span>
                  </button>
                </div>

                <!-- Social Links -->
                <div class="navbar-social-links social-links">
                  <a
                    href="https://github.com/ngodingskuyy"
                    aria-label="github"
                    target="_blank"
                    rel="noopener"
                    class="social-link"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://discord.gg/uhZWnUeeW8"
                    aria-label="discord"
                    target="_blank"
                    rel="noopener"
                    class="social-link"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37.07.07 0 0 0 3.647 4.4C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.30zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
                      />
                    </svg>
                  </a>
                </div>

                <!-- Mobile Menu Button -->
                <button
                  type="button"
                  class="navbar-hamburger hamburger"
                  aria-label="mobile navigation"
                  :aria-expanded="isMobileMenuOpen"
                  @click="toggleMobileMenu"
                >
                  <span class="hamburger-container">
                    <span class="hamburger-line top" :class="{ active: isMobileMenuOpen }"></span>
                    <span
                      class="hamburger-line middle"
                      :class="{ active: isMobileMenuOpen }"
                    ></span>
                    <span
                      class="hamburger-line bottom"
                      :class="{ active: isMobileMenuOpen }"
                    ></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="divider">
          <div class="divider-line"></div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div class="mobile-menu" v-show="isMobileMenuOpen" @click="isMobileMenuOpen = false">
        <div class="mobile-menu-content" @click.stop>
          <nav class="mobile-nav">
            <RouterLink to="/" class="mobile-nav-link" @click="isMobileMenuOpen = false">
              {{ t.home }}
            </RouterLink>
            <RouterLink to="/about" class="mobile-nav-link" @click="isMobileMenuOpen = false">
              {{ t.about }}
            </RouterLink>
            <a
              href="https://discord.gg/uhZWnUeeW8"
              target="_blank"
              class="mobile-nav-link"
              @click="isMobileMenuOpen = false"
            >
              {{ t.discord }}
            </a>
            <a
              href="https://github.com/ngodingskuyy"
              target="_blank"
              class="mobile-nav-link"
              @click="isMobileMenuOpen = false"
            >
              GitHub
            </a>
          </nav>
          <div class="mobile-controls">
            <button @click="toggleLanguage" class="mobile-control-btn">
              {{ currentLocale === 'en' ? 'Switch to Indonesian' : 'Switch to English' }}
            </button>
            <button @click="toggleDarkMode" class="mobile-control-btn">
              {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
            </button>
          </div>
        </div>
      </div>
    </header>

    <main>
      <RouterView />
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
/* Global App Styles */
#app {
  font-family: var(--font-family);
  color: var(--text-primary);
  background-color: var(--bg-primary);
  min-height: 100vh;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* VPNav - Main Header */
.vp-nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  pointer-events: none;
  transition: background-color 0.5s;
}

.vp-nav.home {
  background-color: transparent;
}

/* Navbar */
.navbar {
  background: var(--gradient-primary);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  pointer-events: auto;
  transition: all 0.3s ease;
}

.navbar-home {
  background: var(--gradient-primary);
  backdrop-filter: blur(10px);
}

:root.dark .navbar {
  background: var(--gradient-primary);
  border-bottom-color: rgba(255, 255, 255, 0.05);
}

.wrapper {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

/* Logo/Title */
.title {
  flex-shrink: 0;
}

.navbar-title {
  display: flex;
  align-items: center;
}

.title-link {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  transition: opacity 0.3s;
}

.title-link:hover {
  opacity: 0.8;
}

.logo {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.title-text {
  font-weight: 700;
  color: white;
}

/* Content */
.content {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.content-body {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Navigation Menu */
.navbar-menu {
  display: flex;
  align-items: center;
  gap: 8px;
}

.navbar-menu-link {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.navbar-menu-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.navbar-menu-link.router-link-active {
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
}

/* Flyout Menus */
.flyout {
  position: relative;
  display: flex;
  align-items: center;
}

.flyout-button {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background: none;
  border: none;
  color: white;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.flyout-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.button-text {
  display: flex;
  align-items: center;
  gap: 6px;
}

.chevron-down {
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
}

.chevron-down.rotated {
  transform: rotate(180deg);
}

.language-icon {
  display: flex;
  align-items: center;
}

.flyout-menu {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  min-width: 200px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  box-shadow: var(--shadow-lg);
  z-index: 1001;
  animation: slideIn 0.2s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.menu-content {
  padding: 8px;
}

.menu-items {
  display: flex;
  flex-direction: column;
}

.menu-link {
  margin-bottom: 4px;
}

.menu-link:last-child {
  margin-bottom: 0;
}

.menu-link a {
  display: block;
  padding: 8px 12px;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 14px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.menu-link a:hover {
  background-color: var(--bg-tertiary);
}

.language-items {
  display: flex;
  flex-direction: column;
}

.language-title {
  margin: 0 0 8px 0;
  padding: 8px 12px 0;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Appearance Toggle */
.navbar-appearance {
  display: flex;
  align-items: center;
}

.appearance-switch {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.appearance-switch:hover {
  background: rgba(255, 255, 255, 0.15);
}

.switch-check {
  display: flex;
  align-items: center;
  justify-content: center;
}

.switch-icon {
  display: flex;
  align-items: center;
  color: white;
}

/* Social Links */
.navbar-social-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: white;
  border-radius: 6px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-1px);
}

/* Hamburger Menu */
.navbar-hamburger {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.hamburger-line {
  width: 20px;
  height: 2px;
  background: white;
  transition: all 0.3s ease;
}

.hamburger-line.active.top {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger-line.active.middle {
  opacity: 0;
}

.hamburger-line.active.bottom {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Divider */
.divider {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.divider-line {
  height: 1px;
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  backdrop-filter: blur(4px);
}

.mobile-menu-content {
  background: var(--bg-secondary);
  margin: 16px;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-lg);
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
}

.mobile-nav-link {
  display: block;
  padding: 12px 16px;
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.mobile-nav-link:hover,
.mobile-nav-link.router-link-active {
  background-color: var(--bg-tertiary);
}

.mobile-controls {
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-top: 1px solid var(--border-color);
  padding-top: 16px;
}

.mobile-control-btn {
  padding: 12px 16px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: var(--text-primary);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mobile-control-btn:hover {
  background: var(--bg-quaternary);
}

/* Responsive Design */
@media (max-width: 768px) {
  .wrapper {
    padding: 0 16px;
  }

  .navbar-menu,
  .navbar-translations,
  .navbar-appearance,
  .navbar-social-links {
    display: none;
  }

  .navbar-hamburger {
    display: flex;
  }

  .title-text {
    font-size: 16px;
  }

  .logo {
    width: 28px;
    height: 28px;
  }
}

@media (max-width: 480px) {
  .wrapper {
    padding: 0 12px;
  }

  .container {
    height: 56px;
  }

  .title-link {
    gap: 8px;
    font-size: 16px;
  }

  .mobile-menu-content {
    margin: 12px;
    padding: 20px;
  }
}

/* Dark mode adjustments */
:root.dark .flyout-menu {
  background: var(--bg-secondary);
  border-color: var(--border-color);
}

:root.dark .social-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Page content spacing */
main {
  padding-top: 64px;
}
</style>
