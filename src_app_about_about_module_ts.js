"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_about_about_module_ts"],{

/***/ 9778:
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageRoutingModule": () => (/* binding */ AboutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.page */ 950);




const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_0__.AboutPage
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AboutPageRoutingModule);



/***/ }),

/***/ 4671:
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageModule": () => (/* binding */ AboutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-routing.module */ 9778);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page */ 950);







let AboutPageModule = class AboutPageModule {
};
AboutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutPageRoutingModule
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_1__.AboutPage]
    })
], AboutPageModule);



/***/ }),

/***/ 950:
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPage": () => (/* binding */ AboutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _L_Ionic_Angular_Projects_my_fm_node_modules_ngtools_webpack_src_loaders_direct_resource_js_about_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./about.page.html */ 6371);
/* harmony import */ var _about_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page.scss */ 2781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let AboutPage = class AboutPage {
    constructor() { }
    ngOnInit() {
    }
};
AboutPage.ctorParameters = () => [];
AboutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-about',
        template: _L_Ionic_Angular_Projects_my_fm_node_modules_ngtools_webpack_src_loaders_direct_resource_js_about_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_about_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AboutPage);



/***/ }),

/***/ 6371:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/about/about.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-row>\n      <ion-menu-toggle style=\"padding-left: 10px;\">\n        <ion-icon size=\"large\" name=\"menu\"></ion-icon>\n      </ion-menu-toggle>\n      <ion-title id=\"radioName\">Arun R S</ion-title>\n\n    </ion-row>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n   <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n\n      <link rel=\"stylesheet\" href=\"./about_files/nicepage.css\" media=\"screen\">\n      <script class=\"u-script\" type=\"text/javascript\" src=\"./about_files/jquery-1.9.1.min.js.download\" defer=\"\"></script>\n      <script class=\"u-script\" type=\"text/javascript\" src=\"./about_files/nicepage.js.download\" defer=\"\"></script>\n      <meta name=\"generator\" content=\"Nicepage 2.22.1, nicepage.com\">\n      <style class=\"u-style\">.u-section-2 {background-image: url(\"//images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/d30857c90e7d50d1bde9bc3c/Untitled-3.jpg\"); background-position: 50% 50%}\n  .u-section-2 .u-sheet-1 {min-height: 764px}\n  .u-section-2 .u-text-1 {font-weight: 700; margin: 60px 0 0}\n  .u-section-2 .u-text-2 {margin: 20px 570px 0 0}\n  .u-section-2 .u-list-1 {width: 570px; min-height: 358px; grid-template-columns: repeat(1, 100%); height: auto; grid-gap: 10px; margin: 30px auto 60px 0}\n  .u-section-2 .u-container-layout-1 {padding: 30px}\n  .u-section-2 .u-icon-1 {height: 64px; width: 64px; background-image: none; margin: 0 auto 0 0}\n  .u-section-2 .u-text-3 {text-transform: uppercase; font-weight: 700; letter-spacing: 2px; margin: -64px auto 0 84px}\n  .u-section-2 .u-text-4 {margin-left: 84px; margin-right: auto}\n  .u-section-2 .u-container-layout-2 {padding: 30px}\n  .u-section-2 .u-icon-2 {height: 64px; width: 64px; background-image: none; margin: 0 auto 0 0}\n  .u-section-2 .u-text-5 {text-transform: uppercase; font-weight: 700; letter-spacing: 2px; margin: -64px auto 0 84px}\n  .u-section-2 .u-text-6 {margin-left: 84px; margin-right: auto}\n  @media (max-width: 1199px){ .u-section-2 .u-sheet-1 {min-height: 726px}\n  .u-section-2 .u-text-2 {margin-right: 370px}\n  .u-section-2 .u-list-1 {grid-template-columns: 100%} }\n  @media (max-width: 991px){ .u-section-2 .u-text-2 {width: auto; margin-right: 360px}\n  .u-section-2 .u-list-1 {width: 360px; min-height: 458px} }\n  @media (max-width: 767px){ .u-section-2 {background-position: 38.62% 50%}\n  .u-section-2 .u-sheet-1 {min-height: 655px}\n  .u-section-2 .u-text-2 {margin-right: 180px}\n  .u-section-2 .u-container-layout-1 {padding-left: 10px; padding-right: 10px}\n  .u-section-2 .u-text-3 {margin-left: 86px}\n  .u-section-2 .u-text-4 {margin-left: 86px}\n  .u-section-2 .u-container-layout-2 {padding-left: 10px; padding-right: 10px}\n  .u-section-2 .u-text-5 {margin-left: 86px}\n  .u-section-2 .u-text-6 {margin-left: 86px} }\n  @media (max-width: 575px){ .u-section-2 .u-sheet-1 {min-height: 619px}\n  .u-section-2 .u-text-2 {margin-right: 0}\n  .u-section-2 .u-list-1 {min-height: 408px; margin-bottom: 0; margin-right: initial; margin-left: initial; width: auto}\n  .u-section-2 .u-text-3 {width: auto; margin-right: 50px; margin-left: 94px}\n  .u-section-2 .u-text-4 {margin-left: 94px; margin-right: 0; margin-top: 20px; width: auto}\n  .u-section-2 .u-text-5 {width: auto; margin-right: 50px; margin-left: 94px}\n  .u-section-2 .u-text-6 {margin-left: 94px; margin-right: 0; margin-top: 20px; width: auto} }</style>\n\n      <link id=\"u-theme-google-font\" rel=\"stylesheet\" href=\"./about_files/css\">\n      <script type=\"application/ld+json\">{\n      \"@context\": \"http://schema.org\",\n      \"@type\": \"Organization\",\n      \"name\": \"\",\n      \"url\": \"https://website96519.nicepage.io/Page-7.html\"\n  }</script>\n      <meta property=\"og:title\" content=\"Page 7\">\n      <meta property=\"og:type\" content=\"website\">\n      <meta name=\"theme-color\" content=\"#dcd6eb\">\n      <link rel=\"canonical\" href=\"https://website96519.nicepage.io/Page-7.html\">\n      <meta property=\"og:url\" content=\"https://website96519.nicepage.io/Page-7.html\">\n\n\n      <section class=\"u-clearfix u-image u-section-2\" id=\"sec-fac1\">\n        <div class=\"u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-sheet-1\">\n          <h2 class=\"u-text u-text-default u-text-palette-2-dark-2 u-text-1\">Arun R S</h2>\n          <p class=\"u-text u-text-palette-2-dark-2 u-text-2\">Our management consulting services focus on our clients' most critical issues and opportunities.&nbsp; Image from&nbsp;<a href=\"https://www.freepik.com/photos/people\">\n\n            </a>\n          </p>\n          <div class=\"u-expanded-width-xs u-list u-repeater u-list-1\">\n            <div class=\"u-align-left u-container-style u-list-item u-repeater-item\">\n              <div class=\"u-container-layout u-similar-container u-container-layout-1\">\n                <span class=\"u-icon u-icon-circle u-palette-1-light-3 u-spacing-10 u-text-palette-2-base u-icon-1\">\n                  <svg class=\"u-svg-link\" preserveAspectRatio=\"xMidYMin slice\" viewBox=\"0 0 54 54\" style=\"\"><use xlink:href=\"#svg-2769\"></use></svg>\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" xml:space=\"preserve\" class=\"u-svg-content\" viewBox=\"0 0 54 54\" x=\"0px\" y=\"0px\" id=\"svg-2769\" style=\"enable-background:new 0 0 54 54;\"><g><path d=\"M51.22,21h-5.052c-0.812,0-1.481-0.447-1.792-1.197s-0.153-1.54,0.42-2.114l3.572-3.571\n      c0.525-0.525,0.814-1.224,0.814-1.966c0-0.743-0.289-1.441-0.814-1.967l-4.553-4.553c-1.05-1.05-2.881-1.052-3.933,0l-3.571,3.571\n      c-0.574,0.573-1.366,0.733-2.114,0.421C33.447,9.313,33,8.644,33,7.832V2.78C33,1.247,31.753,0,30.22,0H23.78\n      C22.247,0,21,1.247,21,2.78v5.052c0,0.812-0.447,1.481-1.197,1.792c-0.748,0.313-1.54,0.152-2.114-0.421l-3.571-3.571\n      c-1.052-1.052-2.883-1.05-3.933,0l-4.553,4.553c-0.525,0.525-0.814,1.224-0.814,1.967c0,0.742,0.289,1.44,0.814,1.966l3.572,3.571\n      c0.573,0.574,0.73,1.364,0.42,2.114S8.644,21,7.832,21H2.78C1.247,21,0,22.247,0,23.78v6.439C0,31.753,1.247,33,2.78,33h5.052\n      c0.812,0,1.481,0.447,1.792,1.197s0.153,1.54-0.42,2.114l-3.572,3.571c-0.525,0.525-0.814,1.224-0.814,1.966\n      c0,0.743,0.289,1.441,0.814,1.967l4.553,4.553c1.051,1.051,2.881,1.053,3.933,0l3.571-3.572c0.574-0.573,1.363-0.731,2.114-0.42\n      c0.75,0.311,1.197,0.98,1.197,1.792v5.052c0,1.533,1.247,2.78,2.78,2.78h6.439c1.533,0,2.78-1.247,2.78-2.78v-5.052\n      c0-0.812,0.447-1.481,1.197-1.792c0.751-0.312,1.54-0.153,2.114,0.42l3.571,3.572c1.052,1.052,2.883,1.05,3.933,0l4.553-4.553\n      c0.525-0.525,0.814-1.224,0.814-1.967c0-0.742-0.289-1.44-0.814-1.966l-3.572-3.571c-0.573-0.574-0.73-1.364-0.42-2.114\n      S45.356,33,46.168,33h5.052c1.533,0,2.78-1.247,2.78-2.78V23.78C54,22.247,52.753,21,51.22,21z M52,30.22\n      C52,30.65,51.65,31,51.22,31h-5.052c-1.624,0-3.019,0.932-3.64,2.432c-0.622,1.5-0.295,3.146,0.854,4.294l3.572,3.571\n      c0.305,0.305,0.305,0.8,0,1.104l-4.553,4.553c-0.304,0.304-0.799,0.306-1.104,0l-3.571-3.572c-1.149-1.149-2.794-1.474-4.294-0.854\n      c-1.5,0.621-2.432,2.016-2.432,3.64v5.052C31,51.65,30.65,52,30.22,52H23.78C23.35,52,23,51.65,23,51.22v-5.052\n      c0-1.624-0.932-3.019-2.432-3.64c-0.503-0.209-1.021-0.311-1.533-0.311c-1.014,0-1.997,0.4-2.761,1.164l-3.571,3.572\n      c-0.306,0.306-0.801,0.304-1.104,0l-4.553-4.553c-0.305-0.305-0.305-0.8,0-1.104l3.572-3.571c1.148-1.148,1.476-2.794,0.854-4.294\n      C10.851,31.932,9.456,31,7.832,31H2.78C2.35,31,2,30.65,2,30.22V23.78C2,23.35,2.35,23,2.78,23h5.052\n      c1.624,0,3.019-0.932,3.64-2.432c0.622-1.5,0.295-3.146-0.854-4.294l-3.572-3.571c-0.305-0.305-0.305-0.8,0-1.104l4.553-4.553\n      c0.304-0.305,0.799-0.305,1.104,0l3.571,3.571c1.147,1.147,2.792,1.476,4.294,0.854C22.068,10.851,23,9.456,23,7.832V2.78\n      C23,2.35,23.35,2,23.78,2h6.439C30.65,2,31,2.35,31,2.78v5.052c0,1.624,0.932,3.019,2.432,3.64\n      c1.502,0.622,3.146,0.294,4.294-0.854l3.571-3.571c0.306-0.305,0.801-0.305,1.104,0l4.553,4.553c0.305,0.305,0.305,0.8,0,1.104\n      l-3.572,3.571c-1.148,1.148-1.476,2.794-0.854,4.294c0.621,1.5,2.016,2.432,3.64,2.432h5.052C51.65,23,52,23.35,52,23.78V30.22z\"></path><path d=\"M27,18c-4.963,0-9,4.037-9,9s4.037,9,9,9s9-4.037,9-9S31.963,18,27,18z M27,34c-3.859,0-7-3.141-7-7s3.141-7,7-7\n      s7,3.141,7,7S30.859,34,27,34z\"></path>\n  </g></svg>\n                </span>\n                <h5 class=\"u-text u-text-palette-2-dark-2 u-text-3\">MANAGEMENT</h5>\n                <p class=\"u-text u-text-palette-2-dark-2 u-text-4\">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>\n              </div>\n            </div>\n            <div class=\"u-align-left u-container-style u-list-item u-repeater-item\">\n              <div class=\"u-container-layout u-similar-container u-container-layout-2\">\n                <span class=\"u-icon u-icon-circle u-palette-1-light-3 u-spacing-10 u-text-palette-2-base u-icon-2\">\n                  <svg class=\"u-svg-link\" preserveAspectRatio=\"xMidYMin slice\" viewBox=\"0 0 61.168 61.168\" style=\"\"><use xlink:href=\"#svg-05d9\"></use></svg>\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" xml:space=\"preserve\" class=\"u-svg-content\" viewBox=\"0 0 61.168 61.168\" x=\"0px\" y=\"0px\" id=\"svg-05d9\" style=\"enable-background:new 0 0 61.168 61.168;\"><g><path d=\"M30.938,26.584c3.859,0,7-3.141,7-7s-3.141-7-7-7s-7,3.141-7,7S27.078,26.584,30.938,26.584z M30.938,14.584\n      c2.757,0,5,2.243,5,5s-2.243,5-5,5s-5-2.243-5-5S28.181,14.584,30.938,14.584z\"></path><path d=\"M50.216,37.584h-7.161l3.047-4.4c5.755-7.671,4.922-20.28-1.781-26.982c-3.621-3.622-8.437-5.617-13.56-5.617\n      c-5.122,0-9.938,1.995-13.56,5.617c-6.703,6.702-7.536,19.312-1.804,26.952l3.068,4.431h-7.513L0,60.584h61.168L50.216,37.584z\n       M17.02,31.984c-5.199-6.933-4.454-18.32,1.596-24.369c3.244-3.244,7.558-5.031,12.146-5.031s8.901,1.787,12.146,5.031\n      c6.05,6.049,6.795,17.437,1.573,24.399L30.761,51.827l-9.863-14.243h0L17.02,31.984z M12.216,39.584h7.634l10.911,15.757\n      l10.91-15.757h7.281l9.048,19H3.168L12.216,39.584z\"></path>\n  </g></svg>\n                </span>\n                <h5 class=\"u-text u-text-default u-text-palette-2-dark-2 u-text-5\">Design</h5>\n                <p class=\"u-text u-text-default u-text-palette-2-dark-2 u-text-6\">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n\n\n      <section class=\"u-backlink u-clearfix u-grey-80\">\n        <a class=\"u-link\" href=\"https://nicepage.com/website-templates\" target=\"_blank\">\n          <span></span>\n        </a>\n        <p class=\"u-text\">\n          <span>Copyrights 2022</span>\n        </p>\n        <a class=\"u-link\" href=\"https://nicepage.com/website-builder\" target=\"_blank\">\n          <span></span>\n        </a>.\n      </section>\n\n\n</ion-content>\n");

/***/ }),

/***/ 2781:
/*!***************************************!*\
  !*** ./src/app/about/about.page.scss ***!
  \***************************************/
/***/ ((module) => {


/***/ })

}]);
//# sourceMappingURL=src_app_about_about_module_ts.js.map