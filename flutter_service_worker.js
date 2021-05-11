'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "2fc38ce3b053cc9982943293829b4967",
".git/COMMIT_EDITMSG": "0cf9c77bca0f18549cc0c39648c82552",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/c0/900e24735e2edef6a77e43becccaecb31ac41e": "97e3828fc5efa6f30a93aa232f9ce006",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/7b/a374ed33380e78e1c53b652d88ffff68c24a4e": "f85e9d2dce7195bffaab29ab6982c491",
".git/objects/f2/2ee9dbdae35f312cf6da4d3f2b71bad73ce04d": "1196d1fe4dc85b076c0202be9754dea8",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fe/46783a641358c59ef61367dac328a4b54d600e": "fa6f564b7d2be4eb9d2530334b7bfb64",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/ac/f66786f58f566318cef38342d77e7bbda5b554": "4a4b7ece49bed9f139543b481d2c0c25",
".git/objects/87/e28e42b8a3d8389fc7dc4d18e956030cf3c133": "d59127c5282d6cd8fee3a4e911e65784",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ee/a5cdba2152c89f83d1a7fa6b0f69747cf17b3a": "b4d59943985aa653fa652275dc023b83",
".git/objects/41/a028007a862b986ef0e7cdf4f5d9de62764007": "96c08e095fa2fe8a75657cf851b166d0",
".git/objects/41/42f37251154f5a7a0c48f198fd5f91fbdcc917": "3621def673ae0a35eb5e8f11d9a9bd79",
".git/objects/cb/61496900050ebf800411aedc02773fd7fa7d38": "445512547cb1c79d056116f7a258a921",
".git/objects/b9/52c02c3bde549fc5aec8e99c1020618fd7ced6": "82643bd3538f0cdc4187fcbcec8410c5",
".git/objects/d9/084ee9f2b6df0c6753d73b731709de369157cd": "380d0c903e8b5f468eb670d9e513545b",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/b8/043dd67111509c9bbca33d81192bf55d99fc4d": "d833dc7dd6686985a14491f7992e80f7",
".git/objects/14/a2829bbf9ab853b98b2b827350dd25a9be1fbe": "bf31a2c8b65510c2f88ac5e145a9b336",
".git/objects/22/3741de4ad6b36e786e8da4e5bfb66defe7f478": "96a731238a226549d0ecd444a5c6b88c",
".git/objects/ea/9a1c031d4f38ab02842b3f3699d36dd9af14c6": "f32ed865dcba830f2120e36f412446c2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/af8fc80b57154f81f9d1aa4aa5bc1262bf5965": "63291745c4745de8a08485f760a588e1",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/94/4ed5d9b991ec9bbbdadfaf236a166cdea835ee": "06629eb70f1a5f65d0008e47b17f37e7",
".git/objects/50/b213f892bfb0ec75a859b7681c51efd94b10c2": "8ae673cf3fbe3a88ed47a081506829d8",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/9c/0c54b2d1b1a4d2cb4dede4b87e69a89eecce4f": "48821522d3b37c4e678c34fa5c1f29a1",
".git/objects/bb/9a37cd72e4123f9554e1f45eabde6771238577": "0490911c3b583fb5aa063288ee7d729a",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/10a27ce868f2d8d6fccef1a54a82820d3712b3": "5c6c7e7e7931f9cd7d0e9078fe53c838",
".git/objects/e4/71c39bc93d26f147f5434b59199e00488df71b": "e6267eae76ca2486368e624200aefc4c",
".git/objects/13/f306925509dfe0d0c2cd7bc0b12ebf9bf6dbdc": "df234d66a34dc237a23b342a5c2acc61",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/aa/2c0e3a93955ea39b130f0d5e8a21d490a92795": "13507f14157d9d360ada0febe26e0945",
".git/objects/aa/3f27b01f0a33da321f497ac234fcee51527035": "4bd967ecaf5d5f8df7730c7ce0a27eca",
".git/objects/d3/8f10107967aa46c0adeb78dfbeeedb2b034979": "b129def7aa0f3c04b8f8f9c514a04fc5",
".git/objects/3a/b588836436c83f41057d3e1c013f39d7d390d6": "56cc61c330de506130eba2bfbd0f35d6",
".git/objects/0b/f2beb13015b12465d9fd5ea443020befb1a698": "f905341bd689bc1092eb7a64e5c8bbe8",
".git/objects/06/c07805f4f1e027b3ac7fb896387dbd357c66b8": "b232e9b64f1147959efa8ad965b929f4",
".git/objects/16/4efd45532b36cccccf9c49de5ee1769f80137f": "b03cb6043a55f7e9c777c0e3bf317818",
".git/objects/e7/80d7c9e7e632567d711f96f389559a4952613e": "ffb5811b03b37b2ea9e535f1f1693eef",
".git/objects/17/206e0e4c2f0a0d657d89f99cdb502a1288e215": "31d84fb8bbc89e7d2eb768b110e69954",
".git/objects/70/82de3248a0aabc122154302cb31a00a52fe62e": "b3ba60206b7e46a675f6f4d769f082a9",
".git/objects/70/275b79a5ca74c42cb25a9ace624afecaa2c59f": "7065dffa46d9e8266f0e39865f49bd7a",
".git/objects/a4/fca6960ae00d5ddf99f5c2ed074ecc3bc05c5a": "573b066b06cecac0a3b66695ed6f64a4",
".git/objects/67/5ef8444c8ebff58ba35a33272f90de96abdc45": "22de70f25935e61812ddec34cc7cf3f9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/74/66cd24ee0b36ea2aba2d9d95fa6f7010cfd4ed": "3dcbc01be3786089ec1d87dee03b0bbb",
".git/objects/7e/467e0f260b0e7c0c2411a987151a68c5c03b9d": "ec109d84b338a8927337786c5d9fcaa3",
".git/objects/db/78896f5b6f454d9c996fad54dafeee77f05cbe": "74270945f7eb652b029226b48323d5ac",
".git/objects/cd/3aaf2c7dd23eb9121d9d9ee67f78bdac83bae4": "bc266bdb791c4212f3ea4d36a60b8e48",
".git/objects/6d/40d1269f22a1dcb0aab6ba2e5fb1485e375e5c": "6f12caee117c75aecd8b1a9695ae5fe9",
".git/objects/e6/ae1ddd206385531e1f6587857029209da296eb": "ac76f4f1a039fb42daffdda4c4f63c1f",
".git/objects/56/50ba558088bbe3b70b7158d072eacde9ac8aae": "7cba9b4c4edcd542ed34bad3df346c13",
".git/objects/30/d875e514f1ec0856c5fbff5f641fb8c46cefb1": "ec68bf4643e166bdddac4f186a27e944",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/98/f19939e6e859a74c79398331f539958f435cb7": "98bf5418fe2c90ce0cef11e48bd27166",
".git/index": "312562312d55d645a347f9fe83e0535f",
".git/refs/heads/master": "a55bd72f6a98dfa2b2b31421dc51858f",
".git/refs/remotes/origin/master": "a55bd72f6a98dfa2b2b31421dc51858f",
".git/logs/HEAD": "3868ed8fc7c6138d7a2db67d91d39a97",
".git/logs/refs/heads/master": "3868ed8fc7c6138d7a2db67d91d39a97",
".git/logs/refs/remotes/origin/master": "63b64a2cdd5ba55433a311f647f02233",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"DavaPakistan2.png": "04d1fdf97b7fca08f13be5a6653811dc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/AssetManifest.json": "44d34ed37e3120c4f2feb7cffe929454",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/fluttertoast/assets/toastify.css": "8beb4c67569fb90146861e66d94163d7",
"assets/packages/fluttertoast/assets/toastify.js": "8f5ac78dd0b9b5c9959ea1ade77f68ae",
"assets/assets/image/hiw1.png": "7a9247d2b2b74616eb0440249a7d83f0",
"assets/assets/image/hiw2.png": "8242a89492f35753e7c2ea1249ff918b",
"assets/assets/image/dava.png": "bfae4b19b3ce1472d196286ed92daf00",
"assets/assets/image/hiw3.png": "071def130a644c478c04a64726275fce",
"assets/assets/icon/DavaPakistan2.png": "04d1fdf97b7fca08f13be5a6653811dc",
"assets/assets/icon/appStore.png": "f5d36baa01cc848403efffd8c88c7c96",
"assets/assets/icon/salt.png": "a289c2c867f9e333b547b0d6cc17d755",
"assets/assets/icon/medicine.png": "47e2ca2d9aa0e1f31d529e945a95ea46",
"assets/assets/icon/prescription.png": "07319afd0bfddd478c1196c6ccb71a83",
"assets/assets/icon/camera.png": "ca2829f5bb14935b69915301185bcca7",
"assets/assets/icon/googlePlay.png": "f6960fb1e8ab92e27f61482ca9da9613",
"assets/assets/icon/gallery.png": "03fad063a85d0da6a9a639f16a8273e3",
"assets/assets/icon/DavaPakistan.png": "276ab7f067d67ec10ab2e2beea43dba7",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "f05d87fd019814dc06bcb34926cba2b2",
"version.json": "083194a63ea16999f72d581815bba77b",
"manifest.json": "e29990be752da738d4496bd90b9473e1",
"index.html": "bded0f6c6eca7e271c36200aaa6cae86",
"/": "bded0f6c6eca7e271c36200aaa6cae86",
"main.dart.js": "2ddfaa84da8e930c210f47f1cee99ed8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
