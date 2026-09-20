// 1. INSTALL EVENT: Triggered when the browser sees this file for the first time.
self.addEventListener('install', (event) => {
    console.log('👷 Service Worker: Installing...');
    // We will tell it to save files to the cache here tomorrow!
});

// 2. ACTIVATE EVENT: Triggered when the old service worker is gone and this one takes control.
self.addEventListener('activate', (event) => {
    console.log('🚀 Service Worker: Activated and ready to control the app!');
});

// 3. FETCH EVENT: Intercepts every single network request made by the app.
self.addEventListener('fetch', (event) => {
    console.log('🌐 Intercepting request for:', event.request.url);
    // This is where the co-pilot intercepts requests!
});
