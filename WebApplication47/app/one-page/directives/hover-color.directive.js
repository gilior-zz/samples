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
var HoverDirectiveComponent = (function () {
    function HoverDirectiveComponent(elementRef) {
        this.elementRef = elementRef;
    }
    HoverDirectiveComponent.prototype.onEnter = function () { this.highlight(); };
    HoverDirectiveComponent.prototype.onLeave = function () { this.reset(); };
    HoverDirectiveComponent.prototype.highlight = function () {
        this.elementRef.nativeElement.style.color = this.color;
    };
    HoverDirectiveComponent.prototype.reset = function () { this.elementRef.nativeElement.style.color = null; };
    __decorate([
        core_1.Input('elementHighlight'), 
        __metadata('design:type', String)
    ], HoverDirectiveComponent.prototype, "color", void 0);
    __decorate([
        core_1.HostListener('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], HoverDirectiveComponent.prototype, "onEnter", null);
    __decorate([
        core_1.HostListener('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], HoverDirectiveComponent.prototype, "onLeave", null);
    HoverDirectiveComponent = __decorate([
        core_1.Directive({ selector: '[elementHighlight]', }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], HoverDirectiveComponent);
    return HoverDirectiveComponent;
}());
exports.HoverDirectiveComponent = HoverDirectiveComponent;
//# sourceMappingURL=hover-color.directive.js.map