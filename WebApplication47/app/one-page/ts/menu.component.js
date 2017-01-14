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
var platform_browser_1 = require('@angular/platform-browser');
var MenuComponent = (function () {
    function MenuComponent(domSanitizer) {
        this.domSanitizer = domSanitizer;
        this.lastscrollY = 0;
        this.isFirst = true;
        this.isSecond = false;
        this.isThird = false;
        this.isMenuVisible = true;
        this.isBiggerFont = true;
        this.images = ['http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Usa-state-boundaries-4000-transparent.png/800px-Usa-state-boundaries-4000-transparent.png', 'http://freedesignfile.com/upload/2014/02/Transparent-bubbles-with-background-vector-05.jpg', 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/colors-make-up-white-light_806a2a185b18277e.jpg?domain=cx.aos.ask.com'];
        this.dummy = [true, false, false];
        this.foo = 'http://freedesignfile.com/upload/2014/02/Transparent-bubbles-with-background-vector-05.jpg';
    }
    MenuComponent.prototype.goTo = function (div) {
        var top = $(div).offset().top;
        //console.log(div.scrollTop);
        $('html, body').animate({
            scrollTop: top
        }, 1000);
        //console.log(div.scrollTop);
    };
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backgroundImage = 'http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Usa-state-boundaries-4000-transparent.png/800px-Usa-state-boundaries-4000-transparent.png';
        var i = 0;
        this.currentIndex = 0;
        //setInterval(() => {
        //    this.backgroundImage = `'${this.images[i++ % 3]}'`;
        //}
        setInterval(function () {
            _this.dummy = [false, false, false];
            _this.dummy[i++ % 3] = true;
            _this.isFirst = _this.dummy[0];
            _this.isSecond = _this.dummy[1];
            _this.isThird = _this.dummy[2];
        }, 3000);
    };
    MenuComponent.prototype.setImage = function (img) {
        console.log(img);
    };
    MenuComponent.prototype.onscroll = function () {
        //console.log(window.scrollY);
        this.isMenuVisible = window.scrollY < this.lastscrollY || window.scrollY < 100;
        this.lastscrollY = window.scrollY;
        this.isBiggerFont = window.scrollY < this.lastscrollY || window.scrollY < 100;
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
                ]),
                core_1.trigger('isScaledFont', [
                    core_1.state('true', core_1.style({
                        //opacity: 1,
                        'font-size': '120%',
                    })),
                    core_1.state('false', core_1.style({
                        //opacity: 0,
                        'font-size': '100%',
                    })),
                    core_1.transition('1 => 0', core_1.animate('0.5s')),
                    core_1.transition('0 => 1', core_1.animate('0.5s 100ms linear')),
                ]),
                core_1.trigger('flyInOut', [
                    core_1.state('in', core_1.style({ transform: 'translateX(0)' })),
                    core_1.transition('void => *', [
                        core_1.style({ transform: 'translateX(-100%)' }),
                        core_1.animate(1000)
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate(1000, core_1.style({ transform: 'translateX(100%)' }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizer])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map