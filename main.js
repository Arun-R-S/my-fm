(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _radio_channels_radio_channels_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio-channels/radio-channels.page */ 4691);







const routes = [
    {
        path: '',
        redirectTo: 'radioChannels',
        pathMatch: 'full'
    },
    {
        path: 'radioChannels',
        component: _radio_channels_radio_channels_page__WEBPACK_IMPORTED_MODULE_0__.RadioChannelsPage
    },
    {
        path: 'folder/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_folder_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./folder/folder.module */ 810)).then(m => m.FolderPageModule)
    },
    {
        path: 'radio-channels',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_radio-channels_radio-channels_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./radio-channels/radio-channels.module */ 4014)).then(m => m.RadioChannelsPageModule)
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./about/about.module */ 4671)).then(m => m.AboutPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 2047)).then(m => m.SettingsPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules }),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _L_Ionic_Angular_Projects_my_fm_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 5158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let AppComponent = class AppComponent {
    constructor() {
        this.appThemeMode = 'md';
        this.appPages = [
            { title: 'Radio Channels', url: '/radioChannels', icon: 'radio' },
            { title: 'Settings', url: '/settings', icon: 'settings' },
            { title: 'About', url: '/about', icon: 'information' }
        ];
        this.audio = new Audio();
        this.volume = [
            { value: '0.2' }
        ];
        this.labels = [];
        if (localStorage.getItem('appThemeMode') != null) {
            this.appThemeMode = localStorage.getItem('appThemeMode');
        }
    }
    eventHandler(keyCode) {
        console.log(keyCode);
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _L_Ionic_Angular_Projects_my_fm_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _radio_channels_radio_channels_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radio-channels/radio-channels.page */ 4691);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/service-worker */ 7202);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 8260);
/* harmony import */ var _service_audio_service_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/audio-service.component */ 2170);
/* harmony import */ var _service_radio_channels_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/radio-channels.component */ 5489);













let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
            _radio_channels_radio_channels_page__WEBPACK_IMPORTED_MODULE_2__.RadioChannelsPage,
        ],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            })],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy },
            _service_audio_service_component__WEBPACK_IMPORTED_MODULE_4__.AudioService,
            _service_radio_channels_component__WEBPACK_IMPORTED_MODULE_5__.RadioService
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_7__.CUSTOM_ELEMENTS_SCHEMA
        ]
    })
], AppModule);



/***/ }),

/***/ 4691:
/*!*******************************************************!*\
  !*** ./src/app/radio-channels/radio-channels.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioChannelsPage": () => (/* binding */ RadioChannelsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _L_Ionic_Angular_Projects_my_fm_node_modules_ngtools_webpack_src_loaders_direct_resource_js_radio_channels_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./radio-channels.page.html */ 9556);
/* harmony import */ var _radio_channels_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radio-channels.page.scss */ 4900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _service_audio_service_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/audio-service.component */ 2170);
/* harmony import */ var _service_radio_channels_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/radio-channels.component */ 5489);
/* eslint-disable space-before-function-paren */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable prefer-const */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable max-len */






let RadioChannelsPage = class RadioChannelsPage {
    constructor(player, r) {
        this.player = player;
        this.r = r;
        this.volumeBoost = 0;
        this.volumeConvert = 100;
        this.currentVolume = 20;
        this.rangeMin = 0;
        this.rangeMax = 100;
        this.rangeStep = 1;
        this.radioPlaying = 'Select a radio';
        document.body.onkeyup = function (e) {
            if (e.keyCode == 32) {
                if (player.audio.paused) {
                    player.audio.load();
                    player.audio.play();
                }
                else {
                    player.audio.pause();
                }
            }
        };
    }
    ngOnInit() {
        if (localStorage.getItem('vol') == null) {
            this.player.audio.volume = 0.3;
            localStorage.setItem('vol', '0.3');
        }
        else {
            this.setVolume(Number(localStorage.getItem('vol')) * this.volumeConvert);
        }
    }
    getAudioStatus() {
        console.log(this.player);
    }
    ngAfterViewInit() {
    }
    selectRadioCard(id) {
        this.radioPlaying = this.r.radioChannels[id].name;
        localStorage.setItem('selectedRadioId', id);
    }
    selectRadio(url, id, name) {
        this.selectRadioCard(id);
        this.volumeBoost = this.r.radioChannels[id].volumeBoost;
        //console.log(this.radioChannels[id].volumeBoost);
        this.radioPlaying = name;
        this.player.audio.pause();
        this.player.audio.src = url;
        this.player.audio.load();
        this.player.audio.play();
    }
    radioStop() {
        this.player.audio.pause();
        this.player.audio.src = '';
        this.radioPlaying = 'Select a radio';
    }
    refreshVolume() {
        this.player.audio.volume = (Number(localStorage.getItem('vol')) + (this.volumeBoost / this.volumeConvert));
    }
    setVolume(vol) {
        if ((vol + this.volumeBoost) / this.volumeConvert >= 1) {
            this.player.audio.volume = 1;
            this.currentVolume = 100;
            localStorage.setItem('vol', '1');
            return;
        }
        this.player.audio.volume = (vol + this.volumeBoost) / this.volumeConvert;
        this.currentVolume = (vol + this.volumeBoost);
        localStorage.setItem('vol', (vol / this.volumeConvert).toString());
    }
    volume(vol) {
        if (vol.detail.value === 0) {
            this.player.audio.volume = 0;
            localStorage.setItem('vol', '0');
            return;
        }
        //console.log(((vol.detail.value + this.volumeBoost) / this.volumeConvert));
        if ((vol.detail.value + this.volumeBoost) / this.volumeConvert >= 1) {
            this.player.audio.volume = 1;
            localStorage.setItem('vol', '1');
            return;
        }
        this.player.audio.volume = (vol.detail.value + this.volumeBoost) / this.volumeConvert;
        localStorage.setItem('vol', (vol.detail.value / this.volumeConvert).toString());
    }
    togglePlay() {
        if (this.player.audio.paused) {
            this.player.audio.load();
            this.player.audio.play();
        }
        else {
            this.player.audio.pause();
        }
    }
    getRadioName(src) {
        for (let i = 0; i < this.r.radioChannels.length; i++) {
            if (this.r.radioChannels[i].url == src) {
                return this.r.radioChannels[i].name;
            }
        }
        return 'Name Error';
    }
};
RadioChannelsPage.ctorParameters = () => [
    { type: _service_audio_service_component__WEBPACK_IMPORTED_MODULE_2__.AudioService },
    { type: _service_radio_channels_component__WEBPACK_IMPORTED_MODULE_3__.RadioService }
];
RadioChannelsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-radio-channels',
        template: _L_Ionic_Angular_Projects_my_fm_node_modules_ngtools_webpack_src_loaders_direct_resource_js_radio_channels_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_radio_channels_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RadioChannelsPage);



/***/ }),

/***/ 2170:
/*!****************************************************!*\
  !*** ./src/app/service/audio-service.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudioService": () => (/* binding */ AudioService)
/* harmony export */ });
class AudioService {
    constructor() {
        this.audio = new Audio();
    }
}


/***/ }),

/***/ 5489:
/*!*****************************************************!*\
  !*** ./src/app/service/radio-channels.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioService": () => (/* binding */ RadioService)
/* harmony export */ });
/* eslint-disable max-len */
class RadioService {
    constructor() {
        this.radioChannels = [
            { name: '92.7 Big FM', url: 'http://213.32.90.126:5006/1', icon: '../../assets/images/bigfm.jpg', volumeBoost: 0, isLive: true },
            { name: '98.3 Radio Mirchi', url: 'http://213.32.90.126:5000/1', icon: '../../assets/images/radio-mirchi.jpg', volumeBoost: 0, isLive: true },
            { name: '106.4 Hello FM', url: 'http://213.32.90.126:5010/1', icon: '../../assets/images/hello-fm.jpg', volumeBoost: 15, isLive: true },
            { name: '93.5 Suryan FM', url: 'http://209.133.216.3:7071/;stream.mp3', icon: '../../assets/images/suryan-fm.jpg', volumeBoost: 0, isLive: true },
            { name: 'Hello FM Chennai', url: 'https://listen.openstream.co/6803/audio', icon: '../../assets/images/hello-fm-chennai.jpg', volumeBoost: 0, isLive: true },
            { name: 'Vanakkam FM', url: 'https://stream.zenolive.com/8rnkv9qrxueuv.aac', icon: '../../assets/images/vanakkam-fm.jpg', volumeBoost: 0, isLive: false },
            { name: '100.5 Kodai FM', url: 'http://163.172.165.94:8300/kodaifm', icon: '../../assets/images/kodai-fm.jpg', volumeBoost: 0, isLive: false },
            { name: '91.1 Radio City', url: 'https://stream.zeno.fm/u5p1nw3zrf9uv', icon: '../../assets/images/radio-city.jpg', volumeBoost: 0, isLive: true },
            { name: 'AR Rahman FM', url: 'https://southradios.net/play/arrahmanradio', icon: '../../assets/images/ar-rahman.jpg', volumeBoost: 0, isLive: true },
            { name: 'Illayaraja FM', url: 'https://southradios.net/play/ilayarajaradio', icon: '../../assets/images/ilayaraja.jpg', volumeBoost: 0, isLive: true },
            { name: 'Thala Thalapathy FM', url: 'https://southradios.net/play/thalathalapathyradio', icon: '../../assets/images/thala-thalapathy.jpg', volumeBoost: 0, isLive: true },
            { name: 'Harrish Jayaraj FM', url: 'https://southradios.net/play/harrishjeyarajradio', icon: '../../assets/images/harrish-jayaraj.jpg', volumeBoost: 0, isLive: true },
            { name: 'SPB Radio', url: 'https://stream.zeno.fm/w2r2z0x547zuv', icon: '../../assets/images/spb-fm.jpg', volumeBoost: 0, isLive: true },
        ];
    }
}


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		3477,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		7196,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		8081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		5017,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		9721,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		9216,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		6612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		2694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		2938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		1379,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		7552,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		7218,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		7479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		4134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		1439,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		6397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		3296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		2413,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		9411,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		9133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		9003,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6065,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		6991,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		2947,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		5919,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		3109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		9459,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		301,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3799,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		2140,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		6197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1975,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		8387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		8659,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		6404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		5253,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2619,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		2871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		7668,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		5342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		6185,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		7337,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5705,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		7463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n          <ion-item>\n            <ion-avatar slot=\"start\">\n              <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n            </ion-avatar>\n            <ion-label>\n              <h2>Arun R S</h2>\n              <p>contact.arunrs@gmail.com</p>\n            </ion-label>\n          </ion-item>\n\n\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\"\n              routerLinkActive=\"selected\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n        <ion-list id=\"labels-list\">\n          <ion-list-header></ion-list-header>\n\n          <ion-item *ngFor=\"let label of labels\" lines=\"none\">\n            <ion-icon slot=\"start\" ios=\"bookmark-outline\" md=\"bookmark-sharp\"></ion-icon>\n            <ion-label>{{ label }}</ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\" (keypress)=\"eventHandler($event.keyCode)\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n");

/***/ }),

/***/ 9556:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/radio-channels/radio-channels.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-row>\n      <ion-menu-toggle style=\"padding-left: 10px;\">\n        <ion-icon size=\"large\" name=\"menu\"></ion-icon>\n      </ion-menu-toggle>\n      <ion-title id=\"radioName\" *ngIf=\"!this.player.audio.paused\">{{getRadioName(this.player.audio.src)}}</ion-title>\n      <ion-title id=\"radioName\" *ngIf=\"this.player.audio.paused\">Select a radio</ion-title>\n\n    </ion-row>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"container\" id=\"cardContainer\">\n    <div *ngFor=\"let r of r.radioChannels; let i = index\" [attr.data-index]=\"i\">\n      <div (click)=\"selectRadio(r.url,i,r.name)\"\n      [attr.class]=\"((this.player.audio.src===r.url)) ? 'card active' : 'card'\"\n      id=\"rad{{i}}\" >\n        <div class=\"card-header\">\n          <img [src]=\"[r.icon]\" [alt]=\"[r.name]\" />\n        </div>\n\n      </div>\n      <p id=\"radioNameShow\">\n        <span *ngIf=\"r.isLive\" class=\"online\">●</span>\n        <span *ngIf=\"!r.isLive\" class=\"offline\">●</span>\n        <span>{{r.name}}</span>\n      </p>\n    </div>\n    <button (click)=\"getAudioStatus()\"></button>\n  </div>\n  <br>\n</ion-content>\n<ion-navbar class=\"navBar\">\n  <ion-list >\n\n    <ion-item class=\"volumeSlider\">\n\n      <ion-range  value=\"{{currentVolume}}\" [pin]=\"true\" id=\"volume\" min=\"{{rangeMin}}\" max=\"{{rangeMax}}\" step=\"{{rangeStep}}\" (ionChange)=\"volume($event)\" style=\"padding-top: 10px;\">\n\n\n\n        <ion-icon [attr.name]=\"this.player.audio.paused ? 'play' : 'pause'\" color=\"primary\" slot=\"start\" id=\"playButton\" (click)=\"togglePlay()\"></ion-icon>\n\n        <ion-icon name=\"stop\" color=\"danger\" slot=\"start\" id=\"stopButton\" (click)=\"radioStop()\"></ion-icon>\n        <ion-icon size=\"small\" slot=\"start\" name=\"volume-low\"></ion-icon>\n\n        <ion-icon slot=\"end\" name=\"volume-high\">\n\n        </ion-icon>\n\n      </ion-range>\n\n    </ion-item>\n  </ion-list>\n\n</ion-navbar>\n");

/***/ }),

/***/ 836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0RBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFKRjs7QUFPQTtFQUNFLGlDQUFBO0FBSkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */";

/***/ }),

/***/ 4900:
/*!*********************************************************!*\
  !*** ./src/app/radio-channels/radio-channels.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n* {\n  box-sizing: border-box;\n}\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  background-color: #f7f8fc;\n  font-family: \"Roboto\", sans-serif;\n  color: #10182f;\n}\n#radioNameShow {\n  text-align: center;\n  font-size: 14px;\n  margin-top: 1px;\n}\n.online {\n  color: green;\n  font-size: 30px;\n  vertical-align: sub;\n}\n.offline {\n  color: red;\n  font-size: 30px;\n  vertical-align: sub;\n}\n.navBar {\n  box-shadow: -10px -10px 20px -10px black;\n}\n.container {\n  display: flex;\n  grid-template-columns: repeat(5, 1fr);\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.card {\n  transition: 0.3s;\n  margin: 10px;\n  margin-bottom: 1px;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 2px 2px 9px black;\n  overflow: hidden;\n  width: 120px;\n}\n.navBar {\n  border-top: 1px solid #acaaaa;\n}\n.card.manualStationActive {\n  box-shadow: 0px 0px 10px 10px green;\n}\n.card.active {\n  border: 4px solid red;\n  transform: scale(1.155);\n}\n.card-header img {\n  width: 100%;\n  object-fit: cover;\n}\n.card-body {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 20px;\n  min-height: 250px;\n}\n.tag {\n  background: #cccccc;\n  border-radius: 50px;\n  font-size: 12px;\n  margin: 0;\n  color: #fff;\n  padding: 2px 10px;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n.tag-teal {\n  background-color: #47bcd4;\n}\n.tag-purple {\n  background-color: #5e76bf;\n}\n.tag-pink {\n  background-color: #cd5b9f;\n}\n.card-body p {\n  font-size: 13px;\n  margin: 0 0 40px;\n}\n.user {\n  display: flex;\n  margin-top: auto;\n}\n.user img {\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  margin-right: 10px;\n}\n.user-info h5 {\n  margin: 0;\n}\n.user-info small {\n  color: #545d7a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvLWNoYW5uZWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwyRUFBQTtBQUNSO0VBQ0Usc0JBQUE7QUFDRjtBQUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUFFRjtBQUFBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUdGO0FBREE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSUY7QUFGQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFLRjtBQUhBO0VBQ0Usd0NBQUE7QUFNRjtBQUpBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQU9GO0FBTEE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFFQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQU9GO0FBTEE7RUFDRSw2QkFBQTtBQVFGO0FBTEE7RUFDRSxtQ0FBQTtBQVFGO0FBTkE7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0FBU0Y7QUFQQTtFQUNFLFdBQUE7RUFFQSxpQkFBQTtBQVNGO0FBUEE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBVUY7QUFQQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQVVGO0FBUkE7RUFDRSx5QkFBQTtBQVdGO0FBVEE7RUFDRSx5QkFBQTtBQVlGO0FBVkE7RUFDRSx5QkFBQTtBQWFGO0FBVkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFhRjtBQVhBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBY0Y7QUFYQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWNGO0FBWkE7RUFDRSxTQUFBO0FBZUY7QUFiQTtFQUNFLGNBQUE7QUFnQkYiLCJmaWxlIjoicmFkaW8tY2hhbm5lbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXBcIik7XHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGZjO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjMTAxODJmO1xyXG59XHJcbiNyYWRpb05hbWVTaG93e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLXRvcDogMXB4O1xyXG59XHJcbi5vbmxpbmV7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xyXG59XHJcbi5vZmZsaW5le1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBzdWI7XHJcbn1cclxuLm5hdkJhcntcclxuICBib3gtc2hhZG93OiAtMTBweCAtMTBweCAyMHB4IC0xMHB4IGJsYWNrO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNhcmQge1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLy9ib3gtc2hhZG93OiAwIDJweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDlweCBibGFjaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMjBweDtcclxufVxyXG4ubmF2QmFye1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMTcyLCAxNzAsIDE3MCk7XHJcbn1cclxuXHJcbi5jYXJkLm1hbnVhbFN0YXRpb25BY3RpdmV7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDEwcHggZ3JlZW47XHJcbn1cclxuLmNhcmQuYWN0aXZle1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkIHJlZCA7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1NSk7XHJcbn1cclxuLmNhcmQtaGVhZGVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5jYXJkLWJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG4udGFnIHtcclxuICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAycHggMTBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udGFnLXRlYWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0N2JjZDQ7XHJcbn1cclxuLnRhZy1wdXJwbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZTc2YmY7XHJcbn1cclxuLnRhZy1waW5rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Q1YjlmO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHAge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBtYXJnaW46IDAgMCA0MHB4O1xyXG59XHJcbi51c2VyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbn1cclxuXHJcbi51c2VyIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnVzZXItaW5mbyBoNSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi51c2VyLWluZm8gc21hbGwge1xyXG4gIGNvbG9yOiAjNTQ1ZDdhO1xyXG59XHJcbiJdfQ== */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map