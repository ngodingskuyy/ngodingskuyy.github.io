<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/ngodingskuyy',
    icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
  },
  {
    name: 'Email',
    url: 'mailto:contact@ngodingskuyy.com',
    icon: 'M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z',
  },
]

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', url: 'https://github.com/ngodingskuyy' },
  { name: 'Contact', url: 'mailto:contact@ngodingskuyy.com' },
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
            Komunitas developer Indonesia yang passionate dalam berbagi ilmu dan membangun masa
            depan teknologi.
          </p>
          <div class="social-links">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              :title="social.name"
              target="_blank"
              class="social-link"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path :d="social.icon" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
          <h4 class="section-title">Quick Links</h4>
          <ul class="link-list">
            <li v-for="link in quickLinks" :key="link.name">
              <RouterLink v-if="link.path" :to="link.path" class="footer-link">
                {{ link.name }}
              </RouterLink>
              <a v-else :href="link.url" target="_blank" class="footer-link">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Community -->
        <div class="footer-section">
          <h4 class="section-title">Community</h4>
          <ul class="link-list">
            <li>
              <a href="https://github.com/ngodingskuyy" target="_blank" class="footer-link">
                GitHub Organization
              </a>
            </li>
            <li>
              <a href="mailto:contact@ngodingskuyy.com" class="footer-link"> Get in Touch </a>
            </li>
            <li>
              <a
                href="https://github.com/ngodingskuyy/ngodingskuyy.github.io"
                target="_blank"
                class="footer-link"
              >
                Contribute
              </a>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div class="footer-section">
          <h4 class="section-title">Resources</h4>
          <ul class="link-list">
            <li>
              <a href="https://github.com/ngodingskuyy" target="_blank" class="footer-link">
                Open Source Projects
              </a>
            </li>
            <li>
              <a href="https://github.com/ngodingskuyy" target="_blank" class="footer-link">
                Documentation
              </a>
            </li>
            <li>
              <a href="https://github.com/ngodingskuyy" target="_blank" class="footer-link">
                Best Practices
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p class="copyright">© {{ currentYear }} NgodingSkuyy. Made with ❤️ by the community.</p>
          <p class="built-with">Built with Vue.js & TypeScript</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
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
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform: translateY(-2px);
}

.footer-section {
  margin-top: 0;
}

.section-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #e5e7eb;
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
  color: #9ca3af;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.footer-link:hover {
  color: #667eea;
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
