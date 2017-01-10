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
var MenuComponent = (function () {
    function MenuComponent() {
        this.lastscrollY = 0;
        this.isMenuVisible = true;
    }
    MenuComponent.prototype.goTo = function (div) {
        console.log(div.id);
        console.log(div.scrollTop);
    };
    MenuComponent.prototype.onscroll = function () {
        console.log(window.scrollY);
        this.isMenuVisible = window.scrollY < this.lastscrollY;
        this.lastscrollY = window.scrollY;
    };
    __decorate([
        core_1.HostListener('window:scroll'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], MenuComponent.prototype, "onscroll", null);
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'site-menu', moduleId: module.id, templateUrl: '../html/menu.component.html', styleUrls: ['../scss/menu.component.css'],
            animations: [
                core_1.trigger('dynamicMenu', [
                    core_1.state('true', core_1.style({
                        //opacity: 1,
                        transform: 'translateY(0)',
                    })),
                    core_1.state('false', core_1.style({
                        //opacity: 0,
                        transform: 'translateY(-100%)',
                    })),
                    core_1.transition('1 => 0', core_1.animate('0.5s  ease-in')),
                    core_1.transition('0 => 1', [core_1.style({ transform: 'translateY(-100%)' }), core_1.animate('0.3s  ease-out')]),
                ])
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map