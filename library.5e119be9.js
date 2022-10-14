!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},r=n.parcelRequired76b;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},n.parcelRequired76b=r),r.register("cJBkb",(function(t,n){e(t.exports,"openModalFooter",(function(){return a}));var o={overlay:document.querySelector(".modal-footer-overlay"),modalFooter:document.querySelector(".modal-footer"),modalBtnClose:document.querySelector(".js-modal-close")};function a(){o.overlay.classList.add("active"),o.modalFooter.classList.add("active"),document.body.classList.add("modal-is-open"),document.body.addEventListener("keydown",r),o.overlay.addEventListener("click",i),o.modalBtnClose.addEventListener("click",i)}function r(e){"Escape"===e.code&&i()}function i(){document.querySelector(".modal-footer.active").classList.remove("active"),document.querySelector(".modal-footer-overlay").classList.remove("active"),document.body.classList.remove("modal-is-open")}})),r.register("jGe89",(function(t,n){e(t.exports,"openModal",(function(){return l}));var o=r("8HZsX"),a=r("7M2tn"),i=r("gQxnC"),c=document.querySelector(".cross"),s=document.querySelector(".backdrop"),d=document.querySelector(".modal-container");function l(e){if(e.target.classList.contains("filmoteka__item")){var t,n,o,a,r,l,m,g,y,_,h,L,w=+e.target.dataset.id;t=w,n=i.default.load("currentPage").find((function(e){return e.id===t})),o=n.id,a=n.title,r=n.originalTitle,l=n.genres,m=n.popularity,g=n.overview,y=n.rating,_=n.voteCount,h=n.imgPath,L='\n  <div class="modal-img-container">\n  <img\n    class="modal-img"\n    src="'.concat(h,'"\n    alt="').concat(a,'"\n    width="370"\n    height="470"\n  />\n</div>\n<div class="film-info">\n  <h2 class="film-name">').concat(a,'</h2>\n  <table class="modal-table">\n    <tr class="modal-table__row">\n      <td><p class="modal-table__attribute">Vote / Votes</p></td>\n      <td>\n        <p class="modal-table__value">\n          <span class="modal-table__vote">').concat(y,'</span> /\n          <span class="modal-table__votes">').concat(_,'</span>\n        </p>\n      </td>\n    </tr>\n    <tr class="modal-table__row">\n      <td><p class="modal-table__attribute">Popularity</p></td>\n      <td><p class="modal-table__value">').concat(m,'</p></td>\n    </tr>\n    <tr class="modal-table__row">\n      <td><p class="modal-table__attribute">Original Title</p></td>\n      <td><p class="modal-table__value">').concat(r,'</p></td>\n    </tr>\n    <tr class="modal-table__row">\n      <td><p class="modal-table__attribute">Genre</p></td>\n      <td><p class="modal-table__value">').concat(l||"",'</p></td>\n    </tr>\n  </table>\n\n  <h3 class="film-about">About</h3>\n  <p class="film-description">\n    ').concat(g,'\n  </p>\n  <div class="modal-btn-wrap">\n    <button type="button" class="modal-btn js-watch" data-id="').concat(o,'">ADD TO WATCHED</button>\n    <button type="button" class="modal-btn js-queue" data-id="').concat(o,'">ADD TO QUEUE</button>\n  </div>\n</div>'),d.insertAdjacentHTML("beforeend",L),function(e){var t,n,o=document.querySelector(".js-watch"),a=document.querySelector(".js-queue");o.addEventListener("click",u),a.addEventListener("click",f);var r=i.default.load("watched"),c=i.default.load("queued");r&&(n=!!r.find((function(t){return t.id==e}))),c&&(t=!!c.find((function(t){return t.id==e}))),n&&(o.classList.add("watched"),o.innerText="WATCHED"),t&&(a.classList.add("queued"),a.innerText="QUEUED")}(t),s.classList.remove("is-hidden"),document.body.style.overflow="hidden",(c=document.querySelector(".cross")).addEventListener("click",v),s.addEventListener("click",b),window.addEventListener("keydown",p)}}function u(e){var t=e.target.dataset.id,n=document.querySelector(".js-watch");if(!n.classList.contains("watched"))return(0,a.addMovieToLib)(t,"watched"),n.classList.add("watched"),n.innerText="WATCHED",void m();n.classList.remove("watched"),n.innerText="ADD TO WATCHED",(0,a.removeMovieFromLib)(t,"watched"),m()}function f(e){var t=e.target.dataset.id,n=document.querySelector(".js-queue");if(!n.classList.contains("queued"))return(0,a.addMovieToLib)(t,"queued"),n.classList.add("queued"),n.innerText="QUEUED",void m();n.classList.remove("queued"),n.innerText="ADD TO QUEUE",(0,a.removeMovieFromLib)(t,"queued"),m()}function m(){if(window.location.href.indexOf("library")>-1){var e=document.querySelector("#btnQueued").classList.contains("active-btn")?"queued":"watched";(0,o.libraryRender)(e)}}function v(){s.classList.add("is-hidden"),document.body.style.overflow="",s.removeEventListener("click",b),c.removeEventListener("click",v),window.removeEventListener("keydown",p),d.innerHTML='<button type="button" class="cross">+</button>'}function p(e){"Escape"===e.code&&v()}function b(e){e.target.classList.contains("backdrop")&&v()}})),r.register("8HZsX",(function(t,n){e(t.exports,"libraryRender",(function(){return c}));var o=r("gQxnC"),a=r("gzo5i"),i=document.querySelector(".background-wrapper");function c(e){var t=document.querySelector(".filmoteka__container"),n=o.default.load(e);if(!n)return t.innerHTML='<div><p2 class="empty_text">It seems that there is no films here!</p2></div>',void i.classList.remove("no-display");(0,a.renderItems)(n),i.classList.add("no-display")}})),r.register("gQxnC",(function(t,n){e(t.exports,"default",(function(){return o}));var o={save:function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(t){console.log("Error during saving ".concat(e," to local strage; "),t.message)}},load:function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(t){console.log("Error during getting ".concat(e," from localStorage: "),t.message)}},del:function(e){try{localStorage.removeItem(e)}catch(t){console.log("Error during deleting ".concat(e,"! from localStorage: "),t.message)}}}})),r.register("gzo5i",(function(t,n){function o(e){var t=document.querySelector(".filmoteka__container"),n=e.map((function(e){var t=e.id,n=e.title,o=e.year,a=e.genres,r=e.rating,i=e.imgPath;if(a)for(var c=(a.match(/\,/g)||[]).length;c>1;)c=((a=a.slice(0,a.lastIndexOf(","))+"npm ...").match(/\,/g)||[]).length;var s='\n         <div class="filmoteka__item" data-id="'.concat(t,'">\n              <div class="filmoteka__item-wrapper">\n                  <img class="filmoteka-img" src="').concat(i,'" alt="">\n                  <div class="overlay-text">\n                      <h2 class="subtitle">').concat(n,'</h2>\n                      <p class="discription">');return a&&(s+="".concat(a," "),o&&(s+="|")),o&&(s+='<span class="filmoteka__year"> '.concat(o,"</span>")),s+=' </p>\n                      <div class="filmoteka__rating">'.concat(r,"</div>\n                  </div>\n              </div>\n      </div>")}));t.innerHTML="",t.insertAdjacentHTML("beforeend",n.join(""))}e(t.exports,"renderItems",(function(){return o}))})),r.register("7M2tn",(function(t,n){e(t.exports,"removeMovieFromLib",(function(){return a})),e(t.exports,"addMovieToLib",(function(){return i}));var o=r("gQxnC");function a(e,t){var n=o.default.load(t).filter((function(t){return t.id!==+e}));n=n.length>0?n:null,o.default.save(t,n)}function i(e,t){var n=o.default.load(t),a=o.default.load("currentPage").find((function(t){return t.id==e}));n?n.push(a):n=[a],o.default.save(t,n)}})),r.register("4FHbW",(function(t,n){function o(){var e=document.querySelector(".back_to_top");window.addEventListener("scroll",(function(){var t=window.pageYOffset,n=document.documentElement.clientHeight;t>n&&e.classList.add("back_to_top-show"),t<n&&e.classList.remove("back_to_top-show")})),e.addEventListener("click",(function e(){window.pageYOffset>0&&(window.scroll({top:0,behavior:"smooth"}),setTimeout(e,1e3))}))}e(t.exports,"default",(function(){return o}))})),r.register("hBZCD",(function(n,o){e(n.exports,"default",(function(){return c}));var a=r("8MBJY"),i=r("a2hTj"),c=function(){"use strict";function e(){t(a)(this,e)}return t(i)(e,[{key:"spinOn",value:function(){var e=document.getElementById("spinner");e.classList.contains("done")&&e.classList.remove("done")}},{key:"spinOff",value:function(){setTimeout((function(){var e=document.getElementById("spinner");e.classList.contains("done")||e.classList.add("done")}),500)}}]),e}()})),r.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),r.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,o){t&&n(e.prototype,t);o&&n(e,o);return e}}))}();
//# sourceMappingURL=library.5e119be9.js.map
