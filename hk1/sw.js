// อัพเดท version ทุกครั้งที่ deploy ใหม่ — บังคับโหลด cache ใหม่
const CACHE = 'hsk1-v8';
const BASE = new URL('./', self.registration.scope);
const FILES = [
  'hsk1.html',
  'hsk1-data.js',
  'manifest.json',
  'icon-192.png',
  'icon-512.png',
  'icon-maskable-512.png'
].map(file => new URL(file, BASE).toString());

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Network-first: ดึงของใหม่ก่อน ถ้าเน็ตล่มค่อยใช้ cache
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
