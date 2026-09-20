// Listen to whether the device is online or offline
window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);

function updateStatus() {
    const statusDiv = document.getElementById('connection-status');
    if (navigator.onLine) {
        statusDiv.textContent = "Connected Online";
        statusDiv.className = "online";
    } else {
        statusDiv.textContent = "Working Offline Mode";
        statusDiv.className = "offline";
    }
}
// Check if the browser supports Service Workers
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('✅ Service Worker registered successfully with scope: ', registration.scope);
            })
            .catch(error => {
                console.error('❌ Service Worker registration failed: ', error);
            });
        });
}

// Run once on initial load
updateStatus();
