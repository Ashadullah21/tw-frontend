// Minimal Progressive Web App (PWA) Service Worker for TW Downloader
// This service worker satisfies the browser installability criteria without aggressive caching 
// that might conflict with dynamic video downloads or API endpoint operations.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pass-through all fetch requests directly to the network.
  // This prevents browser caching conflicts during live video extraction or audio transcoding operations.
  event.respondWith(fetch(event.request));
});
