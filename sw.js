const CACHE = "bcag-v1";
const FILES = ["./index.html", "./manifest.json", "./content.js", "./style.css",
  "./icon-192.png", "./icon-512.png",
  "./icon-about.png", "./icon-gallery.png", "./icon-templates.png", "./icon-members.png",
  "./icon-calendar.png", "./icon-tutorials.png", "./icon-equipment.png", "./icon-colours.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)));
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});
