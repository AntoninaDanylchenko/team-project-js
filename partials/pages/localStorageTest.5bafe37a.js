!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var l=o("bpxeT"),a=o("8nrFW"),c=o("2TvXO");function i(){return(i=e(l)(e(c).mark((function n(){var t,r,o;return e(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return null===(t=JSON.parse(localStorage.getItem("array")))?console.log("Пусто"):(console.log(t,"фільми що містяться у локал стореджі"),t.map((function(e){return e.title?console.log(e.title):console.log(e.name)}))),n.next=4,u(f()).then((function(e){return e}));case 4:if(r=n.sent,console.log(r,"фільм що хочемо додати до локал сторедж"),console.log(r.title),o=[],null!==t){n.next=18;break}if(void 0!==r.title){n.next=12;break}return console.log("стався збій, спробуйте ще раз"),n.abrupt("return");case 12:return o.push(r),localStorage.setItem("array",JSON.stringify(o)),console.log("localStoreg була пуста, фільм додано"),n.abrupt("return");case 18:if(!t.find((function(e){return e.id===r.id}))&&void 0!==r.title){n.next=21;break}return console.log("вже є"),n.abrupt("return");case 21:return console.log("фільму ще не маю, добавляємо"),(o=e(a)(t).concat([r])).map((function(e){return e.title?console.log(e.title):console.log(e.name)})),localStorage.setItem("array",JSON.stringify(o)),n.abrupt("return");case 26:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=f68134e3023166cb9cb0f095aa9e1cfe")).then((function(e){return e.json()}))}var s=function(e){return document.querySelector(e)};function f(){var e=[436270,505642,90669,119051,668461,632856,338958],n=e[Math.floor(Math.random()*(e.length-0))];return console.log(n),n}s(".BtnTestAdd").addEventListener("click",(function(){return i.apply(this,arguments)})),s(".BtnTestShow").addEventListener("click",(function(e){e.preventDefault(),s(".card").innerHTML="";var n=JSON.parse(localStorage.getItem("array")).map((function(e){return'<div class="container">\n    <h4><b>'.concat(e.title,"</b></h4>\n    <p>").concat(e.vote_count,"</p>\n  </div>")})).join();console.log(n),s(".card").innerHTML=n}))}();
//# sourceMappingURL=localStorageTest.5bafe37a.js.map