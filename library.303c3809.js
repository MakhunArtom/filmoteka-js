var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired76b;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var d={id:e,exports:{}};return n[e]=d,o.call(d.exports,d,d.exports),d.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired76b=o);var d=o("34clH"),r=o("eTE0Z"),a=o("gnLbn"),i=o("jWOqs");const c={btnWatched:document.querySelector("#btnWatched"),btnQueued:document.querySelector("#btnQueued"),mainContainer:document.querySelector(".filmoteka__container"),openModalBtn:document.querySelector(".modal-footer-open"),mainContainer:document.querySelector(".filmoteka__container")};(0,a.libraryRender)("watched"),c.btnQueued.addEventListener("click",(function(){c.btnWatched.classList.remove("active-btn"),c.btnQueued.classList.add("active-btn"),(0,a.libraryRender)("queued")})),c.btnWatched.addEventListener("click",(function(){c.btnQueued.classList.remove("active-btn"),c.btnWatched.classList.add("active-btn"),(0,a.libraryRender)("watched")})),c.mainContainer.addEventListener("click",r.openModal),c.openModalBtn.addEventListener("click",d.openModalFooter),(0,i.default)();
//# sourceMappingURL=library.303c3809.js.map
