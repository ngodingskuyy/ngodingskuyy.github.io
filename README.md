# NgodingSkuyy - Komunitas Developer Indonesia

[![Deploy to GitHub Pages](https://github.com/ngodingskuyy/ngodingskuyy.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/ngodingskuyy/ngodingskuyy.github.io/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

🚀 **Landing page resmi untuk komunitas NgodingSkuyy** - Tempat berkumpulnya developer Indonesia yang passionate dalam berbagi ilmu, pengalaman, dan membangun proyek-proyek inovatif bersama.

## 🌟 Features

- ✨ **Modern Design** - UI/UX yang clean dan responsive
- 🚀 **Progressive Web App (PWA)** - Dapat diinstall di device
- 📱 **Mobile Responsive** - Optimal di semua ukuran layar
- ⚡ **Fast Loading** - Dibangun dengan Vite untuk performa optimal
- 🎨 **Gradient Design** - Visual yang menarik dengan modern color scheme
- 🔍 **SEO Optimized** - Meta tags dan structured data yang lengkap
- 🔥 **Firebase Integration** - Authentication, Analytics, Performance & Hosting
- 🌍 **Internationalization** - Support Bahasa Indonesia & English
- 🌙 **Dark Mode** - Switch tema light/dark mode

## 🛠️ Tech Stack

- **Frontend Framework**: Vue.js 3 dengan Composition API
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 dengan custom properties
- **Routing**: Vue Router
- **State Management**: Pinia
- **Backend Services**: Firebase (Auth, Firestore, Analytics, Performance, Hosting)
- **Internationalization**: Vue I18n dengan Pinia store
- **PWA**: Service Worker dengan caching strategy
- **Testing**: Vitest
- **Linting**: ESLint + Prettier
- **Deployment**: Firebase Hosting + GitHub Pages

## 🚀 Quick Start

### Prerequisites

- Node.js (^20.19.0 || >=22.12.0)
- npm atau yarn

### Installation

```bash
# Clone repository
git clone https://github.com/ngodingskuyy/ngodingskuyy.github.io.git
cd ngodingskuyy.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test:unit

# Lint and fix code
npm run lint

# Format code
npm run format

# Generate icon templates
npm run generate-icons

# Deploy to GitHub Pages
npm run deploy

# Deploy to Firebase Hosting
npm run deploy:firebase

# Test Firebase hosting locally
npm run firebase:serve
```

## 📁 Project Structure

```
ngodingskuyy.github.io/
├── public/
│   ├── images/
│   │   ├── icons/          # PWA icons
│   │   └── screenshots/    # PWA screenshots
│   ├── site.webmanifest    # PWA manifest
│   ├── browserconfig.xml   # Windows tiles config
│   ├── robots.txt          # SEO robots
│   └── sitemap.xml         # SEO sitemap
├── src/
│   ├── components/         # Vue components
│   ├── views/             # Page components
│   ├── router/            # Vue Router config
│   ├── stores/            # Pinia stores
│   └── assets/            # Static assets
├── generate-icons.js      # Icon generator script
└── README.md
```

## 🎨 Design System

### Color Palette

- **Primary Gradient**: `#667eea` → `#764ba2`
- **Text Colors**: `#1f2937`, `#6b7280`, `#9ca3af`
- **Background**: `#ffffff`, `#f8fafc`

### Typography

- **Headings**: System fonts dengan font-weight 600
- **Body**: Default system font stack
- **Code**: `'Courier New', monospace`

## 📱 PWA Features

- **Installable**: Dapat diinstall sebagai aplikasi native
- **Offline Support**: Service Worker dengan caching strategy
- **App-like Experience**: Fullscreen mode dengan splash screen
- **Cross-platform**: Berjalan di desktop, mobile, dan tablet

## 🔧 Customization

### Mengubah Branding

1. Update `site.webmanifest` dengan informasi organisasi Anda
2. Ganti icons di folder `public/images/icons/`
3. Update meta tags di `index.html`
4. Modifikasi konten di `src/views/`

### Menambah Halaman Baru

1. Buat component baru di `src/views/`
2. Tambahkan route di `src/router/index.ts`
3. Update navigation di `src/App.vue`

## 🌐 Deployment

### GitHub Pages (Recommended)

```bash
# Build dan deploy otomatis
npm run deploy
```

### Firebase Hosting ⭐

```bash
# Build dan deploy ke Firebase
npm run deploy:firebase

# Test locally sebelum deploy
npm run firebase:serve

# First time setup (jika diperlukan)
npm run firebase:login
npm run firebase:init
```

**Live URL**: https://ngodingskuyy.web.app

### Manual Deployment

```bash
# Build untuk production
npm run build

# Upload folder dist/ ke hosting provider
```

## 🤝 Contributing

Kami welcome kontribusi dari semua orang! Berikut cara berkontribusi:

1. **Fork** repository ini
2. **Clone** fork Anda ke local
3. **Create branch** untuk feature/fix Anda
4. **Commit** perubahan dengan pesan yang descriptive
5. **Push** ke branch Anda
6. **Create Pull Request** ke repository utama

### Development Guidelines

- Gunakan TypeScript untuk type safety
- Follow Vue 3 Composition API patterns
- Maintain responsive design
- Write meaningful commit messages
- Test perubahan Anda sebelum submit PR

## 📖 Documentation

- [Vue.js 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Pinia Documentation](https://pinia.vuejs.org/)

## 📄 License

Project ini menggunakan [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Vue.js Team** - Framework yang amazing
- **Vite Team** - Build tool yang super cepat
- **Community Contributors** - Semua yang berkontribusi ke project ini

## 📞 Contact

- **GitHub Organization**: [@ngodingskuyy](https://github.com/ngodingskuyy)
- **Website**: [ngodingskuyy.github.io](https://ngodingskuyy.github.io)
- **Email**: contact@ngodingskuyy.com

---

<p align="center">
  <b>Made with ❤️ by NgodingSkuyy Community</b>
</p>

<p align="center">
  <a href="https://github.com/ngodingskuyy">
    <img src="https://img.shields.io/badge/GitHub-ngodingskuyy-blue?style=for-the-badge&logo=github" alt="GitHub">
  </a>
</p>
