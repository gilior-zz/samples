"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var shared_module_1 = require('../shared.module');
var components = require('./components-barrel');
var one_page_routing_module_1 = require('./one-page-routing.module');
var material_1 = require('@angular/material');
var flex_layout_1 = require('@angular/flex-layout');
var OnePageModule = (function () {
    function OnePageModule() {
    }
    OnePageModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, one_page_routing_module_1.OnePageRoutingModule, material_1.MaterialModule, flex_layout_1.FlexLayoutModule],
            declarations: [components.AboutComponent, components.ClientsComponent, components.ContactComponent, components.HomeComponent, components.MenuComponent, components.MyAccountComponent, components.ProductsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], OnePageModule);
    return OnePageModule;
}());
exports.OnePageModule = OnePageModule;
//# sourceMappingURL=one-page.module.js.map