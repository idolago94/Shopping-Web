(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'shoppingWeb-front';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_store_store_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/store/store.component */ "./src/app/components/store/store.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/components/cart/cart.component.ts");
/* harmony import */ var _components_allproducts_allproducts_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/allproducts/allproducts.component */ "./src/app/components/allproducts/allproducts.component.ts");
/* harmony import */ var _components_cart_product_cart_product_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/cart-product/cart-product.component */ "./src/app/components/cart-product/cart-product.component.ts");
/* harmony import */ var _components_single_product_single_product_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/single-product/single-product.component */ "./src/app/components/single-product/single-product.component.ts");
/* harmony import */ var _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/invoice/invoice.component */ "./src/app/components/invoice/invoice.component.ts");
/* harmony import */ var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/logo/logo.component */ "./src/app/components/logo/logo.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_preview_order_preview_order_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/preview-order/preview-order.component */ "./src/app/components/preview-order/preview-order.component.ts");
/* harmony import */ var _pipes_milk_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pipes/milk.pipe */ "./src/app/pipes/milk.pipe.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_23__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"],
                _components_store_store_component__WEBPACK_IMPORTED_MODULE_25__["StoreComponent"],
                _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_26__["CartComponent"],
                _components_allproducts_allproducts_component__WEBPACK_IMPORTED_MODULE_27__["AllproductsComponent"],
                _components_cart_product_cart_product_component__WEBPACK_IMPORTED_MODULE_28__["CartProductComponent"],
                _components_single_product_single_product_component__WEBPACK_IMPORTED_MODULE_29__["SingleProductComponent"],
                _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_30__["InvoiceComponent"],
                _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_31__["LogoComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_32__["HeaderComponent"],
                _components_preview_order_preview_order_component__WEBPACK_IMPORTED_MODULE_33__["PreviewOrderComponent"],
                _pipes_milk_pipe__WEBPACK_IMPORTED_MODULE_34__["MilkPipe"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_35__["AdminComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                // angular material components
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__["MatBadgeModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot([
                    { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"] },
                    { path: "register", component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_23__["RegisterComponent"] },
                    { path: "store", component: _components_store_store_component__WEBPACK_IMPORTED_MODULE_25__["StoreComponent"] },
                    { path: "cart", component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_26__["CartComponent"] },
                    { path: "invoice", component: _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_30__["InvoiceComponent"] },
                    { path: "logo", component: _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_31__["LogoComponent"] },
                    { path: "previeworder", component: _components_preview_order_preview_order_component__WEBPACK_IMPORTED_MODULE_33__["PreviewOrderComponent"] },
                    { path: "adminstrator", component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_35__["AdminComponent"] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" >\r\n  <div class=\"col-sm-4\" id=\"product-view\" *ngIf=\"this.showView\" >\r\n    <mat-card>\r\n      <form [formGroup]=\"productForm\">\r\n        <div>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Name\" formControlName=\"name\" />\r\n          </mat-form-field>\r\n        </div>\r\n        <div>\r\n          <mat-form-field>\r\n            <mat-select  formControlName=\"category_id\" placeholder=\"Select Category\">\r\n              <mat-option *ngFor=\"let category of allCategories\" [value]=\"category._id\" >\r\n                {{category.name}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <button mat-button (click)=\"openModal(content)\" >+</button>\r\n        </div>\r\n        <div>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Price\" formControlName=\"price\" type=\"number\" />\r\n          </mat-form-field>\r\n        </div>\r\n        <div>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Picture\" formControlName=\"picture\" />\r\n          </mat-form-field>\r\n        </div>\r\n        <button mat-button (click)=\"updateProduct('delete')\">DELETE</button>\r\n        <button mat-button (click)=\"updateProduct('save')\">SAVE</button>\r\n      </form>\r\n    </mat-card>\r\n    \r\n  </div>\r\n  <div class=\"col-sm-8 row\">\r\n    <form [formGroup]=\"newProduct\" >\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Name\" formControlName=\"name\" />\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <mat-select  formControlName=\"category_id\" placeholder=\"Select Category\">\r\n              <mat-option *ngFor=\"let category of allCategories\" [value]=\"category._id\" >\r\n                {{category.name}}\r\n              </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n        <button mat-button (click)=\"openModal(content)\" >+</button>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Price\" formControlName=\"price\" type=\"number\" />\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Picture\" formControlName=\"picture\" />\r\n        </mat-form-field>\r\n        <button mat-button (click)=\"addNewProduct()\">ADD NEW PRODUCT</button>\r\n    </form>\r\n    <app-single-product class=\"col-sm-3\" *ngFor=\"let product of allProducts\" [data]=\"product\" (click)=\"showProduct(product)\"></app-single-product>\r\n  </div>\r\n</div>\r\n\r\n<!-- new category modal -->\r\n<ng-template #content let-modal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Category:</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('close')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <mat-card>\r\n        <form [formGroup]=\"newCategory\">\r\n          <mat-form-field>\r\n          <input matInput placeholder=\"Name\" formControlName=\"name\" width=\"20\" />\r\n          </mat-form-field>\r\n        </form>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('save')\">ADD</button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminComponent = /** @class */ (function () {
    function AdminComponent(snackBar, modalService, router, userService, productService, categoryService) {
        this.snackBar = snackBar;
        this.modalService = modalService;
        this.router = router;
        this.userService = userService;
        this.productService = productService;
        this.categoryService = categoryService;
        this.showView = false;
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            picture: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
        this.newProduct = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            picture: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
        this.newCategory = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userService.currentUser.authority != 'admin') {
            this.router.navigate(['']);
        }
        this.getAllProducts();
        this.getAllCategory();
        this.categoryService.newCategoryAdded.subscribe(function () {
            _this.getAllCategory();
        });
        this.productService.productUpdate.subscribe(function () {
            _this.getAllProducts();
        });
    };
    AdminComponent.prototype.getAllCategory = function () {
        var _this = this;
        this.categoryService.getAll().subscribe(function (data) {
            _this.allCategories = data;
        });
    };
    AdminComponent.prototype.getAllProducts = function () {
        var _this = this;
        this.productService.getAll().subscribe(function (data) {
            _this.allProducts = data;
        });
    };
    AdminComponent.prototype.showProduct = function (product) {
        this.currentProduct_id = product._id;
        this.productForm.setValue({
            name: product.name,
            category_id: product.category_id,
            price: product.price,
            picture: product.picture
        });
        this.showView = true;
    };
    AdminComponent.prototype.openModal = function (content) {
        var _this = this;
        console.log(content);
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            // click X or SAVE
            if (result == 'save') {
                _this.categoryService.addCategory(_this.newCategory.value).subscribe(function (data) {
                    _this.newCategory.reset();
                    _this.snackBar.open('New category added!! ⭐');
                    _this.categoryService.newCategoryAdded.next();
                });
            }
        });
    };
    AdminComponent.prototype.updateProduct = function (type) {
        var _this = this;
        switch (type) {
            case 'save':
                this.productService.updateProduct(this.currentProduct_id, this.productForm.value).subscribe(function (data) {
                    _this.currentProduct_id = null;
                    _this.showView = false;
                    _this.productForm.reset();
                    _this.productService.productUpdate.next();
                });
                break;
            case 'delete':
                this.productService.deleteProduct(this.currentProduct_id).subscribe(function (data) {
                    _this.currentProduct_id = null;
                    _this.showView = false;
                    _this.productForm.reset();
                    _this.productService.productUpdate.next();
                });
                break;
        }
    };
    AdminComponent.prototype.addNewProduct = function () {
        var _this = this;
        this.productService.addProduct(this.newProduct.value).subscribe(function (data) {
            _this.newProduct.reset();
            _this.productService.productUpdate.next();
        });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], src_app_services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/allproducts/allproducts.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/allproducts/allproducts.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n    padding: 40px;\r\n}\r\n\r\n.search-field {\r\n    padding-right: 0 !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGxwcm9kdWN0cy9hbGxwcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLDRCQUE0QjtDQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxscHJvZHVjdHMvYWxscHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtZmllbGQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/allproducts/allproducts.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/allproducts/allproducts.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <form [formGroup]=\"searchForm\" >\n      <mat-form-field>\n        <mat-select placeholder=\"Select Category\" (selectionChange)=\"filterByCategory()\" formControlName=\"selectedCategory\" >\n          <mat-option value=\"0\" >All</mat-option>\n          <mat-option *ngFor=\"let category of allCategory\" [value]=\"category._id\">\n            {{category.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field class=\"search-field\">\n        <input matInput placeholder=\"search\" formControlName=\"search\" />\n      </mat-form-field>\n      <button mat-button><img src='https://cdn2.iconfinder.com/data/icons/media-and-navigation-buttons-square/512/Button_15-512.png' height=\"30\" (click)=\"search()\"/></button>\n      \n    </form>\n</div>\n\n<div class=\"row\">\n  <app-single-product class=\"col-sm-3\" *ngFor=\"let product of dataArray\" [data]=\"product\" ></app-single-product>\n</div>"

/***/ }),

/***/ "./src/app/components/allproducts/allproducts.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/allproducts/allproducts.component.ts ***!
  \*****************************************************************/
/*! exports provided: AllproductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllproductsComponent", function() { return AllproductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllproductsComponent = /** @class */ (function () {
    function AllproductsComponent(productService, categoryService) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            selectedCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    }
    AllproductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getAll().subscribe(function (data) {
            _this.allProducts = data;
            _this.dataArray = data;
        });
        this.categoryService.getAll().subscribe(function (data) {
            _this.allCategory = data;
        });
    };
    AllproductsComponent.prototype.search = function () {
        var _this = this;
        this.allProducts.map(function (product) {
            if (_this.searchForm.controls.search.value == product.name) {
                _this.dataArray = [product];
            }
        });
    };
    AllproductsComponent.prototype.filterByCategory = function () {
        var _this = this;
        if (this.searchForm.controls.selectedCategory.value == 0) {
            this.dataArray = this.allProducts;
        }
        else {
            this.productService.getByCategoryId(this.searchForm.controls.selectedCategory.value)
                .subscribe(function (data) {
                _this.dataArray = data;
            });
        }
    };
    AllproductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-allproducts',
            template: __webpack_require__(/*! ./allproducts.component.html */ "./src/app/components/allproducts/allproducts.component.html"),
            styles: [__webpack_require__(/*! ./allproducts.component.css */ "./src/app/components/allproducts/allproducts.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]])
    ], AllproductsComponent);
    return AllproductsComponent;
}());



/***/ }),

/***/ "./src/app/components/cart-product/cart-product.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/cart-product/cart-product.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".delete-btn {\r\n    position: relative;\r\n    float: right;\r\n    right: 0;\r\n    height: 100% !important;\r\n}\r\n\r\nmat-card {\r\n    padding-right: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0LXByb2R1Y3QvY2FydC1wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFNBQVM7SUFDVCx3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSxpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcnQtcHJvZHVjdC9jYXJ0LXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZWxldGUtYnRuIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/cart-product/cart-product.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/cart-product/cart-product.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <img [src]=\"productData.picture\" height=\"40\" />\n  <b [innerHTML]=\"productData.name | milk:mark\"></b>\n  <span> {{ productData.price | currency:'ILS' }} X {{ details.quantity }} = {{ details.total_price | currency:'ILS' }}</span>\n  <button matTooltip=\"Delete product\" *ngIf=\"!this.preview_mode\" (click)=\"deleteCartProduct()\" class=\"delete-btn\" mat-button ><img src='https://freeiconshop.com/wp-content/uploads/edd/trash-var-outline.png' height=\"18\" /></button>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/cart-product/cart-product.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/cart-product/cart-product.component.ts ***!
  \*******************************************************************/
/*! exports provided: CartProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartProductComponent", function() { return CartProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_cart_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart-product.service */ "./src/app/services/cart-product.service.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartProductComponent = /** @class */ (function () {
    function CartProductComponent(productService, cartProductService, cartService) {
        this.productService = productService;
        this.cartProductService = cartProductService;
        this.cartService = cartService;
    }
    CartProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getById(this.details.product_id).subscribe(function (data) {
            _this.productData = data;
        });
    };
    CartProductComponent.prototype.deleteCartProduct = function () {
        var _this = this;
        debugger;
        this.cartProductService.deleteCartProduct(this.details._id).subscribe(function (data) {
            _this.cartService.cartNeedToUpdate.next();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CartProductComponent.prototype, "preview_mode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CartProductComponent.prototype, "details", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CartProductComponent.prototype, "mark", void 0);
    CartProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart-product',
            template: __webpack_require__(/*! ./cart-product.component.html */ "./src/app/components/cart-product/cart-product.component.html"),
            styles: [__webpack_require__(/*! ./cart-product.component.css */ "./src/app/components/cart-product/cart-product.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], src_app_services_cart_product_service__WEBPACK_IMPORTED_MODULE_2__["CartProductService"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
    ], CartProductComponent);
    return CartProductComponent;
}());



/***/ }),

/***/ "./src/app/components/cart/cart.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/cart/cart.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".minimize-icon, .deleteAll-icon, .maximize-icon {\r\n    float: right;\r\n    margin-right: 7px;\r\n}\r\n\r\n.back-link {\r\n    float: right;\r\n    margin-right: 7px;\r\n    font-size: 14px;\r\n}\r\n\r\na {\r\n    color: blue;\r\n    -webkit-text-decoration-line: underline;\r\n            text-decoration-line: underline;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLFlBQVk7SUFDWix3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0NBQ25DIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taW5pbWl6ZS1pY29uLCAuZGVsZXRlQWxsLWljb24sIC5tYXhpbWl6ZS1pY29uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG59XHJcblxyXG4uYmFjay1saW5rIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/cart/cart.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/cart/cart.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- cart is not empty -->\r\n<mat-card *ngIf=\"this.cartService.openCart\" >\r\n    <mat-card-title>\r\n        <h3>\r\n            My Cart\r\n            <span *ngIf=\"!this.preview_mode\">\r\n                <img matTooltip=\"Delete all\" *ngIf=\"this.cartService.openCart\" class=deleteAll-icon src='https://cdn2.iconfinder.com/data/icons/shopping-e-commerce-2-1/32/Remove-All-Cart-delete-Trolley-512.png' (click)=\"deleteAllCart()\" height=\"30\" />\r\n                <img matTooltip=\"Minimize\" *ngIf=\"!this.cartService.minimize\" class=\"minimize-icon\" src='https://cdn3.iconfinder.com/data/icons/line/36/subtract-512.png' (click)=\"this.cartService.minimize=true\" height=\"30\"/>\r\n                <img matTooltip=\"Move to side\" *ngIf=\"this.cartService.minimize\" class=\"maximize-icon\" src='https://cdn1.iconfinder.com/data/icons/education-set-7/512/arrow5-left-512.png' (click)=\"this.cartService.minimize=false\" height=\"30\"/>\r\n            </span>\r\n            <a class=\"back-link\" *ngIf=\"this.preview_mode\" (click)=\"router.navigate(['store'])\" >Back to shop</a>\r\n        </h3>\r\n    </mat-card-title>\r\n    <mat-card-content>\r\n        <mat-form-field *ngIf=\"this.preview_mode\">\r\n            <input matInput placeholder=\"Search\" [(ngModel)]=\"search\" />\r\n        </mat-form-field>\r\n        <app-cart-product *ngFor=\"let p of this.cartProductService.openCartProducts\" [preview_mode]=\"preview_mode\" [mark]=\"search\" [details]=\"p\"></app-cart-product>\r\n    </mat-card-content>\r\n    <mat-card-footer>\r\n        <h5>\r\n           <b>Total price: </b>    \r\n           <span>{{ cartTotalPrice | currency:'ILS' }}</span> \r\n           <button mat-butoon (click)=\"router.navigate(['previeworder'])\" *ngIf=\"!this.preview_mode\" >Order</button>\r\n        </h5>\r\n    </mat-card-footer>\r\n</mat-card>\r\n\r\n<!-- cart is empty -->\r\n<mat-card *ngIf=\"!this.cartService.openCart\" >\r\n    <mat-card-title>\r\n        <h3>\r\n            My Cart\r\n            <span *ngIf=\"!this.preview_mode\">\r\n                <img matTooltip=\"Minimize\" *ngIf=\"!this.cartService.minimize\" class=\"minimize-icon\" src='https://cdn3.iconfinder.com/data/icons/line/36/subtract-512.png' (click)=\"this.cartService.minimize=true\" height=\"30\"/>\r\n                <img matTooltip=\"Move to side\" *ngIf=\"this.cartService.minimize\" class=\"maximize-icon\" src='https://cdn1.iconfinder.com/data/icons/education-set-7/512/arrow5-left-512.png' (click)=\"this.cartService.minimize=false\" height=\"30\"/>\r\n            </span>\r\n        </h3>\r\n    </mat-card-title>\r\n    <mat-card-content>\r\n        <h4>\r\n            Your Shopping Cart is empty <a href=\"store\">Start shopping now!</a>\r\n        </h4>\r\n    </mat-card-content>\r\n</mat-card>\r\n\r\n<mark></mark>"

/***/ }),

/***/ "./src/app/components/cart/cart.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_services_cart_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart-product.service */ "./src/app/services/cart-product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var CartComponent = /** @class */ (function () {
    function CartComponent(cartService, userService, cartProductService, router) {
        this.cartService = cartService;
        this.userService = userService;
        this.cartProductService = cartProductService;
        this.router = router;
        this.cartTotalPrice = 0;
        this.search = '';
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        // check for a open cart of the user
        this.cartService.getByUserId(this.userService.currentUser.id).subscribe(function (data) {
            if (data.length > 0) {
                _this.cartService.openCart = data[0];
                _this.getCartProducts(data[0]._id);
            }
        });
        this.cartService.cartNeedToUpdate.subscribe(function () {
            _this.getCartProducts(_this.cartService.openCart._id);
        });
    };
    // get all the products of the cart ( call after any update at the cart )
    CartComponent.prototype.getCartProducts = function (cartID) {
        var _this = this;
        this.cartProductService.getByCart(cartID).subscribe(function (data) {
            _this.cartProductService.openCartProducts = data;
            _this.calculateTotalPrice();
        });
    };
    // calculate the total price of the cart ( call after getCartProducts() )
    CartComponent.prototype.calculateTotalPrice = function () {
        var _this = this;
        this.cartTotalPrice = 0;
        if (this.cartProductService.openCartProducts) {
            this.cartProductService.openCartProducts.map(function (cartProduct) {
                _this.cartTotalPrice += cartProduct.total_price;
            });
        }
    };
    // delete the cart and all the products of the cart
    CartComponent.prototype.deleteAllCart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cartProductService.openCartProducts.map(function (cartProduct) {
                            _this.cartProductService.deleteCartProduct(cartProduct._id).subscribe(function (data) {
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.cartService.deleteCart(this.cartService.openCart._id).subscribe(function (data) {
                            })];
                    case 2:
                        _a.sent();
                        this.cartService.openCart = null;
                        this.cartProductService.openCartProducts = null;
                        this.calculateTotalPrice();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CartComponent.prototype, "preview_mode", void 0);
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/components/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/components/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"], src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], src_app_services_cart_product_service__WEBPACK_IMPORTED_MODULE_3__["CartProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.header {\r\n    height: 50px;\r\n    width: 100%;\r\n    background-color: royalblue;\r\n}\r\n\r\n.logo {\r\n    float: left;\r\n    display: inline;\r\n}\r\n\r\nspan.user-btn {\r\n    float: right;\r\n    height: 100%;\r\n    width: 140px;\r\n    padding-left: 10px;\r\n    margin-left: 8px;\r\n    border-left: 2px solid gray;\r\n}\r\n\r\nspan.user-btn:hover, span.cart-btn:hover {\r\n    background-color: rgba(128, 128, 128, 0.253);\r\n}\r\n\r\nspan.cart-btn {\r\n    float: right;\r\n    height: 90%;\r\n    margin-right: 6px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.user-btn > * , div.hi-user > * , .cart-btn > * {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.cart-btn > label {\r\n    margin-top: 12px;\r\n}\r\n\r\nmat-expansion-panel-header {\r\n    float: right;\r\n}\r\n\r\nmat-expansion-panel {\r\n    background-color: royalblue;\r\n}\r\n\r\n.badge {\r\n    position: relative;\r\n    top: 6px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDRCQUE0QjtDQUMvQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDRCQUE0QjtDQUMvQjs7QUFFRDtJQUNJLDZDQUE2QztDQUNoRDs7QUFFRDtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxVQUFVO0NBQ2I7O0FBRUQ7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksNEJBQTRCO0NBQy9COztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFNBQVM7Q0FDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbnNwYW4udXNlci1idG4ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgZ3JheTtcclxufVxyXG5cclxuc3Bhbi51c2VyLWJ0bjpob3Zlciwgc3Bhbi5jYXJ0LWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjUzKTtcclxufVxyXG5cclxuc3Bhbi5jYXJ0LWJ0biB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnVzZXItYnRuID4gKiAsIGRpdi5oaS11c2VyID4gKiAsIC5jYXJ0LWJ0biA+ICoge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNhcnQtYnRuID4gbGFiZWwge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG5cclxubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTtcclxufVxyXG5cclxuLmJhZGdlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n\n  <!-- logo -->\n  <app-logo class=\"logo\" [height]=\"50\" (click)=\"this.router.navigate([''])\" ></app-logo>\n\n  <!-- user button (logout option) -->\n  <span class=\"row user-btn\" *ngIf=\"this.userService.currentUser\">\n    <img class=\"col-sm-4\" src=\"https://unity3d.com/profiles/unity3d/themes/unity/images/ui/icons/other/user-default128x128.png\" height=\"50\" />\n    <div class=\"col-sm-6 hi-user text-center\">\n      <p>Hi, {{ this.userService.currentUser.firstName }}</p>\n      <button mat-button (click)=\"doLogout()\" >Logout</button>\n    </div>\n  </span>\n\n  <!-- cart button (when minimize) -->\n  <span class=\"cart-btn\" *ngIf=\"this.cartService.minimize && this.userService.currentUser\">\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            <label class=\"badge\" matBadge=\"!\">\n              <img src=\"https://cdn3.iconfinder.com/data/icons/meanicons-4/512/meanicons_54-512.png\" height=\"30\" />\n            </label>\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <app-cart></app-cart>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </span>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var src_app_services_cart_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart-product.service */ "./src/app/services/cart-product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userService, cartService, cartProductService, router) {
        this.userService = userService;
        this.cartService = cartService;
        this.cartProductService = cartProductService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.doLogout = function () {
        var _this = this;
        this.userService.logout().subscribe(function () {
            _this.router.navigate(['']);
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"], src_app_services_cart_product_service__WEBPACK_IMPORTED_MODULE_3__["CartProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.col-sm-4 {\r\n    position: relative;\r\n    border: 2px dotted royalblue;\r\n    border-radius: 10px;\r\n}\r\n\r\ndiv.row {\r\n    height: 500px;\r\n}\r\n\r\nmat-card.notifications {\r\n    width: 100%;\r\n    position: relative;\r\n    top: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0Isb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsU0FBUztDQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5jb2wtc20tNCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IDJweCBkb3R0ZWQgcm95YWxibHVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuZGl2LnJvdyB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZC5ub3RpZmljYXRpb25zIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center\">\n  <div class=\"col-sm-4\">\n    <button *ngIf=\"!userCart\" class=\"form-control\" mat-raised-button color=\"accent\" [disabled]=\"!this.userService.currentUser\" (click)=\"router.navigate(['store'])\" >Start Shopping</button>\n    <button *ngIf=\"userCart\" class=\"form-control\" mat-raised-button color=\"accent\" [disabled]=\"!this.userService.currentUser\" (click)=\"router.navigate(['store'])\" >Resume Shopping</button>\n    <div *ngIf=\"!this.userService.currentUser\" >\n      <ngb-alert *ngIf=\"loginAlert\" type=\"danger\" [dismissible]=\"false\" >{{ loginAlert }}</ngb-alert>\n      <form [formGroup]=\"loginForm\" method=\"POST\" action=\"/login\">\n        <div>\n          <mat-form-field>\n            <input matInput formControlName=\"username\" placeholder=\"email:\" />\n          </mat-form-field>\n        </div>\n        <div>\n          <mat-form-field>\n            <input matInput type=\"password\" formControlName=\"password\" placeholder=\"password:\" />\n          </mat-form-field>\n        </div>\n        <button mat-raised-button (click)=\"login()\" >Login</button>\n        <a mat-button color=\"primary\" href=\"/register\" >not register yet?</a>\n      </form>\n    </div>\n    <div *ngIf=\"this.userService.currentUser\" >\n      <h4>\n        Welcome back {{ this.userService.currentUser.firstName }} {{ this.userService.currentUser.lastName }}\n      </h4>\n      <b (click)=\"logout()\">log out</b>\n    </div>\n  </div>\n  <div class=\"col-sm-4\">\n    <img src=\"../../../assets/logo.svg\" width=\"100%\" />\n  </div>\n  <div class=\"col-sm-4\">\n    <p>We have {{ numberProducts }} available products</p>\n    <p>Our customer allready submitted {{ numberOrders }} orders</p>\n    <mat-card class=\"notifications\" *ngIf=\"this.userService.currentUser\">\n      <h5 class=\"text-left\">Notifications:</h5>\n      <p *ngIf=\"userCart\">You have open cart from {{ userCart.production_date }}</p>\n      <p *ngIf=\"lastOrder && !userCart\">Your last order was on {{ lastOrder.reservation_date }}</p>\n      <p *ngIf=\"!lastOrder && !userCart\">Welcome to your first purchase</p>\n    </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/orders.service */ "./src/app/services/orders.service.ts");
/* harmony import */ var src_app_services_cart_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/cart-product.service */ "./src/app/services/cart-product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService, router, cartService, productService, orderService, cartProductService) {
        this.userService = userService;
        this.router = router;
        this.cartService = cartService;
        this.productService = productService;
        this.orderService = orderService;
        this.cartProductService = cartProductService;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getAll().subscribe(function (data) {
            _this.numberProducts = data.length;
        });
        this.orderService.getAll().subscribe(function (data) {
            _this.numberOrders = data.length;
        });
        this.orderService.orderSubmitted.subscribe(function () {
            _this.chackLastOrder(_this.userService.currentUser.id);
        });
        this.cartService.newCartOpened.subscribe(function () {
            _this.checkOpenCart(_this.userService.currentUser.id);
        });
    };
    HomeComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.loginForm.value).subscribe(function (data) {
            if (data.failedAuthenticate) {
                _this.loginAlert = data.failedAuthenticate;
            }
            else {
                _this.loginAlert = null;
                _this.userService.currentUser = data;
                if (_this.userService.currentUser.authority == 'admin') {
                    _this.router.navigate(['adminstrator']);
                }
                _this.checkOpenCart(data.id);
                _this.chackLastOrder(data.id);
            }
        });
    };
    HomeComponent.prototype.checkOpenCart = function (userID) {
        var _this = this;
        this.cartService.getByUserId(userID).subscribe(function (data) {
            _this.userCart = data[0];
        });
    };
    HomeComponent.prototype.chackLastOrder = function (userID) {
        var _this = this;
        this.orderService.getByUserId(userID).subscribe(function (data) {
            _this.lastOrder = data[data.length - 1];
        });
    };
    HomeComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout().subscribe(function (data) {
            _this.userService.currentUser = null;
            _this.loginForm.reset();
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"], src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_6__["OrdersService"], src_app_services_cart_product_service__WEBPACK_IMPORTED_MODULE_7__["CartProductService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/invoice/invoice.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/invoice/invoice.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW52b2ljZS9pbnZvaWNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/invoice/invoice.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/invoice/invoice.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"this.cartService.openCart\" >\r\n  invoice works!\r\n</p>\r\n<h1 *ngIf=\"!this.cartService.openCart\" >Your Shopping Cart is empty <a href=\"/store\">Start shopping now!</a></h1>"

/***/ }),

/***/ "./src/app/components/invoice/invoice.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/invoice/invoice.component.ts ***!
  \*********************************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent(router, cartService) {
        this.router = router;
        this.cartService = cartService;
    }
    InvoiceComponent.prototype.ngOnInit = function () {
    };
    InvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice',
            template: __webpack_require__(/*! ./invoice.component.html */ "./src/app/components/invoice/invoice.component.html"),
            styles: [__webpack_require__(/*! ./invoice.component.css */ "./src/app/components/invoice/invoice.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/components/logo/logo.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/logo/logo.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nby9sb2dvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/logo/logo.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/logo/logo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"../../../assets/logo.svg\" [height]=\"height\" />"

/***/ }),

/***/ "./src/app/components/logo/logo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/logo/logo.component.ts ***!
  \***************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], LogoComponent.prototype, "height", void 0);
    LogoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logo',
            template: __webpack_require__(/*! ./logo.component.html */ "./src/app/components/logo/logo.component.html"),
            styles: [__webpack_require__(/*! ./logo.component.css */ "./src/app/components/logo/logo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/components/preview-order/preview-order.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/preview-order/preview-order.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJldmlldy1vcmRlci9wcmV2aWV3LW9yZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/preview-order/preview-order.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/preview-order/preview-order.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <app-cart class=\"preview-cart col-sm-5\" [preview_mode]=\"true\"></app-cart>\r\n    <div class=\"shipping-details col-sm-5\">\r\n      <form [formGroup]=\"shippingDetails\" >\r\n        <div>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"City\" formControlName=\"city\" (dblclick)=\"setValue('city')\" />\r\n            <mat-hint>double-click for autocomplete</mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n        <div>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Adress\" formControlName=\"adress\" (dblclick)=\"setValue('adress')\" />\r\n            <mat-hint>double-click for autocomplete</mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n        <div>\r\n          <mat-form-field>\r\n            <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker\" placeholder=\"Shipping Date\" formControlName=\"delivery_date\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n        <div>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Credit Card\" formControlName=\"payment\" />\r\n          </mat-form-field>\r\n        </div>\r\n        <button mat-button [disabled]=\"!shippingDetails.valid\" (click)=\"placeOrder(content)\" >Order</button>\r\n      </form>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n<!-- order success modal html -->\r\n<ng-template #content let-modal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Your order has been sent!</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <h6>For download the invoice <a (click)=\"downloadInvoice()\">click here.</a></h6>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">confirm</button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/preview-order/preview-order.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/preview-order/preview-order.component.ts ***!
  \*********************************************************************/
/*! exports provided: PreviewOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewOrderComponent", function() { return PreviewOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/orders.service */ "./src/app/services/orders.service.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var src_app_services_cart_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cart-product.service */ "./src/app/services/cart-product.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var PreviewOrderComponent = /** @class */ (function () {
    function PreviewOrderComponent(userService, orderService, cartService, cartProductService, modalService, router, productService) {
        var _this = this;
        this.userService = userService;
        this.orderService = orderService;
        this.cartService = cartService;
        this.cartProductService = cartProductService;
        this.modalService = modalService;
        this.router = router;
        this.productService = productService;
        this.shippingDetails = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            adress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            delivery_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            payment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)])
        });
        // disable dates who have more than 3 delivery at the same day or before today
        this.myFilter = function (d) {
            var day = d.toLocaleDateString();
            var counter = 0;
            _this.arrayDayDelivary.map(function (orderDate) {
                if (orderDate == day) {
                    counter++;
                }
            });
            if (counter >= 3 || d.getDate() < new Date().getDate()) {
                return false;
            }
            return true;
        };
        this.arrayDayDelivary = [];
    }
    PreviewOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderService.getAll().subscribe(function (data) {
            _this.allOrders = data;
            _this.arrayDayDelivary = data.map(function (order) { return order.delivery_date; });
        });
    };
    // set the shipping details value by double click on the input
    PreviewOrderComponent.prototype.setValue = function (controlName) {
        var newValue = this.userService.currentUser[controlName];
        this.shippingDetails.controls[controlName].setValue(newValue);
    };
    // calculate the total price of the cart ( call after getCartProducts() )
    PreviewOrderComponent.prototype.calculateTotalPrice = function () {
        var cartTotalPrice = 0;
        this.cartProductService.openCartProducts.map(function (cartProduct) {
            cartTotalPrice += cartProduct.total_price;
        });
        return cartTotalPrice;
    };
    // add new order to the database
    PreviewOrderComponent.prototype.placeOrder = function (contentModal) {
        var _this = this;
        var newOrder = Object.assign(this.shippingDetails.value, { user_id: this.userService.currentUser.id }, { cart_id: this.cartService.openCart._id }, { total_price: this.calculateTotalPrice() }, { reservation_date: new Date().toLocaleDateString() });
        newOrder.delivery_date = newOrder.delivery_date.toLocaleDateString();
        this.orderService.addOrder(newOrder).subscribe(function (orderData) {
            _this.orderService.orderSubmitted.next();
            _this.getInvoiceData(orderData).then(function (invoiceData) {
                _this.invoiceFile = new Blob(["" + invoiceData], { type: 'text/plain;charset=utf-8' });
                _this.openModal(contentModal);
            });
        });
    };
    PreviewOrderComponent.prototype.openModal = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function () {
            _this.deleteAllCart();
            _this.router.navigate(['']);
        }, function () {
            _this.deleteAllCart();
            _this.router.navigate(['']);
        });
    };
    PreviewOrderComponent.prototype.deleteAllCart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cartProductService.getByCart(this.cartService.openCart._id).subscribe(function (data) {
                            data.map(function (cartProduct) {
                                _this.cartProductService.deleteCartProduct(cartProduct._id).subscribe(function () { });
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.cartService.deleteCart(this.cartService.openCart._id).subscribe(function () { })];
                    case 2:
                        _a.sent();
                        this.cartService.openCart = null;
                        this.cartProductService.openCartProducts = null;
                        return [2 /*return*/];
                }
            });
        });
    };
    PreviewOrderComponent.prototype.getInvoiceData = function (orderData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var str = '';
            _this.cartProductService.getByCart(orderData.cart_id).subscribe(function (cartProducts) { return __awaiter(_this, void 0, void 0, function () {
                var _loop_1, this_1, i;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _loop_1 = function (i) {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this_1.productService.getById(cartProducts[i].product_id).subscribe(function (product) {
                                                str += product.name + " " + product.price + "₪ X" + cartProducts[i].quantity + " = " + cartProducts[i].total_price + "₪ \r\n";
                                                if (i == cartProducts.length - 1) {
                                                    str += "\r\n Total Price: " + orderData.total_price + "₪ ";
                                                    resolve(str);
                                                }
                                            })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            };
                            this_1 = this;
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < cartProducts.length)) return [3 /*break*/, 4];
                            return [5 /*yield**/, _loop_1(i)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    PreviewOrderComponent.prototype.downloadInvoice = function () {
        Object(file_saver__WEBPACK_IMPORTED_MODULE_8__["saveAs"])(this.invoiceFile, 'invoice.txt');
    };
    PreviewOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preview-order',
            template: __webpack_require__(/*! ./preview-order.component.html */ "./src/app/components/preview-order/preview-order.component.html"),
            styles: [__webpack_require__(/*! ./preview-order.component.css */ "./src/app/components/preview-order/preview-order.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], src_app_services_cart_product_service__WEBPACK_IMPORTED_MODULE_5__["CartProductService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], src_app_services_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"]])
    ], PreviewOrderComponent);
    return PreviewOrderComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-horizontal-stepper #stepper>\r\n  <mat-step [stepControl]=\"firstFormGroup\">\r\n    <form [formGroup]=\"personalDetailsForm\">\r\n        <ngb-alert *ngIf=\"registerError\" type=\"danger\" [dismissible]=\"flase\" >{{ registerError.message }}</ngb-alert>\r\n      <ng-template matStepLabel>Fill out your details</ng-template>\r\n      <div>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"ID\" formControlName=\"id\" required>\r\n          <mat-error *ngIf=\"personalDetailsForm.controls.id.hasError('required')\">\r\n            ID is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <mat-form-field>\r\n          <input matInput type=\"email\" placeholder=\"email\" formControlName=\"email\" required>\r\n          <mat-error *ngIf=\"personalDetailsForm.controls.email.hasError('required')\">\r\n            Email is <strong>required</strong>\r\n          </mat-error>\r\n          <mat-error *ngIf=\"personalDetailsForm.controls.email.hasError('email')\">\r\n            Please enter a valid email address\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <mat-form-field>\r\n          <input matInput type=\"password\" placeholder=\"password\" formControlName=\"password\" required>\r\n          <mat-error *ngIf=\"personalDetailsForm.controls.password.hasError('required')\">\r\n            Password is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput type=\"password\" placeholder=\"confirm password\" formControlName=\"confirm_password\" required>\r\n          <mat-error *ngIf=\"personalDetailsForm.controls.password.hasError('required')\">\r\n            Password Confirm is <strong>required</strong>\r\n          </mat-error>\r\n          <mat-hint>re-peat password</mat-hint>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <button mat-button matStepperNext [disabled]='!personalDetailsForm.valid' >Next</button>\r\n      </div>\r\n    </form>\r\n  </mat-step>\r\n  <mat-step [stepControl]=\"secondFormGroup\">\r\n    <form [formGroup]=\"adressDetailsForm\">\r\n      <ng-template matStepLabel>Fill out your address</ng-template>\r\n      <div>\r\n        <mat-form-field>\r\n          <mat-select formControlName=\"city\" placeholder=\"Select City\">\r\n            <mat-option *ngFor=\"let city of allCity\" [value]=\"city\" >\r\n              {{city}}\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"adressDetailsForm.controls.city.hasError('required')\">\r\n            City is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Adress\" formControlName=\"adress\" required>\r\n            <mat-error *ngIf=\"adressDetailsForm.controls.adress.hasError('required')\">\r\n              Adress is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n      </div>\r\n      <div>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"First name\" formControlName=\"firstName\" required>\r\n            <mat-error *ngIf=\"adressDetailsForm.controls.firstName.hasError('required')\">\r\n              First Name is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Last Name\" formControlName=\"lastName\" required>\r\n            <mat-error *ngIf=\"adressDetailsForm.controls.lastName.hasError('required')\">\r\n              Last Name is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>          \r\n      </div>\r\n      <div>\r\n        <button mat-button matStepperPrevious >Back</button>\r\n        <button mat-button matStepperNext [disabled]='!adressDetailsForm.valid' >Next</button>\r\n      </div>\r\n    </form>\r\n  </mat-step>\r\n  <mat-step>\r\n    <ng-template matStepLabel>Done</ng-template>\r\n      <mat-card>\r\n        <h3> Your ID: {{ personalDetailsForm.controls.id.value }} </h3>\r\n        <h3> Full Name: {{ adressDetailsForm.controls.firstName.value }} {{ adressDetailsForm.controls.lastName.value }} </h3>\r\n        <h3> Email: {{ personalDetailsForm.controls.email.value }} </h3>\r\n        <br/>\r\n        <h3> City: {{ adressDetailsForm.controls.city.value }} </h3>\r\n        <h3> Adress: {{ adressDetailsForm.controls.adress.value }} </h3>\r\n        \r\n      </mat-card>\r\n    <div>\r\n      <button mat-button matStepperPrevious>Back</button>\r\n      <button mat-button (click)=\"register(stepper)\">Register</button>\r\n    </div>\r\n  </mat-step>\r\n</mat-horizontal-stepper>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// password validation
function passwordConfirming(c) {
    if (!c || !c.parent)
        return;
    if (c.parent.controls.password.value != c.value) {
        return { invalid: true };
    }
}
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.allUsers = [];
        this.allCity = ['Tel Aviv', 'Ashdod', 'Herzilya', 'Qiryat Ono', 'Yehud', 'Ramat Gan', 'Jerusalem'];
        this.personalDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, passwordConfirming])
        });
        this.adressDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            adress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (stepper) {
        var _this = this;
        var newUser = Object.assign({}, this.personalDetailsForm.value, this.adressDetailsForm.value);
        delete newUser.confirm_password;
        this.userService.addUser(newUser).subscribe(function (response) {
            if (response.error) {
                _this.registerError = response.error;
                stepper.reset();
            }
            else {
                _this.userService.currentUser = response;
                _this.router.navigate(['']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/single-product/single-product.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/single-product/single-product.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2luZ2xlLXByb2R1Y3Qvc2luZ2xlLXByb2R1Y3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/single-product/single-product.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/single-product/single-product.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <img mat-card-image [src]=\"data.picture\" height=\"80\">\n  <mat-card-content>\n    <b>{{ data.name }}</b>\n    <p>{{ data.price | currency:'ILS' }}</p>\n  </mat-card-content>\n  <mat-card-actions *ngIf=\"this.userService.currentUser.authority!='admin'\">\n    <button mat-button (click)=\"openModal(content)\" >ADD TO CART</button>\n  </mat-card-actions>\n</mat-card>\n\n\n<ng-template #content let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Add to cart:</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('close')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <mat-card>\n        <img [src]=\"data.picture\" height=\"30\" />\n        <b>{{ data.name }}   </b>\n        <label>{{ data.price | currency:'ILS' }}   </label>\n        <br/>\n        <form [formGroup]=\"quantityForm\">\n          <mat-form-field>\n          <input matInput placeholder=\"Quantity\" formControlName=\"quantity\" type=\"number\" width=\"20\" />\n          </mat-form-field>\n        </form>\n      </mat-card>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('save')\">ADD</button>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/single-product/single-product.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/single-product/single-product.component.ts ***!
  \***********************************************************************/
/*! exports provided: SingleProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleProductComponent", function() { return SingleProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_cart_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart-product.service */ "./src/app/services/cart-product.service.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SingleProductComponent = /** @class */ (function () {
    function SingleProductComponent(userService, modalService, cartProductService, cartService) {
        this.userService = userService;
        this.modalService = modalService;
        this.cartProductService = cartProductService;
        this.cartService = cartService;
        this.quantityForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    }
    SingleProductComponent.prototype.ngOnInit = function () {
    };
    SingleProductComponent.prototype.openModal = function (content) {
        var _this = this;
        console.log(content);
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            // click X or SAVE
            if (result == 'save') {
                _this.addToCart();
            }
        });
    };
    SingleProductComponent.prototype.addToCart = function () {
        var _this = this;
        // check quantity value not 0
        if (this.quantityForm.controls.quantity.value > 0) {
            // open cart existing
            if (this.cartService.openCart) {
                var newProduct = this.cartProductService.openCartProducts.find(function (cartProduct) {
                    return cartProduct.product_id == _this.data._id;
                });
                // product allready exist in cart
                if (newProduct) {
                    newProduct.quantity = newProduct.quantity + this.quantityForm.controls.quantity.value;
                    newProduct.total_price = newProduct.quantity * this.data.price;
                    this.cartProductService.updateCartProduct(newProduct._id, newProduct).subscribe(function (data) {
                        _this.quantityForm.reset();
                        _this.cartService.cartNeedToUpdate.next();
                    });
                }
                // product not exist in cart
                else {
                    var newCartProduct = {
                        product_id: this.data._id,
                        quantity: this.quantityForm.controls.quantity.value,
                        cart_id: this.cartService.openCart._id,
                        total_price: this.quantityForm.controls.quantity.value * this.data.price
                    };
                    this.cartProductService.addCartProduct(newCartProduct).subscribe(function (data) {
                        _this.quantityForm.reset();
                        _this.cartService.cartNeedToUpdate.next();
                    });
                }
            }
            // open cart not existing
            else {
                var newCart = { user_id: this.userService.currentUser.id, production_date: new Date().toLocaleDateString() };
                this.cartService.addCart(newCart).subscribe(function (data) {
                    _this.cartService.newCartOpened.next();
                    _this.cartService.openCart = data;
                    var newCartProduct = {
                        product_id: _this.data._id,
                        quantity: _this.quantityForm.controls.quantity.value,
                        cart_id: data._id,
                        total_price: _this.quantityForm.controls.quantity.value * _this.data.price
                    };
                    _this.cartProductService.addCartProduct(newCartProduct).subscribe(function (data) {
                        _this.cartService.cartNeedToUpdate.next();
                    });
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SingleProductComponent.prototype, "data", void 0);
    SingleProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-product',
            template: __webpack_require__(/*! ./single-product.component.html */ "./src/app/components/single-product/single-product.component.html"),
            styles: [__webpack_require__(/*! ./single-product.component.css */ "./src/app/components/single-product/single-product.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], src_app_services_cart_product_service__WEBPACK_IMPORTED_MODULE_3__["CartProductService"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]])
    ], SingleProductComponent);
    return SingleProductComponent;
}());



/***/ }),

/***/ "./src/app/components/store/store.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/store/store.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RvcmUvc3RvcmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/store/store.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/store/store.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <app-cart class=col-sm-4 *ngIf=\"!this.cartService.minimize\" ></app-cart>\n  <app-allproducts class=\"col-sm-8\"></app-allproducts>\n</div>"

/***/ }),

/***/ "./src/app/components/store/store.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/store/store.component.ts ***!
  \*****************************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StoreComponent = /** @class */ (function () {
    function StoreComponent(cartService) {
        this.cartService = cartService;
    }
    StoreComponent.prototype.ngOnInit = function () {
    };
    StoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-store',
            template: __webpack_require__(/*! ./store.component.html */ "./src/app/components/store/store.component.html"),
            styles: [__webpack_require__(/*! ./store.component.css */ "./src/app/components/store/store.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], StoreComponent);
    return StoreComponent;
}());



/***/ }),

/***/ "./src/app/pipes/milk.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/milk.pipe.ts ***!
  \************************************/
/*! exports provided: MilkPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MilkPipe", function() { return MilkPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MilkPipe = /** @class */ (function () {
    function MilkPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    MilkPipe.prototype.transform = function (value, args) {
        if (args && value.indexOf(args) != -1) {
            var index = value.indexOf(args);
            var newValue = value.slice(0, index) + "<mark style='background-color:yellow'>" + value.slice(index, index + args.length) + "</mark>" + value.slice(index + args.length, value.length);
            return this.sanitizer.bypassSecurityTrustHtml(newValue);
        }
        return this.sanitizer.bypassSecurityTrustHtml(value);
    };
    MilkPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'milk'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], MilkPipe);
    return MilkPipe;
}());



/***/ }),

/***/ "./src/app/services/cart-product.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/cart-product.service.ts ***!
  \**************************************************/
/*! exports provided: CartProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartProductService", function() { return CartProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartProductService = /** @class */ (function () {
    function CartProductService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.url = 'http://localhost:3000/cart_products';
    }
    CartProductService.prototype.getByCart = function (cartID) {
        return this.http.get(this.url + '/bycart/' + cartID);
    };
    CartProductService.prototype.addCartProduct = function (newProduct) {
        return this.http.post(this.url, newProduct, this.httpOptions);
    };
    CartProductService.prototype.updateCartProduct = function (id, updatedProduct) {
        return this.http.put(this.url + '/' + id, updatedProduct, this.httpOptions);
    };
    CartProductService.prototype.deleteCartProduct = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    CartProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CartProductService);
    return CartProductService;
}());



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartService = /** @class */ (function () {
    function CartService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.url = 'http://localhost:3000/carts';
        this.minimize = false;
        this.cartNeedToUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.newCartOpened = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    CartService.prototype.getAll = function () {
        return this.http.get(this.url);
    };
    CartService.prototype.getById = function (id) {
        return this.http.get(this.url + '/' + id);
    };
    CartService.prototype.getByUserId = function (userID) {
        return this.http.get(this.url + '/byuser/' + userID);
    };
    CartService.prototype.addCart = function (newCart) {
        return this.http.post(this.url, newCart, this.httpOptions);
    };
    CartService.prototype.updateCart = function (cartID, updatedCart) {
        return this.http.put(this.url + '/' + cartID, updatedCart, this.httpOptions);
    };
    CartService.prototype.deleteCart = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.url = 'http://localhost:3000/categories';
        this.newCategoryAdded = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    CategoryService.prototype.getAll = function () {
        return this.http.get(this.url);
    };
    CategoryService.prototype.getById = function (id) {
        return this.http.get(this.url + '/' + id);
    };
    CategoryService.prototype.addCategory = function (newCategory) {
        return this.http.post(this.url, newCategory, this.httpOptions);
    };
    CategoryService.prototype.updateCart = function (categoryID, updatedCategory) {
        return this.http.put(this.url + '/' + categoryID, updatedCategory, this.httpOptions);
    };
    CategoryService.prototype.deleteCategory = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/services/orders.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/orders.service.ts ***!
  \********************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersService = /** @class */ (function () {
    function OrdersService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.url = 'http://localhost:3000/orders';
        this.orderSubmitted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    OrdersService.prototype.getAll = function () {
        return this.http.get(this.url);
    };
    OrdersService.prototype.getById = function (id) {
        return this.http.get(this.url + '/' + id);
    };
    OrdersService.prototype.getByUserId = function (userID) {
        return this.http.get(this.url + '/byuser/' + userID);
    };
    OrdersService.prototype.addOrder = function (newOrder) {
        return this.http.post(this.url, newOrder, this.httpOptions);
    };
    OrdersService.prototype.updateOrder = function (cartID, updatedOrder) {
        return this.http.put(this.url + '/' + cartID, updatedOrder, this.httpOptions);
    };
    OrdersService.prototype.deleteOrder = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    OrdersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrdersService);
    return OrdersService;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.url = 'http://localhost:3000/products';
        this.productUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ProductService.prototype.getAll = function () {
        return this.http.get(this.url);
    };
    ProductService.prototype.getById = function (id) {
        return this.http.get(this.url + '/' + id);
    };
    ProductService.prototype.getByCategoryId = function (categoryID) {
        return this.http.get(this.url + '/bycategory/' + categoryID);
    };
    ProductService.prototype.addProduct = function (newProduct) {
        return this.http.post(this.url, newProduct, this.httpOptions);
    };
    ProductService.prototype.updateProduct = function (cartID, updatedProduct) {
        return this.http.put(this.url + '/' + cartID, updatedProduct, this.httpOptions);
    };
    ProductService.prototype.deleteProduct = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.url = 'http://localhost:3000/users';
    }
    UsersService.prototype.getAll = function () {
        return this.http.get(this.url);
    };
    UsersService.prototype.getById = function (id) {
        return this.http.get(this.url + '/' + id);
    };
    UsersService.prototype.addUser = function (newUser) {
        return this.http.post(this.url, newUser, this.httpOptions);
    };
    UsersService.prototype.login = function (logindetails) {
        return this.http.post(this.url + '/login', logindetails, this.httpOptions);
    };
    UsersService.prototype.logout = function () {
        this.currentUser = null;
        return this.http.get(this.url + '/logout');
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\git\Shopping-Web\shoppingWeb-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map