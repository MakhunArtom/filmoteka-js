var e={save:(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(t){console.error(`Error during saving ${e} to local strage; `,t.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(t){console.error(`Error during getting ${e} from localStorage: `,t.message)}},del:e=>{try{localStorage.removeItem(e)}catch(t){console.error(`Error during deleting ${e}! from localStorage: `,t.message)}}};function t(t,n){const a=e.load(n);if(a){let e=a.map((e=>{const{id:t,title:n,year:a,genres:i,rating:r,imgPath:s}=e;let o=`<div class="filmoteka__item" data-id="${t}">\n        <a class="filmoteka__item-link" href="./">\n            <div class="filmoteka__item-wrapper">\n                <img class="filmoteka-img" src="${s}" alt="" width="">\n                <div class="overlay-text">\n                    <h2 class="subtitle">${n}</h2>\n                    <p class="discription">`;return i&&(o+=`<span class="description__genre">${i}</span>`),a&&(o+=`<span class="description__year">${a}</span>`),o+=`<span class="rating">${r}</span></p>\n                </div>\n            </div>\n        </a>\n        </div>`,o})).join("");t.insertAdjacentHTML("beforeend",e)}else t.insertAdjacentHTML("beforeend",'<div><p2 class="empty_text">It seems that there is no films here!</p2></div>')}function n(e){e.innerHTML=""}const a={mainContainer:document.querySelector(".filmoteka__container"),btnWatched:document.querySelector("#btnWatched"),btnQueued:document.querySelector("#btnQueued")};console.log(a.btnQueued),console.log(a.btnWatched),t(a.mainContainer,"watched"),a.btnQueued.addEventListener("click",(function(){a.btnWatched.classList.remove("active-btn"),a.btnQueued.classList.add("active-btn"),n(a.mainContainer),t(a.mainContainer,"queued")})),a.btnWatched.addEventListener("click",(function(){a.btnQueued.classList.remove("active-btn"),a.btnWatched.classList.add("active-btn"),n(a.mainContainer),t(a.mainContainer,"watched")}));
//# sourceMappingURL=library.e0191ace.js.map