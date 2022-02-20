import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Content } from './helper-files/content-interface';


@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective implements OnInit {

 // @Input() title?: string;
//  @Input() tags?: string;
 
  constructor(private elm: ElementRef) {
    elm.nativeElement.style.textdecoration = "none";
    
    //elm.nativeElement.style.cursor = "pointer";
   }
   ngOnInit(): void {
       
   }

   @HostListener('mouseover') mouseOver() {
     console.log(this.elm.nativeElement);
    if(this.elm.nativeElement.className == "title"){
      this.elm.nativeElement.style = "text-decoration: underline";
    
    } else if(this.elm.nativeElement.className == "tag"){
      this.elm.nativeElement.style = "font-weight: 700";

    }
   }

   @HostListener('mouseleave') mouseLeave() {
    this.elm.nativeElement.style = "text-decoration: none";
    
   }

  }
