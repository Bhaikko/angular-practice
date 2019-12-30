import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})

// Creating custom directives
export class BasicHighlightDirective implements OnInit {
    constructor (private elementRef: ElementRef) {
        // Angular passes the element as arguement to change its properties
    }

    ngOnInit () {
        // Not a good practice
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}