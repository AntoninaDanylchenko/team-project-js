!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired7c6=l),l("8BR1R");var r=l("hKHmD"),i=l("cFfKp"),s=l("l5bVx"),o=e(l("WMajR")).template({1:function(t,n,a,l,r){var i,o=null!=n?n:t.nullContext||{},d=t.hooks.helperMissing,c="function",u=t.escapeExpression,m=t.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"  <div class='library-wraper'>\n    <a\n      class='library-gallery__item'\n      href='#'\n      target='_blank'\n      rel='noopener noreferrer'\n    >\n\n      <img\n        src='"+u((void 0===(i=null!=(i=m(a,"poster_path")||(null!=n?m(n,"poster_path"):n))?i:d)?"undefined":e(s)(i))===c?i.call(o,{name:"poster_path",hash:{},data:r,loc:{start:{line:11,column:13},end:{line:11,column:28}}}):i)+"'\n        class='library-card__img'\n        alt='"+u((void 0===(i=null!=(i=m(a,"title")||(null!=n?m(n,"title"):n))?i:d)?"undefined":e(s)(i))===c?i.call(o,{name:"title",hash:{},data:r,loc:{start:{line:13,column:13},end:{line:13,column:22}}}):i)+u((void 0===(i=null!=(i=m(a,"name")||(null!=n?m(n,"name"):n))?i:d)?"undefined":e(s)(i))===c?i.call(o,{name:"name",hash:{},data:r,loc:{start:{line:13,column:22},end:{line:13,column:30}}}):i)+"'\n        id='"+u((void 0===(i=null!=(i=m(a,"id")||(null!=n?m(n,"id"):n))?i:d)?"undefined":e(s)(i))===c?i.call(o,{name:"id",hash:{},data:r,loc:{start:{line:14,column:12},end:{line:14,column:18}}}):i)+"' loading=\"lazy\"\n      />\n      <div class='library-info'>\n        <h3 class='library-info__title'>"+u((void 0===(i=null!=(i=m(a,"title")||(null!=n?m(n,"title"):n))?i:d)?"undefined":e(s)(i))===c?i.call(o,{name:"title",hash:{},data:r,loc:{start:{line:17,column:40},end:{line:17,column:49}}}):i)+u((void 0===(i=null!=(i=m(a,"name")||(null!=n?m(n,"name"):n))?i:d)?"undefined":e(s)(i))===c?i.call(o,{name:"name",hash:{},data:r,loc:{start:{line:17,column:49},end:{line:17,column:57}}}):i)+"</h3>\n        <div class='wrap-library'>\n          <p class='library-info__genre'>"+u((void 0===(i=null!=(i=m(a,"genreFilmStr")||(null!=n?m(n,"genreFilmStr"):n))?i:d)?"undefined":e(s)(i))===c?i.call(o,{name:"genreFilmStr",hash:{},data:r,loc:{start:{line:19,column:41},end:{line:19,column:57}}}):i)+"\n            |\n            "+u((void 0===(i=null!=(i=m(a,"year")||(null!=n?m(n,"year"):n))?i:d)?"undefined":e(s)(i))===c?i.call(o,{name:"year",hash:{},data:r,loc:{start:{line:21,column:12},end:{line:21,column:20}}}):i)+"</p>\n          <span class='film-rating'>"+u((void 0===(i=null!=(i=m(a,"genreVoit")||(null!=n?m(n,"genreVoit"):n))?i:d)?"undefined":e(s)(i))===c?i.call(o,{name:"genreVoit",hash:{},data:r,loc:{start:{line:22,column:36},end:{line:22,column:49}}}):i)+"</span>\n        </div>\n\n      </div>\n    </a>\n\n  </div>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,l){var r;return null!=(r=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:1,column:0},end:{line:29,column:9}}}))?r:""},useData:!0});function d(){i.refs.galleryLibraryEl.innerHTML="",i.refs.btnWatched.classList.remove("active-lbr"),i.refs.btnQueue.classList.add("active-lbr");var e=JSON.parse(localStorage.getItem("Add-to-queue"));e&&e.length?(i.refs.noCard.classList.add("visually-hidden"),e&&c(e)):i.refs.noCard.classList.remove("visually-hidden")}function c(t){var n=t.map((function(t){var n,a=t.genres.map((function(e){return e.name})).join(", "),l=t.vote_average.toFixed(1),i=t.release_date.slice(0,4);return n={poster_path:t.poster_path,title:t.title,id:t.id},e(r)(n,"title",t.title),e(r)(n,"name",t.name),e(r)(n,"genreVoit",l),e(r)(n,"original_title",t.original_title),e(r)(n,"genreFilmStr",a),e(r)(n,"year",i),n}));i.refs.galleryLibraryEl.innerHTML=o(n)}function u(){i.refs.galleryLibraryEl.innerHTML="",i.refs.btnQueue.classList.remove("active-lbr"),i.refs.btnWatched.classList.add("active-lbr");var e=JSON.parse(localStorage.getItem("Add-to-watched"));e&&e.length?(i.refs.noCard.classList.add("visually-hidden"),c(e)):i.refs.noCard.classList.remove("visually-hidden")}i.refs.btnQueue.addEventListener("click",d),i.refs.btnWatched.addEventListener("click",u),u(),l("j1Fxp"),l("lfkk0");var m=l("8nrFW"),f=(i=l("cFfKp"),l("ey2l5"));i.refs.galleryLibraryEl.addEventListener("click",(function(e){if(e.preventDefault(),"DIV"===e.target.nodeName)return;i.refs.filmCardEl.innerHTML="",document.body.classList.add("body-is-hidden"),i.refs.filmCardEl.innerHTML="",document.body.classList.add("body-is-hidden"),i.refs.modalFilmBtnClose.addEventListener("click",b),document.addEventListener("keydown",y),i.refs.modalBackdrop.addEventListener("click",_);var t=e.target.id;return function(e){v=JSON.parse(localStorage.getItem("Add-to-watched")),h=JSON.parse(localStorage.getItem("Add-to-queue")),e=Number(e),g=e,v&&(v.find((function(t){return t.id===e}))?i.refs.btnAddToWatch.textContent="Remove Film":i.refs.btnAddToWatch.textContent="Add to watched");h&&(h.find((function(t){return t.id===e}))?i.refs.btnAddToaddToQueue.textContent="Remove Film":i.refs.btnAddToaddToQueue.textContent="Add to queue");i.refs.modalBackdrop.classList.add("active"),i.refs.modalFilm.classList.add("active"),v&&v.find((function(t){if(t.id===e)return p.saveOpened(t),S(t)}));h&&h.find((function(t){if(t.id===e)return p.saveOpened(t),S(t)}))}(t),t})),i.refs.btnAddToWatch.addEventListener("click",L),i.refs.btnAddToaddToQueue.addEventListener("click",L);var g="",v="",h="",p={filmOpened:NaN,saveOpened:function(e){this.filmOpened=e}};function L(t){if("film-card-addToWatched"===t.target.classList.value&&"Add-to-watched","film-card-addToQueue"===t.target.classList.value&&"Add-to-queue","Remove Film"===t.target.textContent){if("film-card-addToWatched"===t.target.classList.value){var n=JSON.parse(localStorage.getItem("Add-to-watched")),a=n.findIndex((function(e){return e.id===g}));n.splice(a,1);return localStorage.setItem("Add-to-watched",JSON.stringify(n)),t.target.textContent="Add to watched",i.refs.btnWatched.classList.contains("active-lbr")?u():i.refs.btnQueue.classList.contains("active-lbr")?d():void 0}if("film-card-addToQueue"===t.target.classList.value){var l=JSON.parse(localStorage.getItem("Add-to-queue")),r=l.findIndex((function(e){return e.id===g}));l.splice(r,1);return localStorage.setItem("Add-to-queue",JSON.stringify(l)),t.target.textContent="Add to queue",i.refs.btnWatched.classList.contains("active-lbr")?u():i.refs.btnQueue.classList.contains("active-lbr")?d():void 0}if("film-card-addToQueue"===t.target.classList.value){var s=JSON.parse(localStorage.getItem("Add-to-queue")),o=s.findIndex((function(e){return e.id===g}));s.splice(o,1);return localStorage.setItem("Add-to-queue",JSON.stringify(s)),t.target.textContent="Add to queue",i.refs.btnWatched.classList.contains("active-lbr")?u():i.refs.btnQueue.classList.contains("active-lbr")?d():void 0}}if("Add to queue"===t.target.textContent.trim()){var c=p.filmOpened,f=JSON.parse(localStorage.getItem("Add-to-queue")),v=e(m)(f).concat([c]);return localStorage.setItem("Add-to-queue",JSON.stringify(v)),t.target.textContent="Remove Film",i.refs.btnWatched.classList.contains("active-lbr")?u():i.refs.btnQueue.classList.contains("active-lbr")?d():void 0}if("Add to watched"===t.target.textContent){var h=p.filmOpened,L=JSON.parse(localStorage.getItem("Add-to-watched")),b=e(m)(L).concat([h]);if(localStorage.setItem("Add-to-watched",JSON.stringify(b)),t.target.textContent="Remove Film",i.refs.btnWatched.classList.contains("active-lbr"))return u();if(i.refs.btnQueue.classList.contains("active-lbr"))return d()}}function b(){i.refs.modalBackdrop.classList.remove("active"),i.refs.modalFilm.classList.remove("active"),document.body.classList.remove("body-is-hidden"),i.refs.modalFilmBtnClose.removeEventListener("click",b),document.removeEventListener("keydown",y),i.refs.modalBackdrop.removeEventListener("click",_)}function y(e){"Escape"===e.code&&b()}function _(e){e.target===i.refs.modalBackdrop&&b()}function S(e){var t=e.genres.map((function(e){return e.name})).join(", "),n=e.vote_average.toFixed(1),a=Math.round(e.popularity),l={poster_path:e.poster_path,title:e.title,id:e.id,name:e.name,genreVoit:n,vote_count:e.vote_count,genrePopularity:a,original_title:e.original_title,genreStr:t,overview:e.overview};return i.refs.filmCardEl.innerHTML=(0,f.default)(l)}i=l("cFfKp");"night_moon"===localStorage.getItem("theme")?(i.refs.nightIcon.classList.remove("night_color"),i.refs.dayIcon.classList.add("day_color"),i.refs.bgImg.classList.add("bg-img-night"),i.refs.galleryLibraryEl.classList.add("night-thema"),i.refs.modalFilm.classList.add("modal-thems-night"),i.refs.modalfilmBgEl.classList.add("modal-thems-night")):(i.refs.nightIcon.classList.add("night_color"),i.refs.dayIcon.classList.remove("day_color")),i.refs.nightBtn.addEventListener("click",(function(){i.refs.nightIcon.classList.remove("night_color"),i.refs.dayIcon.classList.add("day_color"),localStorage.setItem("theme","night_moon"),i.refs.modalFilm.classList.add("modal-thems-night"),i.refs.galleryLibraryEl.classList.add("night-thema"),i.refs.modalfilmBgEl.classList.add("modal-thems-night"),i.refs.bgImg.classList.add("bg-img-night")})),i.refs.dayBtn.addEventListener("click",(function(){i.refs.nightIcon.classList.add("night_color"),i.refs.dayIcon.classList.remove("day_color"),localStorage.setItem("theme","day_sun"),i.refs.bgImg.classList.remove("bg-img-night"),i.refs.modalFilm.classList.remove("modal-thems-night"),i.refs.galleryLibraryEl.classList.remove("night-thema"),i.refs.modalfilmBgEl.classList.remove("modal-thems-night")}))}();
//# sourceMappingURL=library.0190cde8.js.map
