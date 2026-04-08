const CACHE_NAME = 'yummy-mummy-v3';
const ASSETS = [
  './',
  './index.html',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Nunito:wght@300;400;500;600;700&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS).catch(() => {});
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(response => {
      if (response && response.status === 200) {
        const cloned = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, cloned));
      }
      return response;
    }).catch(() => {
      return caches.match(e.request).then(cached => {
        return cached || caches.match('./index.html');
      });
    })
  );
});
