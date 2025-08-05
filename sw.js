const CACHE_NAME = 'ngodingskuyy-v1';
const urlsToCache = [
  '/',
  '/about',
  '/src/main.ts',
  '/src/App.vue',
  '/src/views/HomeView.vue',
  '/src/views/AboutView.vue',
  '/src/components/AppFooter.vue',
  '/src/assets/main.css',
  '/src/assets/base.css',
  '/images/icons/icon-192x192.png',
  '/images/icons/icon-512x512.png',
  '/site.webmanifest'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
      )
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
