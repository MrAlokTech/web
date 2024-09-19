'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "8e4083b3402672ef8f99f345291ba0d4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b91c3b1b110651f7d8a514d6bf04c2c5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8cc1b84677f1c9e778280d7da14b56ae",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "486c7e051bef3167601902baed1a9c29",
".git/logs/refs/heads/main": "5fd20b62428f6e1477755851061f078f",
".git/logs/refs/remotes/origin/main": "52da6fe006cc5fd163715bfdbe3fae8e",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/12/b7b3c40b5c8dd7d90968d43bac7bc673a6c221": "c1ae18fde79c24e596087332de9a1b13",
".git/objects/14/cfbec71dc9cecb16abbaf0b13653588afc16c1": "1194b623d829615a1c82ad48f4ecb78b",
".git/objects/17/2505ab67d54788d814880d63c95934dd510347": "895aa79ecfdc33f91ba9b538e2b3d927",
".git/objects/20/274dacc1774f135ee7019cd8605e339072f4fe": "61da1a7ec3b1cfd12a02e00e576f3b96",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/48/d4ee1ae9c4cf48e94b216e77ae0f6cfbd7cc6a": "07b393001ab55e2a475dd561a5868ee0",
".git/objects/4b/fe94c13b57f0b9fa5cc5b529fb913626c5e4b0": "248dcb0aba8603b5a99ea90609f4ba3b",
".git/objects/4e/22a2bec903a8bdfdc163809f762c4b2477d963": "49a917ebf75a6f8b78ff816c383aa7d7",
".git/objects/50/b04a3fbae4322cc3c4adee7bf0d97789bd69b2": "b562593176f0e080a41c407a6a641f45",
".git/objects/53/b7fc24dc99beddc47862bfc693b2fcdde5caf0": "8a48c6a7404fb70f235e039348993920",
".git/objects/63/ee1019729219ae20ab6acaf197cf8b76206b57": "20693969bf0c74c75b0f8a50727ca9c6",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/89/5966018dfdee040be9513061c408e5d4ddbf58": "d713508ff4b898ed453624bccaa82d25",
".git/objects/8a/d4c84548e9c9096eb5eebfbd7b5f4e4ef5fcd6": "2e8ba453a48c835eefb0c2ceeb296b5b",
".git/objects/8b/3ddebf6a278bc5d31482e0d1e49354e8da0424": "e0ce630608992aa16075f22f3325a8be",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/94/7b2e98b576984ee4e5c9d1904bae8487ba3219": "e9530b6d8cfe8c70f6b118e2294acf45",
".git/objects/95/12e8a85b4c5f481dad2e0b60b6203b0d975c3e": "246cea7955ea4de97a92f2d311bb6755",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9c/26a1534f0e066581f01b8247d09d0cd85fd1f0": "47466344bc0b75043e4a622a6c6307a0",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a0/64a5c0bee1469502dd0c35ff893ba5671492be": "6ec1e8ea0405081e4880ce36a9f77daf",
".git/objects/ac/402e7f242bfc9d08d491dee69b46ebe207551c": "d3f69f5bbf5aba177931b659d036dab0",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/7f8556df1dbbec6791473cff069313f6059594": "47fa21e3ee2a5ba1ee17dfad667a7bad",
".git/objects/b4/a86bc243bb39233dac6eecb3c3586221c88b7c": "b91050745c1f378ac34de319804f0c71",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/be/67410fd0a5aaf22e118ff0dd3be2dcd441f34c": "6b6267f4eaa77a2f3de6d0252bfef1c8",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d7/3a0961f27638fbde9cde2a1c994d4d29331c77": "d98bee90a9a6e856483056601b6d43ea",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e2/2f70888250e2f91c0bfee2608485d0d8f6f664": "7489a983ab8dfda953d9cffc680e528f",
".git/objects/e7/0374151e8dcfc50d6484da59a9058897988fde": "e5cf5a2edc0e6b01e9ddb1742744f9ee",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/33cfca1d28429f6f266b92c8709a9e9a8e984b": "9529d9caa9fa3e3725fa8ad4f926233b",
".git/objects/f7/5c1bf2905a77978ea4e5994e13a9625a69cad2": "39a989eb24a48fe2c5ea61ad152f738c",
".git/objects/f8/7d8f87c246dc3010d190494063a634d17ac5d2": "2711d0f9a4634054447bc821eb604f7f",
".git/objects/fb/b4a61750ec2dfc5f8a8ccd26e93d4ac151177d": "5c22e10405f9dd749014e787797e13b2",
".git/refs/heads/main": "1bc8c78ec4da972f19ed549d16b581de",
".git/refs/remotes/origin/main": "1bc8c78ec4da972f19ed549d16b581de",
"assets/AssetManifest.bin": "ff9076dac2069b35184941dac064594a",
"assets/AssetManifest.bin.json": "4947cdc04b47a7c934295d5238e7b558",
"assets/AssetManifest.json": "090ca51c05ae9b73739360aa975fe552",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/FontManifest.json": "65872b846ef9e13f95a84a3840502546",
"assets/fonts/MaterialIcons-Regular.otf": "6c2dcaf556c0273bf1ab1d9341765450",
"assets/NOTICES": "0ff5d62c009ca1fd2f65acb8d0a03d9f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "92c62fbe5ca5c2bf3b7d09bcbcf408db",
"icons/apple-touch-icon.png": "7e77bc5e17b85d9ea1520a0283b8ada5",
"icons/favicon.ico": "48d425007de81bb49faf661fcdeeb572",
"icons/icon-192-maskable.png": "f0bacb388897feff966902ef1da89322",
"icons/icon-192.png": "d055caa63400cd6af1831c6968a755a2",
"icons/icon-512-maskable.png": "0ae1ad7583860dec1951678fb36ced0f",
"icons/icon-512.png": "a2ab07dd45399675a2b014f47dce8641",
"index.html": "0c8d3a5b2cc3f75c67ff9b2f5290f73d",
"/": "0c8d3a5b2cc3f75c67ff9b2f5290f73d",
"main.dart.js": "198e1b52abac53ad8850cf6eec39d8f1",
"manifest.json": "d7e2355fb736393e71822abb66ba35ab",
"version.json": "0df3f5b8d51a904a1030e655144968bc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
