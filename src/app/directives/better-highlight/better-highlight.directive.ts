import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2, private elmRef: ElementRef) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elmRef.nativeElement, 'background-color', 'blue');
  }
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elmRef.nativeElement, 'background-color', 'lightgreen');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elmRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'yellow';
  }
}
