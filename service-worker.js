"use strict";var precacheConfig=[["/website/index.html","0d28c9ad73bbc358147c45633ef68a43"],["/website/static/css/main.436fe946.css","c06210241f469b05c5dcc25d93bfb5a8"],["/website/static/js/main.deac64a6.js","4fc0f2a4de2843aaa081d1bdc30f55dd"],["/website/static/media/bms01.95335645.jpg","95335645c64efaf0719ae5b2ec0d3084"],["/website/static/media/bms02.7ab9140b.jpg","7ab9140bdf31d1134b565bbe65220e15"],["/website/static/media/clouds.6b780ab5.jpg","6b780ab53159f96de4f78aaedf5be489"],["/website/static/media/hammer01.0db3df4c.jpg","0db3df4c3f53de4a3595d24d092cff5f"],["/website/static/media/kameleont01.0db3df4c.jpg","0db3df4c3f53de4a3595d24d092cff5f"],["/website/static/media/metal01.0db3df4c.jpg","0db3df4c3f53de4a3595d24d092cff5f"],["/website/static/media/newspaper01.0db3df4c.jpg","0db3df4c3f53de4a3595d24d092cff5f"],["/website/static/media/pacific_island01.23181d39.jpg","23181d39fbe846e0a77d7486c21879b3"],["/website/static/media/party01.0db3df4c.jpg","0db3df4c3f53de4a3595d24d092cff5f"],["/website/static/media/sc2_04.4ee657cb.jpg","4ee657cb29c597bee89928789c18f42a"],["/website/static/media/steve01.0db3df4c.jpg","0db3df4c3f53de4a3595d24d092cff5f"],["/website/static/media/tortoise01.a3c26647.jpg","a3c26647e4cb991966f8e072b9bc62d0"],["/website/static/media/warcraft01.0db3df4c.jpg","0db3df4c3f53de4a3595d24d092cff5f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/website/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});