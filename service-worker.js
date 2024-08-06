const CACHE_NAME = 'static-cache-v2.0.1';

// Add list of files to cache here.
const FILES_TO_CACHE = [
    'offline.html',
    'index.html',
    'adoption.html',
    'available-animals.html',
    'clinique.html',
    'animal-file.html',
    'adoption-request.html',
    'about.html',
    'contact.html',
    'css/styles.css',
    'scripts/index.js',
    'scripts/adoption.js',
    'scripts/available-animals.js',
    'scripts/clinique.js',
    'scripts/animal-file.js',
    'scripts/mobile-navigation.js',
    'database/animals.js',
    'assets/videos/hero.mp4',
    'assets/videos/hero_mobile.mp4',
];

self.addEventListener('install', (evt) => {
    console.log('[ServiceWorker] Install');
    // Precache static resources here.
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[ServiceWorker] Pre-caching offline page');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
    console.log('[ServiceWorker] Activate');
    // Remove previous cached data from disk.
    evt.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
    console.log('[ServiceWorker] Fetch', evt.request.url);
    if (evt.request.mode !== 'navigate') {
        return;
    }
    evt.respondWith(
        fetch(evt.request)
            .then((response) => {
                // If we received a valid response, return it.
                if (response && response.status === 200 && response.type === 'basic') {
                    return response;
                }
                // Otherwise, fetch the fallback page.
                return caches.open(CACHE_NAME)
                    .then((cache) => {
                        return cache.match('offline.html');
                    });
            })
            .catch(() => {
                // Network request failed, try to get it from the cache.
                return caches.open(CACHE_NAME)
                    .then((cache) => {
                        return cache.match('offline.html');
                    });
            })
    );
});
