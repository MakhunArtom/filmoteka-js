var e={save:(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(t){console.error(`Error during saving ${e} to local strage; `,t.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(t){console.error(`Error during getting ${e} from localStorage: `,t.message)}},del:e=>{try{localStorage.removeItem(e)}catch(t){console.error(`Error during deleting ${e}! from localStorage: `,t.message)}}};let t;async function n(e){const n=await f(e);return t=n.total_pages,n.results}function a(e,n,a,i,o){return`<div class='pagination-decrement'>\n  <button class='btn-left btn' type='button'>\n   \n  </button>\n</div>\n<a class='pagination__page ' href=''>1</a>\n<span class='pagination__ellipsisStart visually-hidden' id="ellipsisStart">...</span>\n<a class='pagination__page' id="firstPage" href=''>${e}</a>\n<a class='pagination__page' href=''>${n}</a>\n<a class='pagination__page' href=''>${a}</a>\n<a class='pagination__page' href=''>${i}</a>\n<a class='pagination__page' id="lastPag" href=''>${o}</a>\n<span class='pagination__ellipsisEnd' id="ellipsisEnd">...</span>\n<a class='pagination__lastPage' href=''>${t}</a>\n<div class='pagination-increment'>\n  <button class='btn-right btn' type='button'>\n    \n  </button>\n</div>`}const i=document.querySelector("#pagination");function o(){const e=document.querySelector("#firstPage"),n=document.querySelector("#lastPag"),a={peg2:g,peg3:g,peg4:g,peg5:g,peg6:g};if(g===t||g>=t-4)r(a);else{if(Number(n.textContent)===g){if(Number(n.textContent)===t-1)return;c(a)}if(Number(e.textContent)===g){if(2===Number(e.textContent))return;l(a)}(1===g||g<=5)&&d(),(g===t||g>t-2)&&r()}}function s(e){const n=document.querySelector("#firstPage"),a=document.querySelector("#lastPag"),i={peg2:g,peg3:g,peg4:g,peg5:g,peg6:g};if(g===t||g>=t-5)r(i);else{if(g>Number(a.textContent)){if(Number(a.textContent)===t-1)return;c(i)}if(5!==g){if(g<Number(n.textContent)){if(1===g)return;l(i)}}else d()}}function r(e){if(g>t)return;let{peg2:n,peg3:o,peg4:s,peg5:r,peg6:l}=e;i.innerHTML="",l=t-1,r=t-2,s=t-3,o=t-4,n=t-5,i.innerHTML=a(n,o,s,r,l)}function l(e){i.innerHTML="";let{peg2:t,peg3:n,peg4:o,peg5:s,peg6:r}=e;s-=1,o-=2,n-=3,t-=4,i.innerHTML=a(t,n,o,s,r)}function c(e){if(g>t)return;i.innerHTML="";let{peg2:n,peg3:o,peg4:s,peg5:r,peg6:l}=e;o+=1,s+=2,r+=3,l+=4,i.innerHTML=a(n,o,s,r,l)}function d(e){i.innerHTML="",i.innerHTML=`<div class='pagination-decrement'>\n  <button class='btn-left btn' type='button'>\n \n  </button>\n</div>\n<a class='pagination__page ' href=''>1</a>\n<span class='pagination__ellipsisStart visually-hidden' id="ellipsisStart">...</span>\n<a class='pagination__page' id="firstPage" href=''>2</a>\n<a class='pagination__page' href=''>3</a>\n<a class='pagination__page' href=''>4</a>\n<a class='pagination__page' href=''>5</a>\n<a class='pagination__page' id="lastPag" href=''>6</a>\n<span class='pagination__ellipsisEnd' id="ellipsisEnd">...</span>\n<a class='pagination__lastPage' href=''>${t}</a>\n<div class='pagination-increment'>\n  <button class='btn-right btn' type='button'>\n    \n  </button>\n \n</div>`}function u(){const e=document.querySelector("#firstPage"),n=document.querySelector("#lastPag"),a=document.querySelector("#ellipsisStart"),i=document.querySelector("#ellipsisEnd");e.textContent>2&&a.classList.remove("visually-hidden"),n.textContent>=t-1?i.classList.add("visually-hidden"):i.classList.remove("visually-hidden")}let g=1;const p=document.querySelector("#pagination"),m={mainContainer:document.querySelector(".filmoteka__container")};async function f(e){return await(await fetch(H+`3/trending/movie/day?api_key=${e}&page=${g}`)).json()}async function v(t){const n=await(await fetch(H+`3/genre/movie/list?api_key=${t}&language=en-US`)).json();return e.save("genresList",n.genres),console.log("Genres were updated, and saved to localStorage for future"),n.genres}async function _(e,t){return await(await fetch(H+`3/search/movie?api_key=${e}&language=en-US&query=${t}`)).json()}async function y(t){e.load("genresList")||await v(M);let n=e.load("genresList"),a=new Array;return t.forEach((async e=>{try{a.push(n.find((t=>t.id===e)).name)}catch(t){console.log(`${e} wasn't found in Local Storage, updating ganresList`),n=await v(M),a.push(n.find((t=>t.id===e)).name)}})),a.join(", ")}async function b(t){const n=await Promise.all(t.map((async({id:e,title:t,original_title:n,name:a,original_name:i,overview:o,poster_path:s,genre_ids:r,popularity:l,release_date:c,first_air_date:d,vote_average:u,vote_count:g})=>{const p=t||a,m=n||i,f=c||d,v=s?"https://image.tmdb.org/t/p/w300"+s:"",_=r?await y(r):null,b=u?u.toFixed(1):0;return await{id:e,title:p,originalTitle:m,year:f?f.slice(0,4):void 0,genres:_,popularity:l,overview:o,rating:b,voteCount:g,imgPath:v}})));return e.save("currentPage",n),n}p.addEventListener("click",(function(e){if(e.preventDefault(),"A"!==e.target.nodeName)return;g=Number(e.target.textContent),m.mainContainer.innerHTML="",A(),o(),u()})),p.addEventListener("click",(function(e){if(e.preventDefault(),"BUTTON"!==e.target.nodeName)return;const t=document.querySelector(".btn-left"),n=document.querySelector(".btn-right");e.target===n&&(g+=1);e.target===t&&(g-=1);m.mainContainer.innerHTML="",A(),s(),u()}));const h={overlay:document.querySelector(".modal-footer-overlay"),modalFooter:document.querySelector(".modal-footer")};function L(e){"Escape"===e.code&&w()}function w(){document.querySelector(".modal-footer.active").classList.remove("active"),document.querySelector(".modal-footer-overlay").classList.remove("active"),document.body.classList.remove("modal-is-open")}const S=document.querySelector(".cross"),$=document.querySelector(".backdrop"),E=document.querySelector(".modal-container");function k(){$.classList.add("visually-hidden"),document.body.style.overflow="",$.removeEventListener("click",T),S.removeEventListener("click",k),window.removeEventListener("keydown",q),E.innerHTML='<button type="button" class="cross">+</button>'}function q(e){"Escape"===e.code&&k()}function T(e){e.target.classList.contains("backdrop")&&k()}function C(e){const t=e.map((({id:e,title:t,year:n,genres:a,rating:i,imgPath:o})=>{let s=(a.match(/\,/g)||[]).length;for(;s>1;)s=((a=a.slice(0,a.lastIndexOf(","))+"...").match(/\,/g)||[]).length;return`<div class="filmoteka__item" data-id="${e}">\n              <div class="filmoteka__item-wrapper">\n                  <img class="filmoteka-img" src="${o}" alt="">\n                  <div class="overlay-text">\n                      <h2 class="subtitle">${t}</h2>\n                      <p class="discription">${a} <span class="filmoteka__year"> ${n}</span> </p>\n                      <div class="filmoteka__rating">${i}</div>\n                  </div>\n              </div>\n      </div>`}));N.mainContainer.innerHTML="",N.mainContainer.insertAdjacentHTML("beforeend",t.join(""))}let P,x="";const M="565e4989d784811de7dff7d665000157",H="https://api.themoviedb.org/",N={mainContainer:document.querySelector(".filmoteka__container"),openModalBtn:document.querySelector(".modal-footer-open"),searchResultText:document.querySelector(".form-text"),form:document.querySelector(".header_search")};async function A(){const e=await n(M);C(await b(e)),d()}N.mainContainer.addEventListener("click",(function(t){if(!t.target.classList.contains("filmoteka__item"))return;!function(t){const n=e.load("currentPage").find((e=>e.id===t)),{title:a,originalTitle:i,year:o,genres:s,popularity:r,overview:l,rating:c,voteCount:d,imgPath:u}=n,g=`\n  <div class="modal-img-container">\n  <img\n    class="modal-img"\n    src="${u}"\n    alt="${a}"\n    width="370"\n    height="470"\n  />\n</div>\n<div class="film-info">\n  <h2 class="film-name">${a}</h2>\n  <table class="modal-table">\n    <tr class="modal-table__row">\n      <td><p class="modal-table__attribute">Vote / Votes</p></td>\n      <td>\n        <p class="modal-table__value">\n          <span class="modal-table__vote">${c}</span> /\n          <span class="modal-table__votes">${d}</span>\n        </p>\n      </td>\n    </tr>\n    <tr class="modal-table__row">\n      <td><p class="modal-table__attribute">Popularity</p></td>\n      <td><p class="modal-table__value">${r}</p></td>\n    </tr>\n    <tr class="modal-table__row">\n      <td><p class="modal-table__attribute">Original Title</p></td>\n      <td><p class="modal-table__value">${i}</p></td>\n    </tr>\n    <tr class="modal-table__row">\n      <td><p class="modal-table__attribute">Genre</p></td>\n      <td><p class="modal-table__value">${s}</p></td>\n    </tr>\n  </table>\n\n  <h3 class="film-about">About</h3>\n  <p class="film-description">\n    ${l}\n  </p>\n  <div class="modal-btn-wrap">\n    <button type="button" class="modal-btn">ADD TO WATCHED</button>\n    <button type="button" class="modal-btn">ADD TO QUEUE</button>\n  </div>\n</div>`;E.insertAdjacentHTML("beforeend",g)}(+t.target.dataset.id),$.classList.remove("visually-hidden"),document.body.style.overflow="hidden",S.addEventListener("click",k),$.addEventListener("click",T),window.addEventListener("keydown",q)})),N.openModalBtn.addEventListener("click",(function(){h.overlay.classList.add("active"),h.modalFooter.classList.add("active"),document.body.classList.add("modal-is-open"),document.body.addEventListener("keydown",L),h.overlay.addEventListener("click",w)})),N.form.addEventListener("submit",(async function(e){if(e.preventDefault(),x=e.target.search.value,N.searchResultText.classList.add("visually-hidden"),!x)return void A();const t=await async function(){const e=await _(M,x);return P=e.total_pages,e.results}(),n=await b(t);if(n.length>0)return C(n),void d();N.searchResultText.classList.remove("visually-hidden")})),A();
//# sourceMappingURL=index.8d262f2f.js.map