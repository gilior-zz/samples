import { Directive, ElementRef, Input, HostListener } from '@angular/core'

@Directive({ selector: '[elementHighlight]', })

export class HoverDirectiveComponent {
    @Input('elementHighlight') color: string;
    constructor(private elementRef: ElementRef) { }

    @HostListener('mouseenter') onEnter() { this.highlight() }
    @HostListener('mouseleave') onLeave() { this.reset() }

    private highlight(): void {
        this.elementRef.nativeElement.style.color = this.color;
    }

    private reset(): void { this.elementRef.nativeElement.style.color = null; }
}