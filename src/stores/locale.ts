import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export type Locale = 'en' | 'id'

export const useLocaleStore = defineStore('locale', () => {
  const currentLocale = ref<Locale>('en')

  const translations = {
    en: {
      // Navigation
      home: 'Home',
      about: 'About',
      discord: 'Discord',
      github: 'GitHub',

      // Home Page
      hero: {
        title: 'NgodingSkuyy',
        subtitle: 'Build the Future with Code',
        description: 'Join our community of passionate developers. Learn, share, and grow together in the world of programming.',
        ctaJoin: 'Join Community',
        ctaExplore: 'Explore Projects'
      },

      features: {
        title: 'Why Choose NgodingSkuyy?',
        collaboration: {
          title: 'Collaboration',
          description: 'Work together on exciting projects and learn from experienced developers.'
        },
        learning: {
          title: 'Learning',
          description: 'Access to tutorials, workshops, and mentorship programs.'
        },
        community: {
          title: 'Community',
          description: 'Be part of a supportive community that helps you grow.'
        },
        opensource: {
          title: 'Open Source',
          description: 'Contribute to open source projects and make a difference.'
        }
      },

      projects: {
        title: 'Featured Projects',
        viewAll: 'View All Projects',
        viewProject: 'View Project'
      },

      cta: {
        title: 'Ready to Start Your Journey?',
        description: 'Join thousands of developers who are already part of our amazing community.',
        button: 'Join Discord Community'
      },

      // About Page
      aboutHero: {
        title: 'About NgodingSkuyy',
        subtitle: 'Empowering Developers Worldwide',
        description: 'We are a passionate community of developers dedicated to learning, sharing knowledge, and building amazing projects together.'
      },

      mission: {
        title: 'Our Mission',
        vision: {
          title: 'Vision',
          description: 'To be the leading community platform for developers in Indonesia and beyond.'
        },
        values: {
          title: 'Values',
          description: 'We believe in collaboration, continuous learning, and making technology accessible to everyone.'
        },
        impact: {
          title: 'Impact',
          description: 'Helping thousands of developers advance their careers and contribute to meaningful projects.'
        }
      },

      stats: {
        members: 'Active Members',
        projects: 'Open Source Projects',
        events: 'Events Hosted',
        countries: 'Countries Reached'
      },

      team: {
        title: 'Meet Our Team',
        founder: 'Founder & Lead Developer',
        developer: 'Full Stack Developer',
        designer: 'UI/UX Designer'
      },

      values: {
        title: 'Our Values',
        innovation: {
          title: 'Innovation',
          description: 'We embrace new technologies and encourage creative solutions to complex problems.'
        },
        inclusivity: {
          title: 'Inclusivity',
          description: 'We welcome developers of all backgrounds and experience levels to join our community.'
        },
        excellence: {
          title: 'Excellence',
          description: 'We strive for quality in everything we do, from code to community interactions.'
        }
      },

      contact: {
        title: 'Get in Touch',
        description: 'Ready to join our community? Connect with us and start your journey today!',
        button: 'Join Our Discord'
      },

      // Footer
      footer: {
        brandDescription: 'A passionate community of developers building the future with code.',
        quickLinks: {
          title: 'Quick Links',
          home: 'Home',
          about: 'About',
          discord: 'Discord',
          projects: 'Projects',
          contact: 'Contact'
        },
        community: {
          title: 'Community',
          github: 'GitHub Organization',
          contact: 'Get in Touch',
          contribute: 'Contribute'
        },
        resources: {
          title: 'Resources',
          projects: 'Open Source Projects',
          documentation: 'Documentation',
          bestPractices: 'Best Practices'
        },
        bottom: {
          madeWith: 'Made with ❤️ by the community.',
          builtWith: 'Built with Vue.js & TypeScript'
        }
      }
    },

    id: {
      // Navigation
      home: 'Beranda',
      about: 'Tentang',
      discord: 'Discord',
      github: 'GitHub',

      // Home Page
      hero: {
        title: 'NgodingSkuyy',
        subtitle: 'Bangun Masa Depan dengan Kode',
        description: 'Bergabunglah dengan komunitas developer yang penuh semangat. Belajar, berbagi, dan berkembang bersama di dunia pemrograman.',
        ctaJoin: 'Gabung Komunitas',
        ctaExplore: 'Jelajahi Proyek'
      },

      features: {
        title: 'Mengapa Memilih NgodingSkuyy?',
        collaboration: {
          title: 'Kolaborasi',
          description: 'Bekerja sama dalam proyek-proyek menarik dan belajar dari developer berpengalaman.'
        },
        learning: {
          title: 'Pembelajaran',
          description: 'Akses ke tutorial, workshop, dan program mentoring.'
        },
        community: {
          title: 'Komunitas',
          description: 'Menjadi bagian dari komunitas yang mendukung pertumbuhan Anda.'
        },
        opensource: {
          title: 'Open Source',
          description: 'Berkontribusi pada proyek open source dan membuat perbedaan.'
        }
      },

      projects: {
        title: 'Proyek Unggulan',
        viewAll: 'Lihat Semua Proyek',
        viewProject: 'Lihat Proyek'
      },

      cta: {
        title: 'Siap Memulai Perjalanan Anda?',
        description: 'Bergabunglah dengan ribuan developer yang sudah menjadi bagian dari komunitas luar biasa kami.',
        button: 'Gabung Komunitas Discord'
      },

      // About Page
      aboutHero: {
        title: 'Tentang NgodingSkuyy',
        subtitle: 'Memberdayakan Developer di Seluruh Dunia',
        description: 'Kami adalah komunitas developer yang penuh semangat, berdedikasi untuk belajar, berbagi pengetahuan, dan membangun proyek-proyek menakjubkan bersama.'
      },

      mission: {
        title: 'Misi Kami',
        vision: {
          title: 'Visi',
          description: 'Menjadi platform komunitas developer terdepan di Indonesia dan sekitarnya.'
        },
        values: {
          title: 'Nilai',
          description: 'Kami percaya pada kolaborasi, pembelajaran berkelanjutan, dan membuat teknologi dapat diakses oleh semua orang.'
        },
        impact: {
          title: 'Dampak',
          description: 'Membantu ribuan developer memajukan karir mereka dan berkontribusi pada proyek-proyek bermakna.'
        }
      },

      stats: {
        members: 'Anggota Aktif',
        projects: 'Proyek Open Source',
        events: 'Event yang Diselenggarakan',
        countries: 'Negara yang Dijangkau'
      },

      team: {
        title: 'Kenali Tim Kami',
        founder: 'Pendiri & Lead Developer',
        developer: 'Full Stack Developer',
        designer: 'UI/UX Designer'
      },

      values: {
        title: 'Nilai-Nilai Kami',
        innovation: {
          title: 'Inovasi',
          description: 'Kami merangkul teknologi baru dan mendorong solusi kreatif untuk masalah kompleks.'
        },
        inclusivity: {
          title: 'Inklusivitas',
          description: 'Kami menyambut developer dari berbagai latar belakang dan tingkat pengalaman untuk bergabung dengan komunitas kami.'
        },
        excellence: {
          title: 'Keunggulan',
          description: 'Kami berusaha untuk kualitas dalam segala hal yang kami lakukan, dari kode hingga interaksi komunitas.'
        }
      },

      contact: {
        title: 'Hubungi Kami',
        description: 'Siap bergabung dengan komunitas kami? Terhubung dengan kami dan mulai perjalanan Anda hari ini!',
        button: 'Gabung Discord Kami'
      },

      // Footer
      footer: {
        brandDescription: 'Komunitas developer yang penuh semangat membangun masa depan dengan kode.',
        quickLinks: {
          title: 'Tautan Cepat',
          home: 'Beranda',
          about: 'Tentang',
          discord: 'Discord',
          projects: 'Proyek',
          contact: 'Kontak'
        },
        community: {
          title: 'Komunitas',
          github: 'Organisasi GitHub',
          contact: 'Hubungi Kami',
          contribute: 'Berkontribusi'
        },
        resources: {
          title: 'Sumber Daya',
          projects: 'Proyek Open Source',
          documentation: 'Dokumentasi',
          bestPractices: 'Praktik Terbaik'
        },
        bottom: {
          madeWith: 'Dibuat dengan ❤️ oleh komunitas.',
          builtWith: 'Dibangun dengan Vue.js & TypeScript'
        }
      }
    }
  }

  const t = computed(() => translations[currentLocale.value])

  const setLocale = (locale: Locale) => {
    console.log('setLocale called with:', locale, 'current:', currentLocale.value)
    currentLocale.value = locale
    localStorage.setItem('locale', locale)
    console.log('locale updated to:', currentLocale.value)
  }

  const initLocale = () => {
    const savedLocale = localStorage.getItem('locale') as Locale
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'id')) {
      currentLocale.value = savedLocale
    } else {
      // Detect browser language
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('id')) {
        currentLocale.value = 'id'
      } else {
        currentLocale.value = 'en'
      }
    }
  }

  return {
    currentLocale,
    t,
    setLocale,
    initLocale
  }
})
