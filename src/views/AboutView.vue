<script setup lang="ts">
import { ref } from 'vue'

const teamMembers = ref([
  {
    name: 'Community Leaders',
    role: 'Core Maintainers',
    description: 'Passionate developers leading the NgodingSkuyy community',
    avatar: '👨‍💻',
  },
  {
    name: 'Contributors',
    role: 'Active Contributors',
    description: 'Amazing developers contributing to open source projects',
    avatar: '👩‍💻',
  },
  {
    name: 'Mentors',
    role: 'Knowledge Sharers',
    description: 'Experienced developers helping newcomers grow',
    avatar: '🧑‍🏫',
  },
])

const stats = ref([
  { number: '100+', label: 'Community Members' },
  { number: '50+', label: 'Open Source Projects' },
  { number: '200+', label: 'Code Contributions' },
  { number: '5+', label: 'Years of Experience' },
])
</script>

<template>
  <main class="about-content">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">About NgodingSkuyy</h1>
          <p class="hero-description">
            NgodingSkuyy adalah komunitas developer Indonesia yang berfokus pada pembelajaran,
            kolaborasi, dan pengembangan proyek-proyek open source yang bermanfaat.
          </p>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission">
      <div class="container">
        <div class="mission-grid">
          <div class="mission-content">
            <h2 class="section-title">Our Mission</h2>
            <p class="mission-text">
              Membangun ekosistem developer Indonesia yang solid melalui sharing knowledge,
              mentoring, dan kolaborasi dalam proyek-proyek teknologi yang inovatif.
            </p>
            <div class="mission-points">
              <div class="point">
                <span class="point-icon">🎯</span>
                <div>
                  <h3>Focus on Learning</h3>
                  <p>Menyediakan resources dan mentoring untuk developer di semua level</p>
                </div>
              </div>
              <div class="point">
                <span class="point-icon">🤝</span>
                <div>
                  <h3>Collaborative Spirit</h3>
                  <p>Mendorong kolaborasi dan team work dalam setiap project</p>
                </div>
              </div>
              <div class="point">
                <span class="point-icon">🚀</span>
                <div>
                  <h3>Innovation Drive</h3>
                  <p>Selalu mengikuti perkembangan teknologi terbaru dan best practices</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mission-visual">
            <div class="stats-grid">
              <div v-for="stat in stats" :key="stat.label" class="stat-card">
                <div class="stat-number">{{ stat.number }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team">
      <div class="container">
        <h2 class="section-title">Our Community</h2>
        <div class="team-grid">
          <div v-for="member in teamMembers" :key="member.name" class="team-card">
            <div class="member-avatar">{{ member.avatar }}</div>
            <h3 class="member-name">{{ member.name }}</h3>
            <p class="member-role">{{ member.role }}</p>
            <p class="member-description">{{ member.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values">
      <div class="container">
        <h2 class="section-title">Our Values</h2>
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">💡</div>
            <h3>Innovation</h3>
            <p>
              Selalu mencari solusi kreatif dan mengadopsi teknologi terbaru untuk memecahkan
              masalah.
            </p>
          </div>
          <div class="value-card">
            <div class="value-icon">🌟</div>
            <h3>Excellence</h3>
            <p>
              Berkomitmen untuk menghasilkan code berkualitas tinggi dan mengikuti best practices.
            </p>
          </div>
          <div class="value-card">
            <div class="value-icon">🤝</div>
            <h3>Collaboration</h3>
            <p>Percaya bahwa kolaborasi dan team work menghasilkan solusi yang lebih baik.</p>
          </div>
          <div class="value-card">
            <div class="value-icon">📚</div>
            <h3>Learning</h3>
            <p>Selalu dalam proses pembelajaran dan berbagi knowledge dengan komunitas.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact">
      <div class="container">
        <div class="contact-content">
          <h2 class="section-title">Get Involved</h2>
          <p class="contact-description">
            Tertarik untuk bergabung dengan NgodingSkuyy? Kami selalu welcome dengan member baru!
          </p>
          <div class="contact-buttons">
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
              Join Discord Community
            </a>
            <a href="https://github.com/ngodingskuyy" target="_blank" class="btn btn-secondary">
              Join GitHub Organization
            </a>
            <a href="mailto:contact@ngodingskuyy.com" class="btn btn-outline"> Contact Us </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-content {
  padding-top: 80px; /* Account for fixed navbar */
}

/* Hero Section */
.about-hero {
  background: var(--gradient-primary);
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
}

/* Mission Section */
.mission {
  padding: 5rem 0;
  background: var(--bg-primary);
}

.mission-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--text-primary);
}

.mission-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.mission-points {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.point {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.point-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.point h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.point p {
  color: var(--text-secondary);
  line-height: 1.5;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.stat-card {
  background: var(--gradient-primary);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.9;
}

/* Team Section */
.team {
  padding: 5rem 0;
  background: var(--bg-secondary);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.team-card {
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
  border: 1px solid var(--border-color);
}

.team-card:hover {
  transform: translateY(-5px);
}

.member-avatar {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.member-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.member-role {
  color: var(--accent-color);
  font-weight: 500;
  margin-bottom: 1rem;
}

.member-description {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Values Section */
.values {
  padding: 5rem 0;
  background: var(--bg-primary);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.value-card {
  text-align: center;
  padding: 2rem;
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.value-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.value-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Contact Section */
.contact {
  padding: 4rem 0;
  background: var(--gradient-primary);
  color: white;
  text-align: center;
}

.contact-content .section-title {
  color: white;
  margin-bottom: 1rem;
}

.contact-description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.contact-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
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

.btn-outline {
  background: transparent;
  color: var(--accent-color);
  border-color: var(--accent-color);
}

.btn-outline:hover {
  background: var(--accent-color);
  color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .mission-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .section-title {
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

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .stat-card {
    padding: 1.5rem;
  }

  .btn {
    padding: 0.5rem 1.5rem;
    font-size: 0.9rem;
  }
}
</style>
