<script setup lang="ts">
import { ref } from 'vue'

const features = ref([
  {
    icon: '🚀',
    title: 'Fast Development',
    description: 'Accelerate your coding journey with modern tools and best practices',
  },
  {
    icon: '👥',
    title: 'Community Driven',
    description: 'Join a community of passionate developers sharing knowledge and experiences',
  },
  {
    icon: '📚',
    title: 'Learning Resources',
    description: 'Access comprehensive tutorials, guides, and documentation',
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'Stay ahead with cutting-edge technologies and innovative solutions',
  },
])

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
          <h1 class="hero-title">NgodingSkuyy</h1>
          <p class="hero-subtitle">Komunitas Developer Indonesia</p>
          <p class="hero-description">
            Bergabunglah dengan komunitas developer yang passionate dalam berbagi ilmu, pengalaman,
            dan membangun proyek-proyek inovatif bersama.
          </p>
          <div class="hero-buttons">
            <a href="https://github.com/ngodingskuyy" target="_blank" class="btn btn-primary">
              Explore Projects
            </a>
            <RouterLink to="/about" class="btn btn-secondary"> Learn More </RouterLink>
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
                <span class="keyword">const</span>
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
        <h2 class="section-title">Why Choose NgodingSkuyy?</h2>
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="projects">
      <div class="container">
        <h2 class="section-title">Featured Projects</h2>
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
              <a :href="project.link" target="_blank" class="project-link"> View Project → </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Start Coding?</h2>
          <p class="cta-description">
            Join our community and start building amazing projects together!
          </p>
          <div class="cta-buttons">
            <a href="https://github.com/ngodingskuyy" target="_blank" class="btn btn-primary">
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #e0e7ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.8;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
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
  background: white;
  color: #667eea;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: transparent;
  color: white;
  border-color: white;
}

.btn-secondary:hover {
  background: white;
  color: #667eea;
}

.btn-outline {
  background: transparent;
  color: #667eea;
  border-color: #667eea;
}

.btn-outline:hover {
  background: #667eea;
  color: white;
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
  color: #1f2937;
}

/* Features Section */
.features {
  padding: 5rem 0;
  background: #f8fafc;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
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
  color: #1f2937;
}

.feature-description {
  color: #6b7280;
  line-height: 1.6;
}

/* Projects Section */
.projects {
  padding: 5rem 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  border: 1px solid #e5e7eb;
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
  color: #1f2937;
}

.project-description {
  color: #6b7280;
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
  background: #e0e7ff;
  color: #3730a3;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-footer {
  padding: 1rem 1.5rem;
  background: #f8fafc;
  border-top: 1px solid #e5e7eb;
}

.project-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.project-link:hover {
  color: #4f46e5;
}

/* CTA Section */
.cta {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
