const CACHE_NAME = 'delivery-tracker-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js',
    '/manifest.json',
    '/icon-512.png'
];

// 1. INSTALL EVENT: Triggered when the browser sees this file for the first time.
self.addEventListener('install', (event) => {
    console.log('👷 Service Worker: Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        }).then(()=>{
            // Force this service worker to become active immediately without waiting
            return self.skipWaiting();
        })
    ); 
});

// 2. ACTIVATE EVENT: Triggered when the old service worker is gone and this one takes control.
self.addEventListener('activate', (event) => {
    console.log('🚀 Service Worker: Activated and ready to control the app!');
    event.waitUntil(
        caches.keys().then((cacheName) => {
            return Promise.all(
                cacheName.map((name)=>{
                    if(name !== CACHE_NAME){
                        console.log('🗑️ Service Worker: Clearing Expired Cache Key:', cache);
                        return caches.delete(name);
                    }
                })
            );
        })
    );
});

// 3. FETCH EVENT: Intercepts every single network request made by the app.
self.addEventListener('fetch', (event) => {
    // This is where the co-pilot intercepts requests!
    event.respondWith(
        caches.match(event.request).then((cacheResponse) => {
            if(cacheResponse){
                console.log('📦 Serving Asset from Cache Vault:', event.request.url);
                return cacheResponse;
            }
            console.log('🌐 Fetching from Network:', event.request.url);
            return fetch(event.request.url);
        })
    );
});
