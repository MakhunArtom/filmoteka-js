!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired76b;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,n){r[e]=n},n.parcelRequired76b=o);var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e};var a=o("cJBkb"),i=o("jGe89"),c=o("8HZsX"),l=e(d)({btnWatched:document.querySelector("#btnWatched"),btnQueued:document.querySelector("#btnQueued"),mainContainer:document.querySelector(".filmoteka__container"),openModalBtn:document.querySelector(".modal-footer-open")},"mainContainer",document.querySelector(".filmoteka__container"));(0,c.libraryRender)("watched"),l.btnQueued.addEventListener("click",(function(){l.btnWatched.classList.remove("active-btn"),l.btnQueued.classList.add("active-btn"),(0,c.libraryRender)("queued")})),l.btnWatched.addEventListener("click",(function(){l.btnQueued.classList.remove("active-btn"),l.btnWatched.classList.add("active-btn"),(0,c.libraryRender)("watched")})),l.mainContainer.addEventListener("click",i.openModal),l.openModalBtn.addEventListener("click",a.openModalFooter)}();
//# sourceMappingURL=library.eb746761.js.map
