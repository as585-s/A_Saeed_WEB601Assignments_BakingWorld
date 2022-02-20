import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';


@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective implements OnInit {
  style?: string; 
 // @Input() title?: string;

  constructor(private elm: ElementRef) {
    elm.nativeElement.style.textdecoration = "none";
    //elm.nativeElement.style.cursor = "pointer";
   }
   ngOnInit(): void {
       
   }
   @HostListener('mouseover') mouseover() {
    console.log(this.elm.nativeElement);
    this.elm.nativeElement.style = "text-decoration: underline";
    /*
    this.hoverFunction();
        console.log("test function");
    */
   }

/*
   private hoverFunction(): void {
   //   this.elm.nativeElement.style.pointer = "underline";
   this.style = "underline";
      console.log("hoverFunction works");
   }
*/
}
