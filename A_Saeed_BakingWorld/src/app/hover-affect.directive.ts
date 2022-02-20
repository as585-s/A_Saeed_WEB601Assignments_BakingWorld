import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';


@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective implements OnInit {
 // style?: string; 
  @Input() title?: string;
  @Input() tags?: string;
 
 
  constructor(private elm: ElementRef) {
    elm.nativeElement.style.textdecoration = "none";
    
    //elm.nativeElement.style.cursor = "pointer";
   }
   ngOnInit(): void {
       
   }

   @HostListener('mouseover') mouseover() {
     if(this.title="title"){
    this.elm.nativeElement.style = "text-decoration: underline";
    //this.hoverFunction();
     } else if (this.tags="tags"){
      this.elm.nativeElement.style = "font-weight: 700px";
     }
   }

   @HostListener('mouseleave') mouseleave() {
    this.elm.nativeElement.style = "text-decoration: none";
    //this.hoverFunction();
         
   }

   /*
   private hoverFunction(): void {
     //this.elm.nativeElement.style = "text-decoration: underline";

   }
*/
}
