import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBlog]',
})
export class BlogDirective implements OnInit {
  @Input()
  category: string = '';
  constructor(private el: ElementRef, private render: Renderer2) {}
  ngOnInit(): void {
    console.log(this.category);
    switch (this.category) {
      case 'Tourism':
        this.render.setStyle(this.el.nativeElement,'background-color','brown');
        break;
      case 'Beaches':
        this.render.setStyle(this.el.nativeElement, 'background-color', 'blue');
        break;
      default:
        this.render.setStyle(this.el.nativeElement, 'background-color', 'gray');
        break;
    }
  }
}
