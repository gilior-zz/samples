import { Component, HostListener, trigger, state, transition, style, animate } from '@angular/core'

@Component({
    selector: 'site-menu', moduleId: module.id, templateUrl: '../html/menu.component.html', styleUrls: ['../scss/menu.component.css'],
    animations: [
        trigger('dynamicMenu', [
            state('true', style({
                //opacity: 1,
                transform: 'translateY(0)',

            })),
            state('false', style({
                //opacity: 0,
                transform: 'translateY(-100%)',
            })),
            transition('1 => 0', animate('0.5s  ease-in')),
            transition('0 => 1', [style({ transform: 'translateY(-100%)' }), animate('0.3s  ease-out')]),
        ])
    ],
})

export class MenuComponent {
    lastscrollY = 0;

    public goTo(div: HTMLDivElement): void {
        console.log(div.id);
        console.log(div.scrollTop);
    }

    isMenuVisible: boolean = true;

    @HostListener('window:scroll') onscroll() {
        console.log(window.scrollY);
        this.isMenuVisible = window.scrollY < this.lastscrollY;
        this.lastscrollY = window.scrollY;
    }
}