const CACHE = "bcag-v2";
const FILES = ["./index.html", "./manifest.json", "./content.js", "./style.css",
  "./icon-192.png", "./icon-512.png",
  "./icon-about.png", "./icon-gallery.png", "./icon-templates.png", "./icon-members.png",
  "./icon-calendar.png", "./icon-tutorials.png", "./icon-equipment.png", "./icon-colours.png"];

self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first: always try to get the latest version online,
// and only use the saved offline copy if there's no connection.
self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy));
        return response;
      })
      .catch(() => caches.match(e.request))
  );
});
