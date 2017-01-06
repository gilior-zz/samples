import { Component } from '@angular/core'

@Component({ selector: 'site-menu', moduleId: module.id, templateUrl: '../html/menu.component.html', styleUrls: ['../scss/menu.component.css'] })

export class MenuComponent {
    public goTo(div: HTMLDivElement): void {
        console.log(div.id);
        console.log(div.scrollTop);

    }
}