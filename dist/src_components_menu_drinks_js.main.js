"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["src_components_menu_drinks_js"],{

/***/ "./src/components/menu/drinks.js":
/*!***************************************!*\
  !*** ./src/components/menu/drinks.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "items": () => (/* binding */ items)
/* harmony export */ });
/* harmony import */ var _img_glass_white_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/glass-white.png */ "./src/components/menu/img/glass-white.png");
/* harmony import */ var _img_glass_red_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/glass-red.png */ "./src/components/menu/img/glass-red.png");

const boisson = new Image();
boisson.src = _img_glass_white_png__WEBPACK_IMPORTED_MODULE_0__;
const cazaux = new Image();
cazaux.src = _img_glass_white_png__WEBPACK_IMPORTED_MODULE_0__;
const janasse = new Image();
janasse.src = _img_glass_white_png__WEBPACK_IMPORTED_MODULE_0__;

const redIcon = new Image();
redIcon.src = _img_glass_red_png__WEBPACK_IMPORTED_MODULE_1__;

const items = [
    {
        "icon": boisson,
        "name": 'Domaine Boisson: "l’Exigence"',
        "description": "roussanne, grenache blanc, clairette, bourboulenc",
        "price": "£30"
    },
    {
        "icon": cazaux,
        "name": 'Clos des Cazaux: "Vieilles Vignes"',
        "description": "clairette, roussanne, viognier",
        "price": "£42"
    },
    {
        "icon": janasse,
        "name": 'Domaine de la Janasse: "Tradition"',
        "description": "grenache, clairette, roussanne",
        "price": "£63"
    },
    {
        "icon": redIcon,
        "name": 'Domaine Delubac: "Les Bruneau"',
        "description": "grenache, syrah, mourvèdre",
        "price": "£26"
    }
]



/***/ }),

/***/ "./src/components/menu/img/glass-red.png":
/*!***********************************************!*\
  !*** ./src/components/menu/img/glass-red.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "23029404dfe56d42b519.png";

/***/ }),

/***/ "./src/components/menu/img/glass-white.png":
/*!*************************************************!*\
  !*** ./src/components/menu/img/glass-white.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3389868992c0e8eafa6c.png";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfbWVudV9kcmlua3NfanMubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDMUM7QUFDQSxjQUFjLGlEQUFLO0FBQ25CO0FBQ0EsYUFBYSxpREFBSztBQUNsQjtBQUNBLGNBQWMsaURBQUs7QUFDbUI7QUFDdEM7QUFDQSxjQUFjLCtDQUFHO0FBQ2pCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb21wb25lbnRzL21lbnUvZHJpbmtzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3aGl0ZSBmcm9tICcuL2ltZy9nbGFzcy13aGl0ZS5wbmcnO1xyXG5jb25zdCBib2lzc29uID0gbmV3IEltYWdlKCk7XHJcbmJvaXNzb24uc3JjID0gd2hpdGU7XHJcbmNvbnN0IGNhemF1eCA9IG5ldyBJbWFnZSgpO1xyXG5jYXphdXguc3JjID0gd2hpdGU7XHJcbmNvbnN0IGphbmFzc2UgPSBuZXcgSW1hZ2UoKTtcclxuamFuYXNzZS5zcmMgPSB3aGl0ZTtcclxuaW1wb3J0IHJlZCBmcm9tICcuL2ltZy9nbGFzcy1yZWQucG5nJztcclxuY29uc3QgcmVkSWNvbiA9IG5ldyBJbWFnZSgpO1xyXG5yZWRJY29uLnNyYyA9IHJlZDtcclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtcyA9IFtcclxuICAgIHtcclxuICAgICAgICBcImljb25cIjogYm9pc3NvbixcclxuICAgICAgICBcIm5hbWVcIjogJ0RvbWFpbmUgQm9pc3NvbjogXCJs4oCZRXhpZ2VuY2VcIicsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcInJvdXNzYW5uZSwgZ3JlbmFjaGUgYmxhbmMsIGNsYWlyZXR0ZSwgYm91cmJvdWxlbmNcIixcclxuICAgICAgICBcInByaWNlXCI6IFwiwqMzMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiaWNvblwiOiBjYXphdXgsXHJcbiAgICAgICAgXCJuYW1lXCI6ICdDbG9zIGRlcyBDYXphdXg6IFwiVmllaWxsZXMgVmlnbmVzXCInLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJjbGFpcmV0dGUsIHJvdXNzYW5uZSwgdmlvZ25pZXJcIixcclxuICAgICAgICBcInByaWNlXCI6IFwiwqM0MlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiaWNvblwiOiBqYW5hc3NlLFxyXG4gICAgICAgIFwibmFtZVwiOiAnRG9tYWluZSBkZSBsYSBKYW5hc3NlOiBcIlRyYWRpdGlvblwiJyxcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiZ3JlbmFjaGUsIGNsYWlyZXR0ZSwgcm91c3Nhbm5lXCIsXHJcbiAgICAgICAgXCJwcmljZVwiOiBcIsKjNjNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImljb25cIjogcmVkSWNvbixcclxuICAgICAgICBcIm5hbWVcIjogJ0RvbWFpbmUgRGVsdWJhYzogXCJMZXMgQnJ1bmVhdVwiJyxcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiZ3JlbmFjaGUsIHN5cmFoLCBtb3VydsOoZHJlXCIsXHJcbiAgICAgICAgXCJwcmljZVwiOiBcIsKjMjZcIlxyXG4gICAgfVxyXG5dXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=