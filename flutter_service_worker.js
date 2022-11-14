'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4a99a974a98457d25a0361d2d60512b9",
"index.html": "cf4a57d943583e2786487bca39f179d8",
"/": "cf4a57d943583e2786487bca39f179d8",
"main.dart.js": "0d09d192a93247e366a33b803c6c37e4",
"flutter.js": "195f32f4217e034162a6697208586f44",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "feb3919e0d6cf8427e3dca9bd16be647",
"assets/AssetManifest.json": "714b73c3bce7ab3c3e1e526ac5ad9801",
"assets/NOTICES": "d3ae62bead0cec6dd29a9213007760a7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "a04e492a05f9fd1a8cc6f12163b184dd",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/002.png": "5487728ea32b57aade757632dcf190b8",
"assets/assets/images/ic_arrow_right.png": "38b4033b72c34b260188dd690b712183",
"assets/assets/images/booking.png": "bf7f63cb29e48b7e5166740844453614",
"assets/assets/images/ic_arrow_left.png": "c8f46f2e506deaa334fb16dd8c9ab591",
"assets/assets/images/001.png": "495d17504b129ad6f1d3e3b6590e1769",
"assets/assets/images/gallery.png": "b6d8aa8d3b56f6a4527571efd3e11824",
"assets/assets/images/seat.png": "e8b6d1dbc6c3d85d46c90577dead07db",
"assets/assets/images/vrl_logo_dashboard.png": "d2637879df9f38c5f8dfdb8e20eea73f",
"assets/assets/images/ic_close.png": "d3b7c849d0d5b5e9bcad69e7838dc1a5",
"assets/assets/images/ic_action_building.png": "b5859c2fea6ee30443aba40bb4faa107",
"assets/assets/images/ic_before_six_pm_tap.png": "07f68f7631494adfb209b7d2e02fcc53",
"assets/assets/images/ic_user.png": "704da731b59665501ab66302338016d1",
"assets/assets/images/ic_dropdown.png": "0305ca38a03a42218c204dfefceb7d25",
"assets/assets/images/arrow_left_toolbar.png": "3bc258373b0d87f81717046664c22dfd",
"assets/assets/images/right_arrow.png": "ad417e4a8a842af102c8f1785ae04a44",
"assets/assets/images/review.png": "ea07c1e86ac9cc43f27404d65ebc5fa9",
"assets/assets/images/bus_stop_1.png": "bb03624effb46b27876563299a42bf9b",
"assets/assets/images/line_segment.png": "fa4b9a0dfafe62cd1616e53e9e41135f",
"assets/assets/images/01.png": "de0a364405f42365eec097152e1fa59c",
"assets/assets/images/ic_amenities.png": "511acb887ffff51658299701ab840167",
"assets/assets/images/06.png": "198f04323ce952d3e44d267c85c37bc2",
"assets/assets/images/ic_action_aboutus.png": "5fbc5032b5b52f86f3ba40e49eea3c04",
"assets/assets/images/dot_line.png": "e15b521d2efb4398cea4029991fcf270",
"assets/assets/images/07.png": "03e45768edb7d7d6fa10eaa9044b4e10",
"assets/assets/images/ic_rating_review.png": "e57f0460a835dc78dd7c6e02d5ae0026",
"assets/assets/images/after_six_pm_normal.png": "79e43bc2680064d97c2ae2d02fa396ad",
"assets/assets/images/icon_nonac.png": "a7ba40e7bd58d276352072624c006bdb",
"assets/assets/images/ic_female_green.png": "c538e14553cfd1e539aa3adbc06d6a49",
"assets/assets/images/05.png": "d0dad5f096251a8e83b92825de6a6aeb",
"assets/assets/images/ic_rs_white.png": "4194df6c4b7d3c467a7c100e6b4c25b1",
"assets/assets/images/about_us.png": "bfbb3cf5e568d3a7f811c28fbd5d87fe",
"assets/assets/images/ic_amenaties.png": "cdb7150584be139e26c89895dcd9b311",
"assets/assets/images/after_six_pm_tap.png": "9532a60b234a76d54669cc8701bfefee",
"assets/assets/images/minus.png": "d2f790fe69120f3b499116c3991785be",
"assets/assets/images/bus_stop.png": "8de21d45bf4fb2149b6482d1b2a02438",
"assets/assets/images/ic_action_rs.png": "629420a643795f73cd5acd884b2f32f2",
"assets/assets/images/ic_action_swap.png": "ddc77dd6989d3f62ebcb90b3fa33d5da",
"assets/assets/images/line_chart.png": "4f9567d9916a022a36f7c15b582dd6bc",
"assets/assets/images/dots_vertical_line_union.png": "41b32261d6503c4e3f7e05433c17b533",
"assets/assets/images/ic_twelve_pm_to_six_pm_tap.png": "4aa73bba0a6d42cac7b38b3f93caa32f",
"assets/assets/images/help.png": "c6a22c37d1e63fea8a25c1cc09b855a8",
"assets/assets/images/logo.png": "cd4f7b22627931a1db0e2234330d0e73",
"assets/assets/images/ic_launcher.png": "6e0272b327961dc23f9baa9891faabfa",
"assets/assets/images/vrl_logo_dashboard1.png": "f3ef91d81bcc857ea5e7918d7576946f",
"assets/assets/images/icon_seater.png": "3c9019bb93b8969cb6d94f7c79116520",
"assets/assets/images/no_data_found.svg": "5c6395087ece0259df4c6e2ad0858b42",
"assets/assets/images/ic_six_am_to_twelve_pm_tap.png": "f44cfa3a073688401e08a3d609b5518c",
"assets/assets/images/ic_before_six_pm_normal.png": "1bfad6bf722713cc0a383b0c0619e7dd",
"assets/assets/images/icon_slumber.png": "5f674c9d935a88a138ff797b658c0b4a",
"assets/assets/images/ic_six_am_to_twelve_pm_normal.png": "4a212ebe7b0856a413df56eaccca86d2",
"assets/assets/images/icon_sleeper.png": "6d70e0656bd8fd814542b0ea2556d60c",
"assets/assets/images/ic_calender.png": "47dd9c755de747dd140bd4a6847ad907",
"assets/assets/images/icon_ac.png": "a5ae01a0a4ae09569153b6048e42a77c",
"assets/assets/images/agreement.png": "9f5d30bbd9e023c287b744596c21a603",
"assets/assets/images/amenities_icon_new.png": "9e09f264c017d8cf3eb89c6895d91d46",
"assets/assets/images/bus.png": "10735cc20ab022e765c222f002d2c07d",
"assets/assets/images/ic_twelve_pm_to_six_pm_normal.png": "e229c173c5f9e841c63edfce3b8d6ad6",
"assets/assets/images/ic_action_back.png": "ecc35523f198cba5f5e8dfeb7628611a",
"assets/assets/images/ic_navigation_refresh.png": "6c0d7ee47b0aa480afb6ec0955571e8a",
"assets/assets/images/splash_logo.jpg": "bd53b7b05df8e306b6d206e5680509f4",
"assets/assets/images/amenities.png": "9ed50495857d8b253562a9e59650bbca",
"assets/assets/images/ic_male_white.png": "76b43f64e518a0b116a8bfc483a96241",
"assets/assets/fonts/Open-Sans-Regular.ttf": "d7d5d4588a9f50c99264bc12e4892a7c",
"assets/assets/fonts/Open-Sans-Bold.ttf": "f5331cb6372b6c0d8baf2dd7e200498c",
"canvaskit/canvaskit.js": "687636ce014616f8b829c44074231939",
"canvaskit/profiling/canvaskit.js": "ba8aac0ba37d0bfa3c9a5f77c761b88b",
"canvaskit/profiling/canvaskit.wasm": "05ad694fda6cfca3f9bbac4b18358f93",
"canvaskit/canvaskit.wasm": "d4972dbefe733345d4eabb87d17fcb5f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
