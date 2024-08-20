//Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v2.0.6';

// Add list of files to cache here.
const FILES_TO_CACHE = [
    'about.html',
    'adoption-request.html',
    'adoption.html',
    'animal-file.html',
    'available-animals.html',
    'clinique.html',
    'contact.html',
    'don.html',
    'index.html',
    'offline.html',
    'styles/css/style.css',
    'scripts/index.js',
    'scripts/install.js',
    'scripts/adoption.js',
    'scripts/available-animals.js',
    'scripts/clinique.js',
    'scripts/animal-file.js',
    'scripts/mobile-navigation.js',
    'database/animals.js',
    'assets/videos/hero.mp4',
    'assets/videos/hero_mobile.mp4',
    'assets/images/about.jpg',
    'assets/images/adoption.jpg',
    'assets/images/adoption2.jpg',
    'assets/images/adoption-request.jpg',
    'assets/images/clinique.jpg',
    'assets/images/clinique2.jpg',
    'assets/images/contact.jpg',
    'assets/images/don.jpg',
    'assets/images/footer.jpg',
    'assets/images/our-animals.jpg',
    'assets/images/thank-you.jpg',
    'assets/images/android-chrome-144x144.png',
    'assets/images/android-chrome-192x192.png',
    'assets/images/android-chrome-512x512.png',
    'assets/images/apple-touch-icon.png',
    'assets/images/favicon.ico',
    'assets/images/favicon-16x16.png',
    'assets/images/favicon-32x32.png',
    'assets/images/mstile-150x150.png',
    'assets/images/patte.svg',
    'assets/images/patte-espoir_logo.svg',
    'assets/images/patte-espoir_logo-white.svg',
    'assets/images/safari-pinned-tab.svg',
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
    //Add fetch event handler here
    if (evt.request.mode !== 'navigate') {
        return;
    }
    evt.respondWith(
        fetch(evt.request)
            .catch(() => {
                // Network request failed, try to get it from the cache.
                return caches.open(CACHE_NAME)
                    .then((cache) => {
                        return cache.match('./offline.html');
                    });
            })
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
    );
});
