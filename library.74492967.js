function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var l={id:e,exports:{}};return a[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=l),l("8IXMh");var r=l("ewTWP");var s=e(l("amrNH")).template({1:function(e,t,a,n,l){var r,s=null!=t?t:e.nullContext||{},i=e.hooks.helperMissing,o="function",d=e.escapeExpression,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"  <div class='library-wraper'>\n    <a\n      class='library-gallery__item'\n      href='#'\n      target='_blank'\n      rel='noopener noreferrer'\n      aria-label=\"library__item\"\n    >\n\n      <img\n        src='"+d(typeof(r=null!=(r=c(a,"poster_path")||(null!=t?c(t,"poster_path"):t))?r:i)===o?r.call(s,{name:"poster_path",hash:{},data:l,loc:{start:{line:12,column:13},end:{line:12,column:28}}}):r)+"'\n        class='library-card__img'\n        alt='"+d(typeof(r=null!=(r=c(a,"title")||(null!=t?c(t,"title"):t))?r:i)===o?r.call(s,{name:"title",hash:{},data:l,loc:{start:{line:14,column:13},end:{line:14,column:22}}}):r)+d(typeof(r=null!=(r=c(a,"name")||(null!=t?c(t,"name"):t))?r:i)===o?r.call(s,{name:"name",hash:{},data:l,loc:{start:{line:14,column:22},end:{line:14,column:30}}}):r)+"'\n        id='"+d(typeof(r=null!=(r=c(a,"id")||(null!=t?c(t,"id"):t))?r:i)===o?r.call(s,{name:"id",hash:{},data:l,loc:{start:{line:15,column:12},end:{line:15,column:18}}}):r)+"' loading=\"lazy\"\n      />\n      <div class='library-info'>\n        <h3 class='library-info__title'>"+d(typeof(r=null!=(r=c(a,"title")||(null!=t?c(t,"title"):t))?r:i)===o?r.call(s,{name:"title",hash:{},data:l,loc:{start:{line:18,column:40},end:{line:18,column:49}}}):r)+d(typeof(r=null!=(r=c(a,"name")||(null!=t?c(t,"name"):t))?r:i)===o?r.call(s,{name:"name",hash:{},data:l,loc:{start:{line:18,column:49},end:{line:18,column:57}}}):r)+"</h3>\n        <div class='wrap-library'>\n          <p class='library-info__genre'>"+d(typeof(r=null!=(r=c(a,"genreFilmStr")||(null!=t?c(t,"genreFilmStr"):t))?r:i)===o?r.call(s,{name:"genreFilmStr",hash:{},data:l,loc:{start:{line:20,column:41},end:{line:20,column:57}}}):r)+"\n            |\n            "+d(typeof(r=null!=(r=c(a,"year")||(null!=t?c(t,"year"):t))?r:i)===o?r.call(s,{name:"year",hash:{},data:l,loc:{start:{line:22,column:12},end:{line:22,column:20}}}):r)+"</p>\n          <span class='film-rating'>"+d(typeof(r=null!=(r=c(a,"genreVoit")||(null!=t?c(t,"genreVoit"):t))?r:i)===o?r.call(s,{name:"genreVoit",hash:{},data:l,loc:{start:{line:23,column:36},end:{line:23,column:49}}}):r)+"</span>\n        </div>\n\n      </div>\n    </a>\n\n  </div>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,a,n,l){var r;return null!=(r=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(a,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:1,column:0},end:{line:30,column:9}}}))?r:""},useData:!0});function i(){r.refs.galleryLibraryEl.innerHTML="",r.refs.btnWatched.classList.remove("active-lbr"),r.refs.btnQueue.classList.add("active-lbr");const e=JSON.parse(localStorage.getItem("Add-to-queue"));e&&e.length?(r.refs.noCard.classList.add("visually-hidden"),e&&o(e)):r.refs.noCard.classList.remove("visually-hidden")}function o(e){const t=e.map((e=>{const t=e.genres.map((e=>e.name)).join(", "),a=e.vote_average.toFixed(1),n=e.release_date.slice(0,4);return{poster_path:e.poster_path,title:e.title,id:e.id,name:e.name,genreVoit:a,original_title:e.original_title,genreFilmStr:t,year:n}}));r.refs.galleryLibraryEl.innerHTML=s(t)}function d(){r.refs.galleryLibraryEl.innerHTML="",r.refs.btnQueue.classList.remove("active-lbr"),r.refs.btnWatched.classList.add("active-lbr");const e=JSON.parse(localStorage.getItem("Add-to-watched"));e&&e.length?(r.refs.noCard.classList.add("visually-hidden"),o(e)):r.refs.noCard.classList.remove("visually-hidden")}r.refs.btnQueue.addEventListener("click",i),r.refs.btnWatched.addEventListener("click",d),d(),l("2YGUk"),l("3J1up");r=l("ewTWP");var c=l("lgp3Q");r.refs.galleryLibraryEl.addEventListener("click",(function(e){if(e.preventDefault(),"DIV"===e.target.nodeName)return;r.refs.filmCardEl.innerHTML="",document.body.classList.add("body-is-hidden"),r.refs.filmCardEl.innerHTML="",document.body.classList.add("body-is-hidden"),r.refs.modalFilmBtnClose.addEventListener("click",v),document.addEventListener("keydown",p),r.refs.modalBackdrop.addEventListener("click",L);const t=e.target.id;return function(e){u=JSON.parse(localStorage.getItem("Add-to-watched")),f=JSON.parse(localStorage.getItem("Add-to-queue")),e=Number(e),m=e,u&&(u.find((t=>t.id===e))?r.refs.btnAddToWatch.textContent="Remove Film":r.refs.btnAddToWatch.textContent="Add to watched");f&&(f.find((t=>t.id===e))?r.refs.btnAddToaddToQueue.textContent="Remove Film":r.refs.btnAddToaddToQueue.textContent="Add to queue");r.refs.modalBackdrop.classList.add("active"),r.refs.modalFilm.classList.add("active"),u&&u.find((t=>{if(t.id===e)return g.saveOpened(t),y(t)}));f&&f.find((t=>{if(t.id===e)return g.saveOpened(t),y(t)}))}(t),t})),r.refs.btnAddToWatch.addEventListener("click",h),r.refs.btnAddToaddToQueue.addEventListener("click",h);let m="",u="",f="";const g={filmOpened:NaN,saveOpened(e){this.filmOpened=e}};function h(e){let t="";if("film-card-addToWatched"===e.target.classList.value&&(t="Add-to-watched"),"film-card-addToQueue"===e.target.classList.value&&(t="Add-to-queue"),"Remove Film"===e.target.textContent){if("film-card-addToWatched"===e.target.classList.value){const t=JSON.parse(localStorage.getItem("Add-to-watched")),a=t.findIndex((e=>e.id===m));t.splice(a,1);return localStorage.setItem("Add-to-watched",JSON.stringify(t)),e.target.textContent="Add to watched",r.refs.btnWatched.classList.contains("active-lbr")?d():r.refs.btnQueue.classList.contains("active-lbr")?i():void 0}if("film-card-addToQueue"===e.target.classList.value){const t=JSON.parse(localStorage.getItem("Add-to-queue")),a=t.findIndex((e=>e.id===m));t.splice(a,1);return localStorage.setItem("Add-to-queue",JSON.stringify(t)),e.target.textContent="Add to queue",r.refs.btnWatched.classList.contains("active-lbr")?d():r.refs.btnQueue.classList.contains("active-lbr")?i():void 0}if("film-card-addToQueue"===e.target.classList.value){const t=JSON.parse(localStorage.getItem("Add-to-queue")),a=t.findIndex((e=>e.id===m));t.splice(a,1);return localStorage.setItem("Add-to-queue",JSON.stringify(t)),e.target.textContent="Add to queue",r.refs.btnWatched.classList.contains("active-lbr")?d():r.refs.btnQueue.classList.contains("active-lbr")?i():void 0}}if("Add to queue"===e.target.textContent.trim()){const t=g.filmOpened,a=[...JSON.parse(localStorage.getItem("Add-to-queue")),t];return localStorage.setItem("Add-to-queue",JSON.stringify(a)),e.target.textContent="Remove Film",r.refs.btnWatched.classList.contains("active-lbr")?d():r.refs.btnQueue.classList.contains("active-lbr")?i():void 0}if("Add to watched"===e.target.textContent){const t=g.filmOpened,a=[...JSON.parse(localStorage.getItem("Add-to-watched")),t];if(localStorage.setItem("Add-to-watched",JSON.stringify(a)),e.target.textContent="Remove Film",r.refs.btnWatched.classList.contains("active-lbr"))return d();if(r.refs.btnQueue.classList.contains("active-lbr"))return i()}}function v(){r.refs.modalBackdrop.classList.remove("active"),r.refs.modalFilm.classList.remove("active"),document.body.classList.remove("body-is-hidden"),r.refs.modalFilmBtnClose.removeEventListener("click",v),document.removeEventListener("keydown",p),r.refs.modalBackdrop.removeEventListener("click",L)}function p(e){"Escape"===e.code&&v()}function L(e){e.target===r.refs.modalBackdrop&&v()}function y(e){const t=e.genres.map((e=>e.name)).join(", "),a=e.vote_average.toFixed(1),n=Math.round(e.popularity),l={poster_path:e.poster_path,title:e.title,id:e.id,name:e.name,genreVoit:a,vote_count:e.vote_count,genrePopularity:n,original_title:e.original_title,genreStr:t,overview:e.overview};return r.refs.filmCardEl.innerHTML=(0,c.default)(l)}r=l("ewTWP");"night_moon"===localStorage.getItem("theme")?(r.refs.nightIcon.classList.remove("night_color"),r.refs.dayIcon.classList.add("day_color"),r.refs.bgImg.classList.add("bg-img-night"),r.refs.galleryLibraryEl.classList.add("night-thema"),r.refs.modalFilm.classList.add("modal-thems-night"),r.refs.modalfilmBgEl.classList.add("modal-thems-night")):(r.refs.nightIcon.classList.add("night_color"),r.refs.dayIcon.classList.remove("day_color")),r.refs.nightBtn.addEventListener("click",(()=>{r.refs.nightIcon.classList.remove("night_color"),r.refs.dayIcon.classList.add("day_color"),localStorage.setItem("theme","night_moon"),r.refs.modalFilm.classList.add("modal-thems-night"),r.refs.galleryLibraryEl.classList.add("night-thema"),r.refs.modalfilmBgEl.classList.add("modal-thems-night"),r.refs.bgImg.classList.add("bg-img-night")})),r.refs.dayBtn.addEventListener("click",(()=>{r.refs.nightIcon.classList.add("night_color"),r.refs.dayIcon.classList.remove("day_color"),localStorage.setItem("theme","day_sun"),r.refs.bgImg.classList.remove("bg-img-night"),r.refs.modalFilm.classList.remove("modal-thems-night"),r.refs.galleryLibraryEl.classList.remove("night-thema"),r.refs.modalfilmBgEl.classList.remove("modal-thems-night")}));
//# sourceMappingURL=library.74492967.js.map
