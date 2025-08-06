<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useLocaleStore } from '../stores/locale'
import { usePerformance } from '../composables/usePerformance'
import { useAnalytics } from '../composables/useAnalytics'

const localeStore = useLocaleStore()
const { t } = storeToRefs(localeStore)
const { trackComponentMount, trackUserAction } = usePerformance()
const { trackButtonClick } = useAnalytics()

const currentYear = new Date().getFullYear()

onMounted(async () => {
  // Track component mount
  await trackComponentMount('AppFooter')
})

const handleSocialClick = async (platform: string, url: string) => {
  // Track user action for performance
  await trackUserAction('social_link_click', platform)

  // Track analytics
  trackButtonClick(`${platform}_footer`, 'footer')

  // Open link
  window.open(url, '_blank', 'noopener,noreferrer')
}

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/ngodingskuyy',
    icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
  },
  {
    name: 'Discord',
    url: 'https://discord.gg/uhZWnUeeW8',
    icon: 'M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37.07.07 0 0 0 3.647 4.4C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z',
  },
  {
    name: 'Email',
    url: 'mailto:contact@ngodingskuyy.com',
    icon: 'M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z',
  },
]
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Brand Section -->
        <div class="footer-brand">
          <h3 class="brand-name">NgodingSkuyy</h3>
          <p class="brand-description">
            {{ t.footer.brandDescription }}
          </p>
          <div class="social-links">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :title="social.name"
              class="social-link"
              @click.prevent="handleSocialClick(social.name, social.url)"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path :d="social.icon" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
          <h4 class="section-title">{{ t.footer.quickLinks.title }}</h4>
          <ul class="link-list">
            <li>
              <RouterLink to="/" class="footer-link">
                {{ t.footer.quickLinks.home }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/about" class="footer-link">
                {{ t.footer.quickLinks.about }}
              </RouterLink>
            </li>
            <li>
              <a href="https://discord.gg/uhZWnUeeW8" target="_blank" class="footer-link">
                {{ t.footer.quickLinks.discord }}
              </a>
            </li>
            <li>
              <a href="https://github.com/ngodingskuyy" target="_blank" class="footer-link">
                {{ t.footer.quickLinks.projects }}
              </a>
            </li>
            <li>
              <a href="mailto:contact@ngodingskuyy.com" class="footer-link">
                {{ t.footer.quickLinks.contact }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Community -->
        <div class="footer-section">
          <h4 class="section-title">{{ t.footer.community.title }}</h4>
          <ul class="link-list">
            <li>
              <a href="https://github.com/ngodingskuyy" target="_blank" class="footer-link">
                {{ t.footer.community.github }}
              </a>
            </li>
            <li>
              <a href="mailto:contact@ngodingskuyy.com" class="footer-link">
                {{ t.footer.community.contact }}
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ngodingskuyy/ngodingskuyy.github.io"
                target="_blank"
                class="footer-link"
              >
                {{ t.footer.community.contribute }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div class="footer-section">
          <h4 class="section-title">{{ t.footer.resources.title }}</h4>
          <ul class="link-list">
            <li>
              <a href="https://github.com/ngodingskuyy" target="_blank" class="footer-link">
                {{ t.footer.resources.projects }}
              </a>
            </li>
            <li>
              <a href="https://github.com/ngodingskuyy" target="_blank" class="footer-link">
                {{ t.footer.resources.documentation }}
              </a>
            </li>
            <li>
              <a href="https://github.com/ngodingskuyy" target="_blank" class="footer-link">
                {{ t.footer.resources.bestPractices }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p class="copyright">© {{ currentYear }} NgodingSkuyy. {{ t.footer.bottom.madeWith }}</p>
          <p class="built-with">{{ t.footer.bottom.builtWith }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--gradient-primary);
  color: white;
  padding: 3rem 0 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-brand {
  max-width: 300px;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--accent-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: brightness(1.2);
}

.brand-description {
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.8;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--accent-color);
  transform: translateY(-2px);
}

.footer-section {
  margin-top: 0;
}

.section-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-secondary);
}

.link-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.link-list li {
  margin-bottom: 0.5rem;
}

.footer-link {
  color: var(--text-muted);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.footer-link:hover {
  color: var(--accent-color);
  transform: translateX(4px);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

.copyright,
.built-with {
  font-size: 0.9rem;
  opacity: 0.7;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-brand {
    max-width: none;
  }

  .footer-bottom-content {
    flex-direction: column;
    gap: 0.5rem;
  }

  .container {
    padding: 0 1rem;
  }
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}
</style>
