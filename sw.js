/* FINEA — service worker (PWA : lancement hors-ligne + mise à jour contrôlée).
   ⚠️ Bump CACHE_VERSION à CHAQUE déploiement de FINEA.html, sinon les utilisateurs
   restent sur l'ancienne version en cache. Le changement de ce fichier déclenche la MAJ. */
const CACHE_VERSION = 'finea-v2-2026-11';
const CACHE = CACHE_VERSION;
const CORE = [
  '/',
  '/FINEA.html',
  '/manifest.webmanifest',
  '/icons/finea-icon-192.png',
  '/icons/finea-icon-512.png',
  '/icons/finea-maskable-512.png',
  '/icons/apple-touch-icon.png'
];

self.addEventListener('install', (e) => {
  // Pré-cache la coquille. Pas de skipWaiting auto : la page propose « recharger ».
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).catch(() => {}));
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

// La page peut demander l'activation immédiate du nouveau SW (clic « recharger »).
self.addEventListener('message', (e) => {
  const d = e.data;
  if (d === 'SKIP_WAITING' || (d && d.type === 'SKIP_WAITING')) self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;                 // POST (auth, data Supabase) → jamais touché
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;  // Supabase / Stripe / Cloudflare / CDN → réseau direct

  // Même origine : stale-while-revalidate (sert le cache instantanément, met à jour en fond).
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(req, { ignoreSearch: true });
    const network = fetch(req).then((res) => {
      if (res && res.ok && res.type === 'basic') cache.put(req, res.clone());
      return res;
    }).catch(() => null);
    // ⚠️ garde le SW en vie jusqu'à la fin de la revalidation, sinon le navigateur
    // peut le tuer avant la ré-écriture du cache → MAJ perdue (bug observé le 07/11).
    e.waitUntil(network);
    if (cached) return cached;                        // cache d'abord, rafraîchit en arrière-plan (garanti)
    const res = await network;
    if (res) return res;
    if (req.mode === 'navigate') {                    // hors-ligne + pas en cache → coquille de l'app
      return (await cache.match('/FINEA.html')) || (await cache.match('/')) || Response.error();
    }
    return Response.error();
  })());
});
