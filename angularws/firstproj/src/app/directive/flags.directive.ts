import { Directive, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFlags]'
})
export class FlagsDirective implements OnInit, OnChanges{

  @HostBinding("src")
  imgSrc:string='';
  @Input()
  country:string='';
  // called only once the lifecycle
  constructor() { }
 // called only once the lifecycle
  ngOnInit(): void {
    console.log(this.country)
    this.imgSrc=`../../assets/images/${this.country}`
  }
  // called whenever the value of Input property changes
  ngOnChanges(changes: SimpleChanges): void {
    this.imgSrc=`../../assets/images/${this.country}`
  }
  
}
