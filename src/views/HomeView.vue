<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useLocaleStore } from '../stores/locale'

const localeStore = useLocaleStore()
const { t } = storeToRefs(localeStore)

const projects = ref([
  {
    name: 'Web Development Starter',
    description: 'A complete starter template for modern web applications',
    tech: ['Vue.js', 'TypeScript', 'Vite'],
    link: 'https://github.com/ngodingskuyy',
  },
  {
    name: 'API Documentation',
    description: 'Comprehensive API documentation and examples',
    tech: ['Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/ngodingskuyy',
  },
  {
    name: 'UI Component Library',
    description: 'Reusable UI components for faster development',
    tech: ['Vue.js', 'CSS3', 'JavaScript'],
    link: 'https://github.com/ngodingskuyy',
  },
])
</script>

<template>
  <main class="main-content">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-logo">
            <img
              src="/images/icons/android-chrome-512x512.png"
              alt="NgodingSkuyy Logo"
              class="logo-image"
            />
          </div>
          <h1 class="hero-title">{{ t.hero.title }}</h1>
          <p class="hero-subtitle">{{ t.hero.subtitle }}</p>
          <p class="hero-description">
            {{ t.hero.description }}
          </p>
          <div class="hero-buttons">
            <a href="https://discord.gg/uhZWnUeeW8" target="_blank" class="btn btn-primary">
              {{ t.hero.ctaJoin }}
            </a>
            <a href="https://github.com/ngodingskuyy" target="_blank" class="btn btn-secondary">
              {{ t.hero.ctaExplore }}
            </a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="code-window">
            <div class="window-header">
              <div class="window-controls">
                <span class="control red"></span>
                <span class="control yellow"></span>
                <span class="control green"></span>
              </div>
              <span class="window-title">ngoding-skuyy.js</span>
            </div>
            <div class="code-content">
              <div class="code-line">
                <span class="keyword">const </span>
                <span class="variable">community</span> = {
              </div>
              <div class="code-line indent">
                <span class="property">name</span>: <span class="string">'NgodingSkuyy'</span>,
              </div>
              <div class="code-line indent">
                <span class="property">mission</span>:
                <span class="string">'Building Future'</span>,
              </div>
              <div class="code-line indent">
                <span class="property">values</span>: [<span class="string">'Learn'</span>,
                <span class="string">'Share'</span>, <span class="string">'Grow'</span>]
              </div>
              <div class="code-line">};</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <h2 class="section-title">{{ t.features.title }}</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🚀</div>
            <h3 class="feature-title">{{ t.features.collaboration.title }}</h3>
            <p class="feature-description">{{ t.features.collaboration.description }}</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">👥</div>
            <h3 class="feature-title">{{ t.features.community.title }}</h3>
            <p class="feature-description">{{ t.features.community.description }}</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📚</div>
            <h3 class="feature-title">{{ t.features.learning.title }}</h3>
            <p class="feature-description">{{ t.features.learning.description }}</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💡</div>
            <h3 class="feature-title">{{ t.features.opensource.title }}</h3>
            <p class="feature-description">{{ t.features.opensource.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="projects">
      <div class="container">
        <h2 class="section-title">{{ t.projects.title }}</h2>
        <div class="projects-grid">
          <div v-for="project in projects" :key="project.name" class="project-card">
            <div class="project-content">
              <h3 class="project-title">{{ project.name }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tech">
                <span v-for="tech in project.tech" :key="tech" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
            </div>
            <div class="project-footer">
              <a :href="project.link" target="_blank" class="project-link"
                >{{ t.projects.viewProject }} →</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">{{ t.cta.title }}</h2>
          <p class="cta-description">
            {{ t.cta.description }}
          </p>
          <div class="cta-buttons">
            <a
              href="https://discord.gg/uhZWnUeeW8"
              target="_blank"
              class="btn btn-primary discord-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37.07.07 0 0 0 3.647 4.4C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
                />
              </svg>
              {{ t.cta.button }}
            </a>
            <a href="https://github.com/ngodingskuyy" target="_blank" class="btn btn-secondary">
              Join GitHub Organization
            </a>
            <a href="mailto:contact@ngodingskuyy.com" class="btn btn-outline"> Get in Touch </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.main-content {
  padding-top: 80px; /* Account for fixed navbar */
}

/* Hero Section */
.hero {
  background: var(--gradient-primary);
  color: white;
  padding: 4rem 0;
  min-height: 90vh;
  display: flex;
  align-items: center;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-logo {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.logo-image {
  width: 120px;
  height: 120px;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
  transition: transform 0.3s ease;
  border-radius: 15%;
  cursor: pointer;
}

.logo-image:hover {
  transform: scale(1.05) rotate(5deg);
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #fff, #e0e7ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  opacity: 0.9;
  text-align: center;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.8;
  text-align: center;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  padding: 0.75rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  display: inline-block;
}

.btn-primary {
  background: var(--accent-color);
  color: white;
}

.btn-primary:hover {
  background: var(--accent-color);
  filter: brightness(0.9);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(76, 175, 80, 0.3);
}

.btn-secondary {
  background: transparent;
  color: white;
  border-color: white;
}

.btn-secondary:hover {
  background: var(--accent-color);
  color: white;
  border-color: var(--accent-color);
}

.btn-outline {
  background: transparent;
  color: var(--accent-color);
  border-color: var(--accent-color);
}

.btn-outline:hover {
  background: var(--accent-color);
  color: white;
}

.discord-btn {
  background: #5865f2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.discord-btn:hover {
  background: #4752c4;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(88, 101, 242, 0.3);
}

/* Code Window */
.code-window {
  background: #1e293b;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.window-header {
  background: #334155;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.window-controls {
  display: flex;
  gap: 0.5rem;
}

.control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.control.red {
  background: #ef4444;
}

.control.yellow {
  background: #f59e0b;
}

.control.green {
  background: #10b981;
}

.window-title {
  color: #94a3b8;
  font-size: 0.9rem;
}

.code-content {
  padding: 1.5rem;
  font-family: 'Fira Code', 'Cascadia Code', 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
}

.code-line {
  margin-bottom: 0.5rem;
}

.indent {
  padding-left: 2rem;
}

.keyword {
  color: #c084fc;
}

.variable {
  color: #60a5fa;
}

.property {
  color: #34d399;
}

.string {
  color: #fbbf24;
}

/* Sections */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-primary);
}

/* Features Section */
.features {
  padding: 5rem 0;
  background: var(--bg-secondary);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
  border: 1px solid var(--border-color);
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.feature-description {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Projects Section */
.projects {
  padding: 5rem 0;
  background: var(--bg-secondary);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--bg-primary);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
  border: 1px solid var(--border-color);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.project-description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: #e8f5e8;
  color: #2e7d32;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-footer {
  padding: 1rem 1.5rem;
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
}

.project-link {
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.project-link:hover {
  color: #45a049;
}

/* CTA Section */
.cta {
  background: var(--gradient-primary);
  color: white;
  padding: 4rem 0;
}

.cta-content {
  text-align: center;
}

.cta-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-buttons {
    justify-content: center;
  }

  .section-title {
    font-size: 2rem;
  }

  .cta-title {
    font-size: 2rem;
  }

  .container {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .btn {
    padding: 0.5rem 1.5rem;
    font-size: 0.9rem;
  }

  .code-content {
    font-size: 0.8rem;
    padding: 1rem;
  }
}
</style>
