import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  // Accessing values assigned to directives on element
  @Input() defaultColor: string = "transparent";
  @Input() highlightColor: string = "blue";

  // Used to access already exisiting property on which this directive sits on.
  @HostBinding('style.backgroundColor') backgroundColor: string;
  
  constructor(private elRef: ElementRef, private renderer: Renderer2) { 
  }
  
  ngOnInit () {
    // This is recommended rather directly changing the element using Ref
    // this.renderer.setStyle(this.elRef.nativeElement, "background-color", "blue");
    this.backgroundColor = this.defaultColor;
  }

  
  // Hostlistener is used to listen for events on directives. Works with renderer though. 
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, "background-color", "blue");
    this.backgroundColor = this.highlightColor;

  }
  
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, "background-color", "transparent");
    this.backgroundColor = this.defaultColor;
  }

  // @Hostlistener and @HostBinding is used to communicate between directive and element

}
