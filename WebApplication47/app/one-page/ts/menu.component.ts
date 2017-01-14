import { Component, HostListener, trigger, state, transition, style, animate, OnInit, } from '@angular/core'
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeStyle } from '@angular/platform-browser';

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
        ]),
        trigger('isScaledFont', [
            state('true', style({
                //opacity: 1,
                'font-size': '120%',

            })),
            state('false', style({
                //opacity: 0,
                'font-size': '100%',
            })),
            transition('1 => 0', animate('0.5s')),
            transition('0 => 1', animate('0.5s 100ms linear')),
        ]),
        trigger('flyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ transform: 'translateX(-100%)' }),
                animate(1000)
            ]),
            transition('* => void', [
                animate(1000, style({ transform: 'translateX(100%)' }))
            ])
        ])
    ]
})

export class MenuComponent implements OnInit {
    lastscrollY = 0;

    public goTo(div: string): void {
        let top = $(div).offset().top;
        //console.log(div.scrollTop);
        $('html, body').animate({
            scrollTop: top
        }, 1000);
        //console.log(div.scrollTop);
    }

    constructor(private domSanitizer: DomSanitizer) { }
    isFirst: boolean = true;
    isSecond: boolean = false;
    isThird: boolean = false;
    backgroundImage: string;
    currentIndex: number;
    isMenuVisible: boolean = true;
    isBiggerFont: boolean = true;
    images: Array<string> = ['http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Usa-state-boundaries-4000-transparent.png/800px-Usa-state-boundaries-4000-transparent.png', 'http://freedesignfile.com/upload/2014/02/Transparent-bubbles-with-background-vector-05.jpg', 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/colors-make-up-white-light_806a2a185b18277e.jpg?domain=cx.aos.ask.com'];

    dummy: boolean[] = [true, false, false];
    ngOnInit() {
        this.backgroundImage = 'http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Usa-state-boundaries-4000-transparent.png/800px-Usa-state-boundaries-4000-transparent.png';
        let i = 0;
        this.currentIndex = 0;
        //setInterval(() => {
        //    this.backgroundImage = `'${this.images[i++ % 3]}'`;
        //}
        setInterval(() => {
            this.dummy = [false, false, false];
            this.dummy[i++ % 3] = true;
            this.isFirst = this.dummy[0];
            this.isSecond = this.dummy[1];
            this.isThird = this.dummy[2];

        }
            , 3000);
    }
    setImage(img: string) {
        console.log(img);


    }


    foo = 'http://freedesignfile.com/upload/2014/02/Transparent-bubbles-with-background-vector-05.jpg';

    @HostListener('window:scroll') onscroll() {
        //console.log(window.scrollY);
        this.isMenuVisible = window.scrollY < this.lastscrollY || window.scrollY < 100;
        this.lastscrollY = window.scrollY;
        this.isBiggerFont = window.scrollY < this.lastscrollY || window.scrollY < 100;
    }
}