/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "93c9b1ec25dfbe529f45a4dda1a0973c"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "ada8a1b11e8be4cad7e0fde74e84b1db"
  },
  {
    "url": "assets/css/0.styles.4f300204.css",
    "revision": "b511fabb83f079ed01ece1daff9c8453"
  },
  {
    "url": "assets/fonts/hack-regular.3eccb984.woff2",
    "revision": "3eccb984a54973a75212391b6d117ace"
  },
  {
    "url": "assets/fonts/hack-regular.b038bd31.woff",
    "revision": "b038bd31fef76bc622d123ae8892efa2"
  },
  {
    "url": "assets/fonts/ktquez.06665560.eot",
    "revision": "066655605108d4a0ae74dcc69bbe7547"
  },
  {
    "url": "assets/fonts/ktquez.87607358.woff",
    "revision": "876073588156b8e621394e0705ed0695"
  },
  {
    "url": "assets/fonts/ktquez.9d97d905.ttf",
    "revision": "9d97d905fd7b9fc68d637ac83de00744"
  },
  {
    "url": "assets/img/ktquez.8ef6334d.svg",
    "revision": "8ef6334db409a3a48aea2e38db558893"
  },
  {
    "url": "assets/js/1.a32ebe17.js",
    "revision": "e1204678ac9d5d1ccbb16a14ebdd4f0a"
  },
  {
    "url": "assets/js/10.20483e0f.js",
    "revision": "db6941a877596d34cebb901ca58a1604"
  },
  {
    "url": "assets/js/11.09117e3c.js",
    "revision": "b58bdb52eba188da50fa3dc464efbc92"
  },
  {
    "url": "assets/js/12.c6a9ea5c.js",
    "revision": "30b7db5d7a73f18eadaf0bb8ee54fc8a"
  },
  {
    "url": "assets/js/13.7d6a370d.js",
    "revision": "f976e84bef6f9656c26e6dbafb16b5a4"
  },
  {
    "url": "assets/js/14.d7ac1ea7.js",
    "revision": "a795eac00bae4a0ec348a915f8562b37"
  },
  {
    "url": "assets/js/15.19e42efb.js",
    "revision": "7a4773762afedf3ca4fb46c04bbead1a"
  },
  {
    "url": "assets/js/16.0b5283ca.js",
    "revision": "861d9b74b31498b93729ae95c1612f7f"
  },
  {
    "url": "assets/js/17.363de5ef.js",
    "revision": "9b03497b46e1c349f6527136697f5903"
  },
  {
    "url": "assets/js/18.a4ff4ba8.js",
    "revision": "8eca209917f7880f6f0933c203309940"
  },
  {
    "url": "assets/js/19.9214cc5d.js",
    "revision": "b8435ac6ecef52a260654f2fa9242e9c"
  },
  {
    "url": "assets/js/2.e7c093a6.js",
    "revision": "d62da272d41177501b6ba16c3da61ac3"
  },
  {
    "url": "assets/js/20.d96d6fcb.js",
    "revision": "aff47bb029617d066c8f79d093eda8ee"
  },
  {
    "url": "assets/js/21.c0e375b3.js",
    "revision": "904e865caeafe6114dbc2f0a8864fd48"
  },
  {
    "url": "assets/js/22.5631578c.js",
    "revision": "241720cc1f6adc1c6c75826a8f074285"
  },
  {
    "url": "assets/js/23.faa80c3f.js",
    "revision": "f1113df4885785aa0791ecdf7582b332"
  },
  {
    "url": "assets/js/24.c9507e36.js",
    "revision": "08120736f6bfc4a641b48aff7cb2ed8f"
  },
  {
    "url": "assets/js/25.16060b15.js",
    "revision": "097130b77d483d867a3e5bba6710d0b6"
  },
  {
    "url": "assets/js/26.afb4c3bb.js",
    "revision": "a4d025f482ed194a265ad9afe36996af"
  },
  {
    "url": "assets/js/27.1e12aa46.js",
    "revision": "dc91e2542a550c778f1c56dec1545a7e"
  },
  {
    "url": "assets/js/28.9582a3e1.js",
    "revision": "05fbb63307bfccf2a58be89f15828ccd"
  },
  {
    "url": "assets/js/29.0f824b00.js",
    "revision": "f0a067e1b24ef51cabfb6c4e9d7889e4"
  },
  {
    "url": "assets/js/3.a963db4a.js",
    "revision": "8afe80a656b893bb90ac4e0043e2fff5"
  },
  {
    "url": "assets/js/30.bccab3d2.js",
    "revision": "5f508a14e75487565478d9a61bb6fc24"
  },
  {
    "url": "assets/js/31.8dd4b704.js",
    "revision": "64459d9561b4937e20b86dc6d29da0b4"
  },
  {
    "url": "assets/js/32.0b4ce160.js",
    "revision": "ed04c2dc21464023b188618493b7d02d"
  },
  {
    "url": "assets/js/33.50ec9a3e.js",
    "revision": "ef04f9e58096e4ef2d57a44f89188171"
  },
  {
    "url": "assets/js/34.12e5106f.js",
    "revision": "94cf31e2706bd4c8f7aae0b2e8b9ec90"
  },
  {
    "url": "assets/js/35.1754346f.js",
    "revision": "fff79838400f90ae290f996aadb06083"
  },
  {
    "url": "assets/js/36.f8b09011.js",
    "revision": "764440df2bb2791969356aeefac38a74"
  },
  {
    "url": "assets/js/37.df85ab9a.js",
    "revision": "7d38188e68208c730b9b8ef730271cca"
  },
  {
    "url": "assets/js/38.8069569d.js",
    "revision": "6f27cb26a729d467de3af3605352082f"
  },
  {
    "url": "assets/js/39.09659bd0.js",
    "revision": "b8cf625c666288fe4e8dabdb06205fcc"
  },
  {
    "url": "assets/js/4.1ae446e6.js",
    "revision": "6478840f4bddc5536baf5ffc6dd793d9"
  },
  {
    "url": "assets/js/40.3228373e.js",
    "revision": "c1e3e6b9741ff56bd85bfe802b6ed911"
  },
  {
    "url": "assets/js/41.3d022c7b.js",
    "revision": "2b6d444c1f5e19c9af0090a1365e8da0"
  },
  {
    "url": "assets/js/42.a246349a.js",
    "revision": "9bfda3ed7a6c6d51c8c320b32ce3437a"
  },
  {
    "url": "assets/js/43.1c1050fe.js",
    "revision": "1fc60ebb5c75779f2355b8eaa9175e63"
  },
  {
    "url": "assets/js/44.5c7c59b4.js",
    "revision": "9260609a72ca6cda5d91e2e8c89c3d1e"
  },
  {
    "url": "assets/js/45.8091f512.js",
    "revision": "8cc06293117c62d1594cf255481ca1a2"
  },
  {
    "url": "assets/js/46.14df84df.js",
    "revision": "83e4e3de8c0dd778fc5fd023ef118aac"
  },
  {
    "url": "assets/js/5.0e2cebd8.js",
    "revision": "a8a8ee8911e00f0bb28212270302ae62"
  },
  {
    "url": "assets/js/6.78d99ae4.js",
    "revision": "51c7b21b53697ab573a8529b95538e62"
  },
  {
    "url": "assets/js/7.11d2b599.js",
    "revision": "34e73b55a9387bbb7bf55180520c30d8"
  },
  {
    "url": "assets/js/9.061bf61a.js",
    "revision": "e871a3d2a300015a974b1bb2998721c8"
  },
  {
    "url": "assets/js/app.307c2e7b.js",
    "revision": "b481f3297c9e521e44bdb7c58f8b827e"
  },
  {
    "url": "authors/gogobody.html",
    "revision": "dba01853052524c4e6ca47d7717d4b16"
  },
  {
    "url": "authors/index.html",
    "revision": "13afcb87ff4c55564fd406f6d86d143a"
  },
  {
    "url": "authors/ktquez.html",
    "revision": "fe37c87913be7073c18ce79aeff47233"
  },
  {
    "url": "autores/ktquez.png",
    "revision": "4988ac8116c5ccf8bccfad31fd996fea"
  },
  {
    "url": "categories/index.html",
    "revision": "14fd423ccd312d34168a2d3b77487a3f"
  },
  {
    "url": "categories/vuejs.html",
    "revision": "de4e1174d34f47337d394a015afb6ef6"
  },
  {
    "url": "contact/index.html",
    "revision": "a31a75d2aaf2ce10ac1266b483028d85"
  },
  {
    "url": "en/about/index.html",
    "revision": "00d32d6f941ae69e9b4f34ad67baf069"
  },
  {
    "url": "en/authors/gogobody.html",
    "revision": "e6e151c7919bbe529d2c0d53c69bbdc4"
  },
  {
    "url": "en/authors/index.html",
    "revision": "f5cf949efa8d4fbed661ce247d31d1f5"
  },
  {
    "url": "en/authors/ktquez.html",
    "revision": "e8b76909985220aaf089c3f2ded4ba07"
  },
  {
    "url": "en/categories/index.html",
    "revision": "3dffd1d262949f2214a0f77d54cebbf7"
  },
  {
    "url": "en/categories/vuejs.html",
    "revision": "4493f5e72f6f115f940ecb9666c6d28b"
  },
  {
    "url": "en/contact/index.html",
    "revision": "286fa8b6627cc0f91e1ee90fd8d6086a"
  },
  {
    "url": "en/index.html",
    "revision": "fc9d129d5ba5bad9788dc5b20aef2e1f"
  },
  {
    "url": "en/posts/index.html",
    "revision": "176a1b61171af6d660326c1f9b243aef"
  },
  {
    "url": "en/posts/my-first-post.html",
    "revision": "ff15e37ef0ddf96b8517e0d496662b96"
  },
  {
    "url": "fallback.png",
    "revision": "5f03fc301a31248e3859493fefe8c720"
  },
  {
    "url": "favicon/android-chrome-192x192.png",
    "revision": "7dd8a65725268f26938139b90d13ddfb"
  },
  {
    "url": "favicon/android-chrome-512x512.png",
    "revision": "93a3772555db2ce10cee2b8aa5369b0b"
  },
  {
    "url": "favicon/android-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/android-icon-192x192.png",
    "revision": "802a593052e21156374bf7b9cf02c2a7"
  },
  {
    "url": "favicon/android-icon-36x36.png",
    "revision": "9ad81760948772380acd04179c6f161a"
  },
  {
    "url": "favicon/android-icon-48x48.png",
    "revision": "5d41a42424444503de5e10809d837b33"
  },
  {
    "url": "favicon/android-icon-72x72.png",
    "revision": "30de33a38d62270b7674423e33c2a296"
  },
  {
    "url": "favicon/android-icon-96x96.png",
    "revision": "3a0660f83f639a9803ecac4a33e1b3fe"
  },
  {
    "url": "favicon/apple-icon-114x114.png",
    "revision": "e332b1f9cf13e90f4a20aa7a5bdc8baf"
  },
  {
    "url": "favicon/apple-icon-120x120.png",
    "revision": "ce5b08dac1f9df7888bcd4b8ac55860a"
  },
  {
    "url": "favicon/apple-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/apple-icon-152x152.png",
    "revision": "9311b71dbf3d7c449fa655eba4efd7a3"
  },
  {
    "url": "favicon/apple-icon-180x180.png",
    "revision": "8cae876e1111dec29a0a92dbeb950491"
  },
  {
    "url": "favicon/apple-icon-57x57.png",
    "revision": "d349fef280057ab820fb110862449ee1"
  },
  {
    "url": "favicon/apple-icon-60x60.png",
    "revision": "2449753757cc4b29e41374ea0de62dc7"
  },
  {
    "url": "favicon/apple-icon-72x72.png",
    "revision": "30de33a38d62270b7674423e33c2a296"
  },
  {
    "url": "favicon/apple-icon-76x76.png",
    "revision": "cc92f0f6281b1b092c30d2e09488b02b"
  },
  {
    "url": "favicon/apple-icon-precomposed.png",
    "revision": "4693e5292746a69072e85ecec51e0b3c"
  },
  {
    "url": "favicon/apple-icon.png",
    "revision": "4693e5292746a69072e85ecec51e0b3c"
  },
  {
    "url": "favicon/apple-touch-icon-120x120.png",
    "revision": "cdbf224429a4ab5124c830824e430ec3"
  },
  {
    "url": "favicon/apple-touch-icon-152x152.png",
    "revision": "50ffcf9e956bd4fbe6d5ff4231a3bc0b"
  },
  {
    "url": "favicon/apple-touch-icon-180x180.png",
    "revision": "0e24ac61b2516d2cad8c7f365514cfd4"
  },
  {
    "url": "favicon/apple-touch-icon-60x60.png",
    "revision": "593d09b43e75f616c878d95b8dbf4b02"
  },
  {
    "url": "favicon/apple-touch-icon-76x76.png",
    "revision": "e26d4eeb0f82506ee9e260743bfbcd79"
  },
  {
    "url": "favicon/apple-touch-icon.png",
    "revision": "0e24ac61b2516d2cad8c7f365514cfd4"
  },
  {
    "url": "favicon/favicon-16x16.png",
    "revision": "718b39e95d139151a176b4048251891e"
  },
  {
    "url": "favicon/favicon-32x32.png",
    "revision": "f2d616179ad2aae07b2da243feaf340e"
  },
  {
    "url": "favicon/favicon-96x96.png",
    "revision": "3a0660f83f639a9803ecac4a33e1b3fe"
  },
  {
    "url": "favicon/ms-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/ms-icon-150x150.png",
    "revision": "b606b9da5dfd8ab72f9ca32cfd47ce33"
  },
  {
    "url": "favicon/ms-icon-310x310.png",
    "revision": "60c4e89ec11601dc57ca6047157d1e7c"
  },
  {
    "url": "favicon/ms-icon-70x70.png",
    "revision": "eee1b9ca03d48aa7ab2f37335a16ecc7"
  },
  {
    "url": "favicon/mstile-150x150.png",
    "revision": "14bca4f522e0c925715bbdda73cc94d2"
  },
  {
    "url": "favicon/safari-pinned-tab.svg",
    "revision": "43f3881d3115aabff8941e00447784f9"
  },
  {
    "url": "general/web-development.png",
    "revision": "4f3cf0f384b155165791d62b19b099f7"
  },
  {
    "url": "image-social-share.png",
    "revision": "542712558c72d1744dc5696ee91bd9af"
  },
  {
    "url": "index.html",
    "revision": "807d074cdcc8094d8076bb6b7fa375c8"
  },
  {
    "url": "ktquez-play-logo.png",
    "revision": "a368baa905f27e9eb73b79f47c431a8d"
  },
  {
    "url": "ktquez-play-logo@2x.png",
    "revision": "d73cc3b4641ffd39cad5455375b9db29"
  },
  {
    "url": "posts/index.html",
    "revision": "f02318d070ac11057f5c932874f5ad0f"
  },
  {
    "url": "posts/my-first-post.html",
    "revision": "c9c1260c663ef365195c7b7ebd438fc8"
  },
  {
    "url": "watermark-logo.png",
    "revision": "cb69efd3c0246f905ee651b1d97697ac"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
