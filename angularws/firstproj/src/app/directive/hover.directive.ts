import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
// BL dont have a UI, but they are used on a UI element
@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  //el:ElementRef|undefined
  constructor(private el:ElementRef, private render:Renderer2) {
    //this.el = el
    console.log(this.el)
    this.render.setStyle(this.el.nativeElement, 'color', 'red')
    //this.render.setProperty(el.nativeElement, 'innerText','Changed by directive')
   }

   @HostListener('mouseenter')
   m1(){
    this.render.setStyle(this.el.nativeElement, 'color', 'green')
    this.render.setStyle(this.el.nativeElement, 'border-bottom', '2px solid black')
   }

   @HostListener('mouseleave')
   m2()
   {
    this.render.setStyle(this.el.nativeElement, 'color', 'red')
    this.render.setStyle(this.el.nativeElement, 'border-bottom', 'none')
   }
}
