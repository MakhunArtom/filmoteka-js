var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},a=e.parcelRequired76b;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in t){var a=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,a.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired76b=a);var i=a("7GRT7");let r;async function o(e){const n=await h(e);return r=n.total_pages,n.results}function s(e,n,t,a,i){return`<div class='pagination-decrement'>\n  <button class='btn-left btn' type='button'>\n   \n  </button>\n</div>\n<a class='pagination__page ' href=''>1</a>\n<span class='pagination__ellipsisStart visually-hidden' id="ellipsisStart">...</span>\n<a class='pagination__page' id="firstPage" href=''>${e}</a>\n<a class='pagination__page' href=''>${n}</a>\n<a class='pagination__page' href=''>${t}</a>\n<a class='pagination__page' href=''>${a}</a>\n<a class='pagination__page' id="lastPag" href=''>${i}</a>\n<span class='pagination__ellipsisEnd' id="ellipsisEnd">...</span>\n<a class='pagination__lastPage' href=''>${r}</a>\n<div class='pagination-increment'>\n  <button class='btn-right btn' type='button'>\n    \n  </button>\n</div>`}const l=document.querySelector("#pagination");function c(){const e=document.querySelector("#firstPage"),n=document.querySelector("#lastPag"),t={peg2:_,peg3:_,peg4:_,peg5:_,peg6:_};if(_===r||_>=r-4)d(t);else{if(Number(n.textContent)===_){if(Number(n.textContent)===r-1)return;g(t)}if(Number(e.textContent)===_){if(2===Number(e.textContent))return;p(t)}(1===_||_<=5)&&f(),(_===r||_>r-2)&&d()}}function u(e){const n=document.querySelector("#firstPage"),t=document.querySelector("#lastPag"),a={peg2:_,peg3:_,peg4:_,peg5:_,peg6:_};if(_===r||_>=r-5)d(a);else{if(_>Number(t.textContent)){if(Number(t.textContent)===r-1)return;g(a)}if(5!==_){if(_<Number(n.textContent)){if(1===_)return;p(a)}}else f()}}function d(e){if(_>r)return;let{peg2:n,peg3:t,peg4:a,peg5:i,peg6:o}=e;l.innerHTML="",o=r-1,i=r-2,a=r-3,t=r-4,n=r-5,l.innerHTML=s(n,t,a,i,o)}function p(e){l.innerHTML="";let{peg2:n,peg3:t,peg4:a,peg5:i,peg6:r}=e;i-=1,a-=2,t-=3,n-=4,l.innerHTML=s(n,t,a,i,r)}function g(e){if(_>r)return;l.innerHTML="";let{peg2:n,peg3:t,peg4:a,peg5:i,peg6:o}=e;t+=1,a+=2,i+=3,o+=4,l.innerHTML=s(n,t,a,i,o)}function f(e){l.innerHTML="",l.innerHTML=`<div class='pagination-decrement'>\n  <button class='btn-left btn' type='button'>\n \n  </button>\n</div>\n<a class='pagination__page ' href=''>1</a>\n<span class='pagination__ellipsisStart visually-hidden' id="ellipsisStart">...</span>\n<a class='pagination__page' id="firstPage" href=''>2</a>\n<a class='pagination__page' href=''>3</a>\n<a class='pagination__page' href=''>4</a>\n<a class='pagination__page' href=''>5</a>\n<a class='pagination__page' id="lastPag" href=''>6</a>\n<span class='pagination__ellipsisEnd' id="ellipsisEnd">...</span>\n<a class='pagination__lastPage' href=''>${r}</a>\n<div class='pagination-increment'>\n  <button class='btn-right btn' type='button'>\n    \n  </button>\n \n</div>`}function m(){const e=document.querySelector("#firstPage"),n=document.querySelector("#lastPag"),t=document.querySelector("#ellipsisStart"),a=document.querySelector("#ellipsisEnd");e.textContent>2&&t.classList.remove("visually-hidden"),n.textContent>=r-1?a.classList.add("visually-hidden"):a.classList.remove("visually-hidden")}let _=1;const y=document.querySelector("#pagination"),v={mainContainer:document.querySelector(".filmoteka__container")};async function h(e){return await(await fetch(E+`3/trending/movie/day?api_key=${e}&page=${_}`)).json()}async function b(e){const n=await(await fetch(E+`3/genre/movie/list?api_key=${e}&language=en-US`)).json();return i.default.save("genresList",n.genres),console.log("Genres were updated, and saved to localStorage for future"),n.genres}async function w(e,n){return await(await fetch(E+`3/search/movie?api_key=${e}&language=en-US&query=${n}`)).json()}y.addEventListener("click",(function(e){if(e.preventDefault(),"A"!==e.target.nodeName)return;_=Number(e.target.textContent),v.mainContainer.innerHTML="",$(),c(),m()})),y.addEventListener("click",(function(e){if(e.preventDefault(),"BUTTON"!==e.target.nodeName)return;const n=document.querySelector(".btn-left"),t=document.querySelector(".btn-right");e.target===t&&(_+=1);e.target===n&&(_-=1);v.mainContainer.innerHTML="",$(),u(),m()}));i=a("7GRT7");async function L(e){i.default.load("genresList")||await b(P);let n=i.default.load("genresList"),t=new Array;return e.forEach((async e=>{try{t.push(n.find((n=>n.id===e)).name)}catch(a){console.log(`${e} wasn't found in Local Storage, updating ganresList`),n=await b(P),t.push(n.find((n=>n.id===e)).name)}})),t.join(", ")}i=a("7GRT7");async function S(e){const n=await Promise.all(e.map((async({id:e,title:n,original_title:t,name:a,original_name:i,overview:r,poster_path:o,genre_ids:s,popularity:l,release_date:c,first_air_date:u,vote_average:d,vote_count:p})=>{const g=n||a,f=t||i,m=c||u,_=o?"https://image.tmdb.org/t/p/w300"+o:"",y=s.length>1&&await L(s),v=d?d.toFixed(1):0;return await{id:e,title:g,originalTitle:f,year:m?m.slice(0,4):void 0,genres:y,popularity:l,overview:r,rating:v,voteCount:p,imgPath:_}})));return i.default.save("currentPage",n),n}var T=a("34clH"),q=a("eTE0Z"),x=a("ccJnQ");x=a("ccJnQ");let C;a("7GRT7");let M="";const P="565e4989d784811de7dff7d665000157",E="https://api.themoviedb.org/",N={mainContainer:document.querySelector(".filmoteka__container"),openModalBtn:document.querySelector(".modal-footer-open"),searchResultText:document.querySelector(".form-text"),form:document.querySelector(".header_search")};async function $(){const e=await o(P),n=await S(e);(0,x.renderItems)(n),f()}N.mainContainer.addEventListener("click",q.openModal),N.openModalBtn.addEventListener("click",T.openModalFooter),N.form.addEventListener("submit",(async function(e){if(e.preventDefault(),M=e.target.search.value,N.searchResultText.classList.add("visually-hidden"),!M)return void $();const n=await async function(){const e=await w(P,M);return C=e.total_pages,e.results}(),t=await S(n);if(t.length>0)return(0,x.renderItems)(t),void f();N.searchResultText.classList.remove("visually-hidden")})),$();
//# sourceMappingURL=index.9961308a.js.map
