!function(){function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequired76b;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequired76b=o),o.register("iE7OH",(function(t,n){var a,o;e(t.exports,"register",(function(){return a}),(function(e){return a=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};a=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("cJBkb",(function(t,n){e(t.exports,"openModalFooter",(function(){return o}));const a={overlay:document.querySelector(".modal-footer-overlay"),modalFooter:document.querySelector(".modal-footer"),modalBtnClose:document.querySelector(".js-modal-close")};function o(){a.overlay.classList.add("active"),a.modalFooter.classList.add("active"),document.body.classList.add("modal-is-open"),document.body.addEventListener("keydown",i),a.overlay.addEventListener("click",r),a.modalBtnClose.addEventListener("click",r)}function i(e){"Escape"===e.code&&r()}function r(){document.querySelector(".modal-footer.active").classList.remove("active"),document.querySelector(".modal-footer-overlay").classList.remove("active"),document.body.classList.remove("modal-is-open")}})),o.register("jGe89",(function(t,n){e(t.exports,"openModal",(function(){return f}));var a=o("8HZsX"),i=o("7M2tn"),r=o("gQxnC"),l=o("3Tmrv"),s=o("6tjHf");let c=document.querySelector(".cross");const u=document.querySelector(".backdrop"),d=document.querySelector(".modal-container");let g,p;function f(e){if(!e.target.classList.contains("filmoteka__item"))return;!function(e){const t=r.default.load("currentPage").find((t=>t.id===e)),{id:n,title:a,originalTitle:o,genres:i,popularity:c,overview:u,rating:f,voteCount:b,imgPath:v}=t;let y;y="ua"==(0,s.langCurrent)()?`\n    <div class="modal-img-container">\n    <img\n      class="modal-img"\n      src="${v||l}"\n      alt="${a}"\n      width="370"\n      height="470"\n    />\n  </div>\n  <div class="film-info">\n    <h2 class="film-name">${a}</h2>\n    <table class="modal-table">\n      <tr class="modal-table__row">\n        <td><p class="modal-table__attribute">Оцінка / Оцінок</p></td>\n        <td>\n          <p class="modal-table__value">\n            <span class="modal-table__vote">${f}</span> /\n            <span class="modal-table__votes">${b}</span>\n          </p>\n        </td>\n      </tr>\n      <tr class="modal-table__row">\n        <td><p class="modal-table__attribute">Популярність</p></td>\n        <td><p class="modal-table__value">${c}</p></td>\n      </tr>\n      <tr class="modal-table__row">\n        <td><p class="modal-table__attribute">Оригінальна назва</p></td>\n        <td><p class="modal-table__value">${o}</p></td>\n      </tr>\n      <tr class="modal-table__row">\n        <td><p class="modal-table__attribute">Жанр</p></td>\n        <td><p class="modal-table__value">${i||""}</p></td>\n      </tr>\n    </table>\n  \n    <h3 class="film-about">Опис</h3>\n    <p class="film-description">\n      ${u}\n    </p>\n    <div class="modal-btn-wrap">\n      <button type="button" class="modal-btn js-watch" data-id="${n}">ДОДАТИ ДО ПЕРЕГЛЯНУТИХ</button>\n      <button type="button" class="modal-btn js-queue" data-id="${n}">ДОДАТИ ДО ЧЕРГИ</button>\n    </div>\n  </div>`:`\n    <div class="modal-img-container">\n    <img\n      class="modal-img"\n      src="${v||l}"\n      alt="${a}"\n      width="370"\n      height="470"\n    />\n  </div>\n  <div class="film-info">\n    <h2 class="film-name">${a}</h2>\n    <table class="modal-table">\n      <tr class="modal-table__row">\n        <td><p class="modal-table__attribute">Vote / Votes</p></td>\n        <td>\n          <p class="modal-table__value">\n            <span class="modal-table__vote">${f}</span> /\n            <span class="modal-table__votes">${b}</span>\n          </p>\n        </td>\n      </tr>\n      <tr class="modal-table__row">\n        <td><p class="modal-table__attribute">Popularity</p></td>\n        <td><p class="modal-table__value">${c}</p></td>\n      </tr>\n      <tr class="modal-table__row">\n        <td><p class="modal-table__attribute">Original Title</p></td>\n        <td><p class="modal-table__value">${o}</p></td>\n      </tr>\n      <tr class="modal-table__row">\n        <td><p class="modal-table__attribute">Genre</p></td>\n        <td><p class="modal-table__value">${i||""}</p></td>\n      </tr>\n    </table>\n  \n    <h3 class="film-about">About</h3>\n    <p class="film-description">\n      ${u}\n    </p>\n    <div class="modal-btn-wrap">\n      <button type="button" class="modal-btn js-watch" data-id="${n}">ADD TO WATCHED</button>\n      <button type="button" class="modal-btn js-queue" data-id="${n}">ADD TO QUEUE</button>\n    </div>\n  </div>`;d.insertAdjacentHTML("beforeend",y),function(e){const t=document.querySelector(".js-watch"),n=document.querySelector(".js-queue");t.addEventListener("click",m),n.addEventListener("click",_);let a=r.default.load("watched"),o=r.default.load("queued");a&&(p=!!a.find((t=>t.id==e)));o&&(g=!!o.find((t=>t.id==e)));p&&(t.classList.add("watched"),t.innerText="WATCHED");g&&(n.classList.add("queued"),n.innerText="QUEUED");"ua"==(0,s.langCurrent)()&&(0,s.translateModalBtns)(p,g)}(e)}(+e.target.dataset.id),u.classList.remove("is-hidden"),document.body.style.overflow="hidden",c=document.querySelector(".cross"),c.addEventListener("click",v),u.addEventListener("click",L),window.addEventListener("keydown",y)}function m(e){const t=e.target.dataset.id,n=document.querySelector(".js-watch");if(!n.classList.contains("watched"))return(0,i.addMovieToLib)(t,"watched"),n.classList.add("watched"),n.innerText="WATCHED",b(),"ua"==(0,s.langCurrent)()&&(0,s.translateModalBtns)(!0,g),void(p=!0);n.classList.remove("watched"),n.innerText="ADD TO WATCHED",(0,i.removeMovieFromLib)(t,"watched"),b(),p=!1,"ua"==(0,s.langCurrent)()&&(0,s.translateModalBtns)(!1,g)}function _(e){const t=e.target.dataset.id,n=document.querySelector(".js-queue");if(!n.classList.contains("queued"))return(0,i.addMovieToLib)(t,"queued"),n.classList.add("queued"),n.innerText="QUEUED","ua"==(0,s.langCurrent)()&&(0,s.translateModalBtns)(p,!0),b(),void(g=!0);n.classList.remove("queued"),n.innerText="ADD TO QUEUE",(0,i.removeMovieFromLib)(t,"queued"),g=!1,"ua"==(0,s.langCurrent)()&&(0,s.translateModalBtns)(p,!1),b()}function b(){if(window.location.href.indexOf("library")>-1){const e=document.querySelector("#btnQueued").classList.contains("active-btn")?"queued":"watched";(0,a.libraryRender)(e)}}function v(){u.classList.add("is-hidden"),document.body.style.overflow="",u.removeEventListener("click",L),c.removeEventListener("click",v),window.removeEventListener("keydown",y),d.innerHTML='<button type="button" class="cross">+</button>'}function y(e){"Escape"===e.code&&v()}function L(e){e.target.classList.contains("backdrop")&&v()}})),o.register("8HZsX",(function(t,n){e(t.exports,"pageCount",(function(){return g})),e(t.exports,"libraryRender",(function(){return p}));var a=o("gQxnC"),i=o("gzo5i"),r=o("4d5cY"),l=(r=o("4d5cY"),o("5S7aa")),s=o("6tjHf"),c=o("44qC2");const u=document.querySelector(".background-wrapper"),d={paginationLib:document.querySelector("#pagination")};let g;function p(e){const t=document.querySelector(".filmoteka__container");let n=a.default.load(e);if(!n)return u.classList.remove("no-display"),void("ua"==(0,s.langCurrent)()?t.innerHTML='<div><p2 class="empty_text">Схоже, ваша бібліотека порожня.</p2></div>':t.innerHTML='<div><p2 class="empty_text">It seems that there is no films here!</p2></div>');var o;o=n,g=Math.ceil(o.length/2),(0,c.isNone)();let p=function(e,t){const n=2;let a,o;1===t?(a=0,o=n):2===t?(a=n,o=2*n):(a=n*(t-1),o=n*t);let i=[];if(e.length>n)for(let t=a;t<o&&void 0!==e[t];t+=1)i.push(e[t]);else i=e;return i}(n,l.PAGE_LIBR);(0,i.renderItems)(p),a.default.save("currentPage",p),u.classList.add("no-display"),d.paginationLib.innerHTML="",g>1&&g<8?(0,r.adaptivPageLib)():1!==g&&(0,r.startPageLib)()}})),o.register("gQxnC",(function(t,n){e(t.exports,"loadlibrary",(function(){return a})),e(t.exports,"default",(function(){return o}));let a;var o={save:(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(t){console.log(`Error during saving ${e} to local strage; `,t.message)}},load:e=>{try{a=e;const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(t){console.log(`Error during getting ${e} from localStorage: `,t.message)}},del:e=>{try{localStorage.removeItem(e)}catch(t){console.log(`Error during deleting ${e}! from localStorage: `,t.message)}}}})),o.register("gzo5i",(function(t,n){e(t.exports,"renderItems",(function(){return r}));var a=o("3Tmrv"),i=o("lpZvY");function r(e){const t=document.querySelector(".filmoteka__container"),n=e.map((({id:e,title:t,year:n,genres:o,rating:i,imgPath:r})=>{if(o){let e=(o.match(/\,/g)||[]).length;for(;e>1;)e=((o=o.slice(0,o.lastIndexOf(","))+"...").match(/\,/g)||[]).length}let l=`\n         <div class="filmoteka__item" data-id="${e}">\n              <div class="filmoteka__item-wrapper">\n                  <img class="filmoteka-img" src="${r||a}" alt="${t}">\n                  <div class="overlay-text">\n                      <h2 class="subtitle">${t}</h2>\n                      <p class="discription">`;return o&&(l+=`${o} `,n&&(l+="|")),n&&(l+=`<span class="filmoteka__year"> ${n}</span>`),l+=` </p>\n                      <div class="filmoteka__rating">${i}</div>\n                  </div>\n              </div>\n      </div>`,l}));t.innerHTML="",t.insertAdjacentHTML("beforeend",n.join("")),(0,i.default)()}})),o.register("3Tmrv",(function(e,t){e.exports=o("aNJCr").getBundleURL("gLAPX")+o("iE7OH").resolve("cxfxj")})),o.register("aNJCr",(function(t,n){var a;e(t.exports,"getBundleURL",(function(){return a}),(function(e){return a=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}a=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=t),t}})),o.register("lpZvY",(function(t,n){function a(){const e=document.querySelectorAll(".pagination__page"),t=document.querySelectorAll(".pagination__ellipsis"),n=document.querySelectorAll(".subtitle"),a=document.querySelectorAll(".modal-table__value"),o=document.querySelectorAll(".modal-table__attribute");document.querySelectorAll(".modal-btn");try{"section-black"===localStorage.getItem("section")?(document.querySelector("footer").style.backgroundColor="#303846",document.querySelector(".footer__text").style.color="#f7f7f7",document.querySelector(".modal-footer-open").style.color="#f7f7f7",document.querySelector(".modal-container").style.backgroundColor="#3e444c",a.forEach((e=>e.style.color="#ffffff")),o.forEach((e=>e.style.color="#d4d4d4")),e.forEach((e=>e.style.color="#ffffff")),t.forEach((e=>e.style.color="#ffffff")),n.forEach((e=>e.style.color="#ffffff"))):(document.querySelector("footer").style.backgroundColor="#f7f7f7",document.querySelector(".footer__text").style.color="#545454",document.querySelector(".modal-footer-open").style.color="#545454",document.querySelector(".modal-container").style.backgroundColor="#ffffff",a.forEach((e=>e.style.color="#000000")),o.forEach((e=>e.style.color="#8c8c8c")),e.forEach((e=>e.style.color="#000000")),t.forEach((e=>e.style.color="#000000")),n.forEach((e=>e.style.color="#000000")))}catch(e){console.log(e)}}function o(){const e=document.querySelector(".filter");"section-black"===localStorage.getItem("section")?e.classList.add("black-theme"):e.classList.remove("black-theme")}e(t.exports,"default",(function(){return a})),e(t.exports,"controlColorFilter",(function(){return o}))})),o.register("4d5cY",(function(t,n){e(t.exports,"renderMarkupOnLibClickLink",(function(){return u})),e(t.exports,"startPageLib",(function(){return m})),e(t.exports,"renderPagONLibClickBtn",(function(){return d})),e(t.exports,"adaptivPageLib",(function(){return _}));var a=o("8HZsX"),i=o("5S7aa"),r=o("fb7JH"),l=(o("fb7JH"),o("fb7JH"),r=o("fb7JH"),o("44qC2")),s=o("lpZvY");const c=document.querySelector("#pagination");function u(e){const t=document.querySelector("#firstPage"),n=document.querySelector("#lastPag"),o={peg2:i.PAGE_LIBR,peg3:i.PAGE_LIBR,peg4:i.PAGE_LIBR,peg5:i.PAGE_LIBR,peg6:i.PAGE_LIBR};Number(n.textContent)===i.PAGE_LIBR&&f(o),(i.PAGE_LIBR===a.pageCount||i.PAGE_LIBR>=a.pageCount-5)&&g(o),Number(t.textContent)===i.PAGE_LIBR&&p(o),(1===i.PAGE_LIBR||i.PAGE_LIBR<=5)&&m()}function d(e){const t=document.querySelector("#firstPage"),n=document.querySelector("#lastPag"),o={peg2:i.PAGE_LIBR,peg3:i.PAGE_LIBR,peg4:i.PAGE_LIBR,peg5:i.PAGE_LIBR,peg6:i.PAGE_LIBR};i.PAGE_LIBR>=a.pageCount-5&&g(o),i.PAGE_LIBR>Number(n.textContent)&&f(o),i.PAGE_LIBR<=2&&m(),i.PAGE_LIBR<Number(t.textContent)&&p(o)}function g(e){if(i.PAGE_LIBR>a.pageCount)return;let{peg2:t,peg3:n,peg4:o,peg5:l,peg6:s}=e;c.innerHTML="",s=a.pageCount-1,l=a.pageCount-2,o=a.pageCount-3,n=a.pageCount-4,t=a.pageCount-5,c.innerHTML=(0,r.markupLastPagLib)(t,n,o,l,s)}function p(e){if(i.PAGE_LIBR<=2)return;c.innerHTML="";let{peg2:t,peg3:n,peg4:a,peg5:o,peg6:l}=e;o-=1,a-=2,n-=3,t-=4,c.innerHTML=(0,r.pagMarkupLib)(t,n,a,o,l)}function f(e){if(i.PAGE_LIBR>=a.pageCount-5)return;c.innerHTML="";let{peg2:t,peg3:n,peg4:o,peg5:l,peg6:s}=e;n+=1,o+=2,l+=3,s+=4,c.innerHTML=(0,r.pagMarkupLib)(t,n,o,l,s)}function m(){c.innerHTML="",c.innerHTML=(0,r.markupStartPagLib)(),(0,s.default)(),(0,l.isNone)()}function _(){c.innerHTML="",c.innerHTML=(0,r.markupPagLib)();const e=[,,'id="firstPage"',"id ='thirdPage'","id ='fourthPage'","id ='fifthPage'",'id="lastPag"','id="preLastPag"'],t=document.querySelector(".pagination__list");let n="";for(let t=2;t<a.pageCount+1;t+=1)n+=`<li class='pagination__item'><a class="pagination__page"  href='' ${e[t]}>${t}</a></li>`;t.insertAdjacentHTML("beforeend",n),(0,l.isNone)()}})),o.register("5S7aa",(function(t,n){e(t.exports,"onlibraryLink",(function(){return g})),e(t.exports,"onlibraryBtn",(function(){return p})),e(t.exports,"PAGE_LIBR",(function(){return d}));var a=o("4d5cY"),i=(o("4d5cY"),a=o("4d5cY"),o("8HZsX")),r=o("gQxnC"),l=(i=o("8HZsX"),o("44qC2")),s=(o("44qC2"),l=o("44qC2"),o("lpZvY"));const c={paginationLib:document.querySelector("#pagination")};function u(e,t,n){e&&e.addEventListener(t,n)}u(c.paginationLib,"click",g),u(c.paginationLib,"click",p);let d=1;function g(e){e.preventDefault(),"A"===e.target.nodeName&&(d=Number(e.target.textContent),"watched"===r.loadlibrary?(0,i.libraryRender)("watched"):"queued"===r.loadlibrary&&(0,i.libraryRender)("queued"),i.pageCount>1&&i.pageCount<8?(0,a.adaptivPageLib)():1!==i.pageCount&&((0,a.renderMarkupOnLibClickLink)(),(0,l.ellipsisLib)()),(0,s.default)(),(0,l.curentPageLib)(),(0,l.disaibledBtnLib)())}function p(e){if(e.preventDefault(),"BUTTON"!==e.target.nodeName)return;const t=document.querySelector(".btn-left"),n=document.querySelector(".btn-right");e.target===n&&(d+=1),e.target===t&&(d-=1),"watched"===r.loadlibrary?(0,i.libraryRender)("watched"):"queued"===r.loadlibrary&&(0,i.libraryRender)("queued"),i.pageCount>1&&i.pageCount<8?(0,a.adaptivPageLib)():1!==i.pageCount&&((0,a.renderPagONLibClickBtn)(),(0,l.ellipsisLib)()),(0,s.default)(),(0,l.curentPageLib)(),(0,l.disaibledBtnLib)()}})),o.register("44qC2",(function(t,n){e(t.exports,"ellipsisLib",(function(){return r})),e(t.exports,"disaibledBtnLib",(function(){return l})),e(t.exports,"curentPageLib",(function(){return s})),e(t.exports,"isNone",(function(){return c}));var a=o("5S7aa"),i=o("8HZsX");function r(){const e={firstPage:document.querySelector("#firstPage"),lastPage:document.querySelector("#lastPag"),ellipsisStart:document.querySelector("#ellipsisStart"),ellipsisEnd:document.querySelector("#ellipsisEnd")};e.firstPage.textContent>2&&e.ellipsisStart.classList.remove("visually-hidden"),e.lastPage.textContent>=i.pageCount-1?e.ellipsisEnd.classList.add("visually-hidden"):e.ellipsisEnd.classList.remove("visually-hidden")}function l(){const e={leftBtn:document.querySelector(".btn-left"),rightBtn:document.querySelector(".btn-right")};a.PAGE_LIBR>1&&e.leftBtn.removeAttribute("disabled"),a.PAGE_LIBR!==i.pageCount?e.rightBtn.removeAttribute("disabled"):e.rightBtn.setAttribute("disabled","disabled")}function s(e){const t={activ:document.querySelector(".pagination__page--activ"),pagination:document.querySelector("#pagination"),firstPage:document.querySelector("#firstPage"),thirdPage:document.querySelector("#thirdPage"),fourthPage:document.querySelector("#fourthPage"),fifthPage:document.querySelector("#fifthPage"),lastPag:document.querySelector("#lastPag"),preFirstPage:document.querySelector("#preFirstPage"),preLastPag:document.querySelector("#preLastPag")};t.activ&&t.activ.classList.remove("pagination__page--activ"),t.firstPage&&a.PAGE_LIBR==t.firstPage.textContent&&t.firstPage.classList.add("pagination__page--activ"),t.thirdPage&&a.PAGE_LIBR==t.thirdPage.textContent&&t.thirdPage.classList.add("pagination__page--activ"),t.fourthPage&&a.PAGE_LIBR==t.fourthPage.textContent&&t.fourthPage.classList.add("pagination__page--activ"),t.fifthPage&&a.PAGE_LIBR==t.fifthPage.textContent&&t.fifthPage.classList.add("pagination__page--activ"),t.lastPag&&a.PAGE_LIBR==t.lastPag.textContent&&t.lastPag.classList.add("pagination__page--activ"),t.preFirstPage&&a.PAGE_LIBR==t.preFirstPage.textContent&&t.preFirstPage.classList.add("pagination__page--activ"),t.preLastPag&&a.PAGE_LIBR==t.preLastPag.textContent&&t.preLastPag.classList.add("pagination__page--activ")}function c(){const e=document.querySelector(".thumb");i.pageCount>1?e.classList.remove("is-none"):i.pageCount<=1&&e.classList.add("is-none")}})),o.register("fb7JH",(function(t,n){e(t.exports,"pagMarkupLib",(function(){return i})),e(t.exports,"markupLastPagLib",(function(){return r})),e(t.exports,"markupStartPagLib",(function(){return l})),e(t.exports,"markupPagLib",(function(){return s}));var a=o("8HZsX");function i(e,t,n,o,i){return`<div class='pagination-decrement'>\n  <button class='btn-left btn' type='button'>\n   <\n  </button>\n</div>\n<ul class="pagination__list">\n <li class='pagination__item'>\n  <a class='pagination__page' id="preFirstPage" href=''>1</a>\n </li>\n <span class='pagination__ellipsis visually-hidden' id="ellipsisStart">...</span>\n  <li class='pagination__item'>\n  <a class='pagination__page' id="firstPage" href=''>${e}</a>\n </li>\n <li class='pagination__item'>\n  <a class='pagination__page' id ='thirdPage' href=''>${t}</a>\n </li>\n <li class='pagination__item'>\n  <a class='pagination__page' id ='fourthPage' href=''>${n}</a>\n </li>\n <li class='pagination__item'>\n  <a class='pagination__page' id ='fifthPage' href=''>${o}</a>\n </li>\n <li class='pagination__item' id="preLastItem">\n  <a class='pagination__page' id="lastPag" href=''>${i}</a>\n </li>\n  <span class='pagination__ellipsis' id="ellipsisEnd">...</span>\n <li class='pagination__item' id="lastItem">\n  <a class='pagination__page' id="preLastPag" href=''>${a.pageCount}</a>\n </li>\n</ul>\n<div class='pagination-increment'>\n  <button class='btn-right btn' type='button'>\n    >\n  </button>\n</div>`}function r(e,t,n,o,i){return`<div class='pagination-decrement'>\n  <button class='btn-left btn' type='button'>\n   <\n  </button>\n</div>\n\n<ul class="pagination__list">\n<li class="pagination__item">\n  <a class='pagination__page' id="preFirstPage" href=''>1</a>\n</li>\n  <span class='pagination__ellipsis visually-hidden' id="ellipsisStart">...</span>\n<li class="pagination__item">\n  <a class='pagination__page' id="firstPage" href=''>${e}</a>\n</li>\n<li class="pagination__item">\n  <a class='pagination__page' id ='thirdPage' href=''>${t}</a>\n</li>\n<li class="pagination__item">\n  <a class='pagination__page' id ='fourthPage' href=''>${n}</a>\n</li>\n<li class="pagination__item">\n  <a class='pagination__page' id ='fifthPage' href=''>${o}</a>\n</li>\n<li class="pagination__item">\n  <a class='pagination__page' id="lastPag" href=''>${i}</a>\n</li>\n  <span class='pagination__ellipsis' id="ellipsisEnd">...</span>\n<li class="pagination__item">\n  <a class='pagination__page  pagination__page--activ' id="preLastPag" href=''>${a.pageCount}</a>\n</li>\n\n</ul>\n\n<div class='pagination-increment'>\n  <button class='btn-right btn' type='button'>\n    >\n  </button>\n</div>`}function l(){return`<div class='pagination-decrement'>\n  <button class='btn-left btn' type='button' disabled>\n  <\n  </button>\n</div>\n\n<ul class="pagination__list">\n<li class="pagination__item">\n  <a class='pagination__page pagination__page--activ' id="preFirstPage" href=''>1</a>\n</li>\n<span class='pagination__ellipsis visually-hidden' id="ellipsisStart">...</span>\n<li class="pagination__item">\n  <a class='pagination__page' id="firstPage" href=''>2</a>\n</li>\n<li class="pagination__item">\n  <a class='pagination__page' id="thirdPage" href=''>3</a>\n</li>\n<li class="pagination__item">\n  <a class='pagination__page' id="fourthPage" href=''>4</a>\n</li>\n<li class="pagination__item">\n  <a class='pagination__page' id="fifthPage" href=''>5</a>\n</li>\n<li class="pagination__item">\n  <a class='pagination__page' id="lastPag" href=''>6</a>\n</li>\n  <span class='pagination__ellipsis' id="ellipsisEnd">...</span>\n<li class="pagination__item">\n  <a class='pagination__page' id="preLastPag" href=''>${a.pageCount}</a>\n</li>\n\n</ul>\n\n<div class='pagination-increment'>\n  <button class='btn-right btn' type='button'>\n  >\n  </button>\n\n</div>`}function s(){return"<div class='pagination-decrement'>\n  <button class='btn-left btn' type='button' disabled>\n  <\n  </button>\n</div>\n  <ul class=\"pagination__list\">\n  <li class='pagination__item'>\n  <a class=\"pagination__page pagination__page--activ \" id=\"preFirstPage\" href=''>1</a>\n  </li>\n  </ul>\n<div class='pagination-increment'>\n  <button class='btn-right btn' type='button'>\n  >\n  </button>\n\n</div>"}})),o.register("6tjHf",(function(t,n){e(t.exports,"langCurrent",(function(){return d})),e(t.exports,"setIndexLang",(function(){return g})),e(t.exports,"setLibraryLang",(function(){return p})),e(t.exports,"translateModalBtns",(function(){return f}));var a=o("bjqjL");const i={enLangBTN:document.getElementById("e-lang-en"),uaLangBTN:document.getElementById("e-lang-ua")},r=document.querySelector(".header_search-input"),l=document.querySelector(".keyword-input"),s=document.querySelector("#keywords-label"),c=document.querySelector(".js-filter-submit"),u=document.querySelector(".js-filter-reset");function d(){return"ua"===localStorage.getItem("lang")?"ua":"en"}function g(e){let t;if(a.text.hasOwnProperty(e)){for(t in window.hasOwnProperty("localStorage")&&window.localStorage.setItem("lang",e),a.text[e]){let n=document.querySelector(t);null!==n&&(n.textContent=a.text[e][t])}"ua"===e?(document.querySelector("html").setAttribute("lang","ua"),r.placeholder="Пошук Фільму",i.enLangBTN.style.cssText="color: #fff;",i.uaLangBTN.style.cssText="color: #ff6b01;",s.innerHTML="Ключове слово/фраза",l.placeholder="пошук...",c.innerHTML="шукати",u.innerHTML="скинути"):(document.querySelector("html").setAttribute("lang","en"),r.placeholder="Movie search",i.uaLangBTN.style.cssText="color: #fff;",i.enLangBTN.style.cssText="color: #ff6b01;",s.innerHTML="Keyword search:",l.placeholder="search...",c.innerHTML="search",u.innerHTML="reset")}}function p(e){let t;if(a.text.hasOwnProperty(e))for(t in window.hasOwnProperty("localStorage")&&window.localStorage.setItem("lang",e),a.text[e]){let n=document.querySelector(t);if(null!==n&&(n.textContent=a.text[e][t]),"ua"===e){document.querySelector("html").setAttribute("lang","ua"),document.querySelector("#btnWatched").innerText="ПЕРЕГЛЯНУТІ",document.querySelector("#btnQueued").innerText="У ЧЕРЗІ";try{document.querySelector(".empty_text").textContent="Схоже, ваша бібліотека порожня."}catch{}i.enLangBTN.style.cssText="color: #fff;",i.uaLangBTN.style.cssText="color: #ff6b01;"}else{document.querySelector("html").setAttribute("lang","ua"),document.querySelector("#btnWatched").innerText="WATCHED",document.querySelector("#btnQueued").innerText="QUEUED";try{document.querySelector(".empty_text").textContent="It seems that there is no films here!"}catch{}i.enLangBTN.style.cssText="color: #ff6b01;",i.uaLangBTN.style.cssText="color: #fff;"}}}function f(e,t){const n=document.querySelector(".js-watch"),a=document.querySelector(".js-queue");n.innerText=e?"ПЕРЕГЛЯНУТО":"ДОДАТИ ДО ПЕРЕГЛЯНУТИХ",a.innerText=t?"У ЧЕРЗІ":"ДОДАТИ ДО ЧЕРГИ"}})),o.register("bjqjL",(function(t,n){e(t.exports,"text",(function(){return a}));const a={en:{".js-queue":"ADD TO QUEUE",".js-watch":"ADD TO WATCHED",".queued":"QUEUE",".watched":"WATCHED",".zsu":"SUPPORT UKRAINE",".home":"HOME",".library":"MY LIBRARY"},ua:{".js-queue":"ДОДАТИ В ЧЕРГУ",".js-watch":"ДОДАТИ В ПЕРЕГЛЯНУТІ",".queued":"В ЧЕРЗІ",".watched":"ПЕРЕГЛЯНУТІ",".zsu":"ДОПОМОГА ЗСУ",".home":"ГОЛОВНА",".library":"МОЯ БІБЛІОТЕКА"}}})),o.register("7M2tn",(function(t,n){e(t.exports,"removeMovieFromLib",(function(){return i})),e(t.exports,"addMovieToLib",(function(){return r}));var a=o("gQxnC");function i(e,t){let n=a.default.load(t).filter((t=>t.id!==+e));n=n.length?n:null,a.default.save(t,n)}function r(e,t){let n=a.default.load(t);let o=a.default.load("currentPage").find((t=>t.id==e));n?n.push(o):n=[o],a.default.save(t,n)}})),o.register("4FHbW",(function(t,n){function a(){var e=document.querySelector(".back_to_top");window.addEventListener("scroll",(function(){var t=window.pageYOffset,n=document.documentElement.clientHeight;t>n&&e.classList.add("back_to_top-show"),t<n&&e.classList.remove("back_to_top-show")})),e.addEventListener("click",(function(){window.pageYOffset>0&&window.scroll({top:0,behavior:"smooth"})}))}e(t.exports,"default",(function(){return a}))})),o.register("hBZCD",(function(t,n){e(t.exports,"default",(function(){return a}));class a{spinOn(){const e=document.getElementById("spinner");e.classList.contains("done")&&e.classList.remove("done")}spinOff(){setTimeout((function(){const e=document.getElementById("spinner");e.classList.contains("done")||e.classList.add("done")}),500)}}})),o.register("jS5ak",(function(t,n){e(t.exports,"default",(function(){return i}));var a=o("lpZvY");function i(){const e=document.querySelector(".switch-btn"),t=document.querySelector("body");localStorage.getItem("btn")&&(e.classList.add(localStorage.getItem("btn")),t.classList.add(localStorage.getItem("section"))),e.addEventListener("click",(n=>{n.preventDefault(),localStorage.getItem("btn")?(localStorage.removeItem("section"),localStorage.removeItem("btn"),e.classList.remove("switch-on"),t.classList.remove("section-black")):r(),(0,a.default)(),(0,a.controlColorFilter)()}))}const r=()=>{const e=document.querySelector("body");document.querySelectorAll(".switch-btn").forEach((e=>{e.classList.toggle("switch-on"),localStorage.setItem("btn","switch-on")})),e.classList.toggle("section-black"),localStorage.setItem("section","section-black")}})),o.register("gyZtm",(function(e,t){let n=document.querySelector(".header-nav");window.addEventListener("scroll",(function(e){window.scrollY>250?n.classList.add("header-nav_fixed"):n.classList.remove("header-nav_fixed")}))})),o("iE7OH").register(JSON.parse('{"gLAPX":"library.2281a1e7.js","cxfxj":"no-picture.bfd9a472.jpg"}'))}();
//# sourceMappingURL=library.2281a1e7.js.map
