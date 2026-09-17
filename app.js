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

// Run once on initial load
updateStatus();
