import { Directive, ElementRef, Input, Renderer, HostListener } from '@angular/core';

@Directive({ selector: '[BackgroundHighlight]' })
export class HighlightDirective {
    private _el;
    private _renderer;
    private _defaultColor = 'red';
    constructor(el: ElementRef, renderer: Renderer) {
        this._el = el;
        this._renderer = renderer;
    }

    @Input('BackgroundHighlight') highlightColor : string;

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || this._defaultColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this._renderer.setElementStyle(this._el.nativeElement, 'backgroundColor', color);
    }
}
