self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('fox-store').then(function(cache) {
     return cache.addAll([
       '/test/',
       '/test/index.html',
       '/test/index.js',
       '/test/style.css',
       '/test/images/fox1.jpg',
       '/test/images/fox2.jpg',
       '/test/images/fox3.jpg',
       '/test/images/fox4.jpg'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
