const CACHE_NAME = "ride-chalo-v2";

const APP_SHELL = [
  "./",
  "./index.html",
  "./home.html",
  "./ride.html",
  "./rental.html",
  "./driver.html",
  "./admin.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );

  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );

  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const request = event.request;

  // Only handle GET requests.
  if (request.method !== "GET") {
    return;
  }

  // Do not interfere with Supabase, Google APIs or Maps.
  if (
    request.url.includes("supabase.co") ||
    request.url.includes("googleapis.com") ||
    request.url.includes("maps")
  ) {
    return;
  }

  event.respondWith(
    fetch(request)
      .then(response => {
        if (response && response.status === 200) {
          const copy = response.clone();

          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, copy);
          });
        }

        return response;
      })
      .catch(() =>
        caches.match(request).then(
          cached => cached || caches.match("./index.html")
        )
      )
  );
});
