!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired7c6=l),l("8BR1R");var r=l("cFfKp"),i=l("l5bVx"),s=e(l("WMajR")).template({1:function(t,n,a,l,r){var s,o=null!=n?n:t.nullContext||{},d=t.hooks.helperMissing,c="function",u=t.escapeExpression,m=t.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"  <div class='library-wraper'>\n    <a\n      class='library-gallery__item'\n      href='#'\n      target='_blank'\n      rel='noopener noreferrer'\n      aria-label=\"library__item\"\n    >\n\n      <img\n        src='"+u((void 0===(s=null!=(s=m(a,"poster_path")||(null!=n?m(n,"poster_path"):n))?s:d)?"undefined":e(i)(s))===c?s.call(o,{name:"poster_path",hash:{},data:r,loc:{start:{line:12,column:13},end:{line:12,column:28}}}):s)+"'\n        class='library-card__img'\n        alt='"+u((void 0===(s=null!=(s=m(a,"title")||(null!=n?m(n,"title"):n))?s:d)?"undefined":e(i)(s))===c?s.call(o,{name:"title",hash:{},data:r,loc:{start:{line:14,column:13},end:{line:14,column:22}}}):s)+u((void 0===(s=null!=(s=m(a,"name")||(null!=n?m(n,"name"):n))?s:d)?"undefined":e(i)(s))===c?s.call(o,{name:"name",hash:{},data:r,loc:{start:{line:14,column:22},end:{line:14,column:30}}}):s)+"'\n        id='"+u((void 0===(s=null!=(s=m(a,"id")||(null!=n?m(n,"id"):n))?s:d)?"undefined":e(i)(s))===c?s.call(o,{name:"id",hash:{},data:r,loc:{start:{line:15,column:12},end:{line:15,column:18}}}):s)+"' loading=\"lazy\"\n      />\n      <div class='library-info'>\n        <h3 class='library-info__title'>"+u((void 0===(s=null!=(s=m(a,"title")||(null!=n?m(n,"title"):n))?s:d)?"undefined":e(i)(s))===c?s.call(o,{name:"title",hash:{},data:r,loc:{start:{line:18,column:40},end:{line:18,column:49}}}):s)+u((void 0===(s=null!=(s=m(a,"name")||(null!=n?m(n,"name"):n))?s:d)?"undefined":e(i)(s))===c?s.call(o,{name:"name",hash:{},data:r,loc:{start:{line:18,column:49},end:{line:18,column:57}}}):s)+"</h3>\n        <div class='wrap-library'>\n          <p class='library-info__genre'>"+u((void 0===(s=null!=(s=m(a,"genreFilmStr")||(null!=n?m(n,"genreFilmStr"):n))?s:d)?"undefined":e(i)(s))===c?s.call(o,{name:"genreFilmStr",hash:{},data:r,loc:{start:{line:20,column:41},end:{line:20,column:57}}}):s)+"\n            |\n            "+u((void 0===(s=null!=(s=m(a,"year")||(null!=n?m(n,"year"):n))?s:d)?"undefined":e(i)(s))===c?s.call(o,{name:"year",hash:{},data:r,loc:{start:{line:22,column:12},end:{line:22,column:20}}}):s)+"</p>\n          <span class='film-rating'>"+u((void 0===(s=null!=(s=m(a,"genreVoit")||(null!=n?m(n,"genreVoit"):n))?s:d)?"undefined":e(i)(s))===c?s.call(o,{name:"genreVoit",hash:{},data:r,loc:{start:{line:23,column:36},end:{line:23,column:49}}}):s)+"</span>\n        </div>\n\n      </div>\n    </a>\n\n  </div>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,l){var r;return null!=(r=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:1,column:0},end:{line:30,column:9}}}))?r:""},useData:!0});function o(){r.refs.galleryLibraryEl.innerHTML="",r.refs.btnWatched.classList.remove("active-lbr"),r.refs.btnQueue.classList.add("active-lbr");var e=JSON.parse(localStorage.getItem("Add-to-queue"));e&&e.length?(r.refs.noCard.classList.add("visually-hidden"),e&&d(e)):r.refs.noCard.classList.remove("visually-hidden")}function d(e){var t=e.map((function(e){var t=e.genres.map((function(e){return e.name})).join(", "),n=e.vote_average.toFixed(1),a=e.release_date.slice(0,4);return{poster_path:e.poster_path,title:e.title,id:e.id,name:e.name,genreVoit:n,original_title:e.original_title,genreFilmStr:t,year:a}}));r.refs.galleryLibraryEl.innerHTML=s(t)}function c(){r.refs.galleryLibraryEl.innerHTML="",r.refs.btnQueue.classList.remove("active-lbr"),r.refs.btnWatched.classList.add("active-lbr");var e=JSON.parse(localStorage.getItem("Add-to-watched"));e&&e.length?(r.refs.noCard.classList.add("visually-hidden"),d(e)):r.refs.noCard.classList.remove("visually-hidden")}r.refs.btnQueue.addEventListener("click",o),r.refs.btnWatched.addEventListener("click",c),c(),l("j1Fxp"),l("lfkk0");var u=l("8nrFW"),m=(r=l("cFfKp"),l("ey2l5"));r.refs.galleryLibraryEl.addEventListener("click",(function(e){if(e.preventDefault(),"DIV"===e.target.nodeName)return;r.refs.filmCardEl.innerHTML="",document.body.classList.add("body-is-hidden"),r.refs.filmCardEl.innerHTML="",document.body.classList.add("body-is-hidden"),r.refs.modalFilmBtnClose.addEventListener("click",L),document.addEventListener("keydown",b),r.refs.modalBackdrop.addEventListener("click",y);var t=e.target.id;return function(e){g=JSON.parse(localStorage.getItem("Add-to-watched")),v=JSON.parse(localStorage.getItem("Add-to-queue")),e=Number(e),f=e,g&&(g.find((function(t){return t.id===e}))?r.refs.btnAddToWatch.textContent="Remove Film":r.refs.btnAddToWatch.textContent="Add to watched");v&&(v.find((function(t){return t.id===e}))?r.refs.btnAddToaddToQueue.textContent="Remove Film":r.refs.btnAddToaddToQueue.textContent="Add to queue");r.refs.modalBackdrop.classList.add("active"),r.refs.modalFilm.classList.add("active"),g&&g.find((function(t){if(t.id===e)return h.saveOpened(t),_(t)}));v&&v.find((function(t){if(t.id===e)return h.saveOpened(t),_(t)}))}(t),t})),r.refs.btnAddToWatch.addEventListener("click",p),r.refs.btnAddToaddToQueue.addEventListener("click",p);var f="",g="",v="",h={filmOpened:NaN,saveOpened:function(e){this.filmOpened=e}};function p(t){if("film-card-addToWatched"===t.target.classList.value&&"Add-to-watched","film-card-addToQueue"===t.target.classList.value&&"Add-to-queue","Remove Film"===t.target.textContent){if("film-card-addToWatched"===t.target.classList.value){var n=JSON.parse(localStorage.getItem("Add-to-watched")),a=n.findIndex((function(e){return e.id===f}));n.splice(a,1);return localStorage.setItem("Add-to-watched",JSON.stringify(n)),t.target.textContent="Add to watched",r.refs.btnWatched.classList.contains("active-lbr")?c():r.refs.btnQueue.classList.contains("active-lbr")?o():void 0}if("film-card-addToQueue"===t.target.classList.value){var l=JSON.parse(localStorage.getItem("Add-to-queue")),i=l.findIndex((function(e){return e.id===f}));l.splice(i,1);return localStorage.setItem("Add-to-queue",JSON.stringify(l)),t.target.textContent="Add to queue",r.refs.btnWatched.classList.contains("active-lbr")?c():r.refs.btnQueue.classList.contains("active-lbr")?o():void 0}if("film-card-addToQueue"===t.target.classList.value){var s=JSON.parse(localStorage.getItem("Add-to-queue")),d=s.findIndex((function(e){return e.id===f}));s.splice(d,1);return localStorage.setItem("Add-to-queue",JSON.stringify(s)),t.target.textContent="Add to queue",r.refs.btnWatched.classList.contains("active-lbr")?c():r.refs.btnQueue.classList.contains("active-lbr")?o():void 0}}if("Add to queue"===t.target.textContent.trim()){var m=h.filmOpened,g=JSON.parse(localStorage.getItem("Add-to-queue")),v=e(u)(g).concat([m]);return localStorage.setItem("Add-to-queue",JSON.stringify(v)),t.target.textContent="Remove Film",r.refs.btnWatched.classList.contains("active-lbr")?c():r.refs.btnQueue.classList.contains("active-lbr")?o():void 0}if("Add to watched"===t.target.textContent){var p=h.filmOpened,L=JSON.parse(localStorage.getItem("Add-to-watched")),b=e(u)(L).concat([p]);if(localStorage.setItem("Add-to-watched",JSON.stringify(b)),t.target.textContent="Remove Film",r.refs.btnWatched.classList.contains("active-lbr"))return c();if(r.refs.btnQueue.classList.contains("active-lbr"))return o()}}function L(){r.refs.modalBackdrop.classList.remove("active"),r.refs.modalFilm.classList.remove("active"),document.body.classList.remove("body-is-hidden"),r.refs.modalFilmBtnClose.removeEventListener("click",L),document.removeEventListener("keydown",b),r.refs.modalBackdrop.removeEventListener("click",y)}function b(e){"Escape"===e.code&&L()}function y(e){e.target===r.refs.modalBackdrop&&L()}function _(e){var t=e.genres.map((function(e){return e.name})).join(", "),n=e.vote_average.toFixed(1),a=Math.round(e.popularity),l={poster_path:e.poster_path,title:e.title,id:e.id,name:e.name,genreVoit:n,vote_count:e.vote_count,genrePopularity:a,original_title:e.original_title,genreStr:t,overview:e.overview};return r.refs.filmCardEl.innerHTML=(0,m.default)(l)}r=l("cFfKp");"night_moon"===localStorage.getItem("theme")?(r.refs.nightIcon.classList.remove("night_color"),r.refs.dayIcon.classList.add("day_color"),r.refs.bgImg.classList.add("bg-img-night"),r.refs.galleryLibraryEl.classList.add("night-thema"),r.refs.modalFilm.classList.add("modal-thems-night"),r.refs.modalfilmBgEl.classList.add("modal-thems-night")):(r.refs.nightIcon.classList.add("night_color"),r.refs.dayIcon.classList.remove("day_color")),r.refs.nightBtn.addEventListener("click",(function(){r.refs.nightIcon.classList.remove("night_color"),r.refs.dayIcon.classList.add("day_color"),localStorage.setItem("theme","night_moon"),r.refs.modalFilm.classList.add("modal-thems-night"),r.refs.galleryLibraryEl.classList.add("night-thema"),r.refs.modalfilmBgEl.classList.add("modal-thems-night"),r.refs.bgImg.classList.add("bg-img-night")})),r.refs.dayBtn.addEventListener("click",(function(){r.refs.nightIcon.classList.add("night_color"),r.refs.dayIcon.classList.remove("day_color"),localStorage.setItem("theme","day_sun"),r.refs.bgImg.classList.remove("bg-img-night"),r.refs.modalFilm.classList.remove("modal-thems-night"),r.refs.galleryLibraryEl.classList.remove("night-thema"),r.refs.modalfilmBgEl.classList.remove("modal-thems-night")}))}();
//# sourceMappingURL=library.a68d46e6.js.map
