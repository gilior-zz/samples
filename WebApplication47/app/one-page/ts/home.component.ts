import { Component } from '@angular/core'

@Component({ selector: 'home', moduleId: module.id, templateUrl: '../html/home.component.html', styleUrls: ['../scss/home.component.css'] })

export class HomeComponent {
    isVisible = true;

    public goTo(div: string): void {
        let top = $(div).offset().top;
        //console.log(div.scrollTop);
        $('html, body').animate({
            scrollTop: top
        }, 1000);
        //console.log(div.scrollTop);
    }
}