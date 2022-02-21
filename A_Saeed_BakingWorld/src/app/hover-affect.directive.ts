import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
/*
export class HoverAffectDirective implements OnInit {
  constructor(private elm: ElementRef) {
    elm.nativeElement.style.textdecoration = "none";
        //elm.nativeElement.style.cursor = "pointer";
  }
*/
export class HoverAffectDirective {
  @Input() elementType?: string;
  @Input() firstOrLast?: boolean;
  // set to textDecoration if it's operating on the type
  //set to fontWeight if it's operating on the tags
  //set to border if it's operating on a content card
  originalElementBorder: string;

  constructor(private elm: ElementRef) {
   // elm.nativeElement.style.textdecoration = "none";
        //elm.nativeElement.style.cursor = "pointer";
    this.originalElementBorder = this.elm.nativeElement.style.border;
  }

//  ngOnInit(): void {}
/*
  @HostListener('mouseover') mouseOver() {
    if(this.elm.nativeElement.className == "title"){
      this.elm.nativeElement.style = "text-decoration: underline";
    } 
    else if(this.elm.nativeElement.className == "tag"){
      this.elm.nativeElement.style = "font-weight: 700";
    }
  }
*/
@HostListener("mouseenter") onMouseEnter(){
  if(this.elementType == "type"){
    this.elm.nativeElement.style.textDecoration = "underline";
  }
  else if(this.elementType == "tag"){
    this.elm.nativeElement.style.fontWeight = "bold";
  }
  else if(this.elementType == "card" && this.firstOrLast){
    this.elm.nativeElement.style.border = "3px dashed #123456";
  }
}
/*
  @HostListener('mouseleave') mouseLeave() {
    this.elm.nativeElement.style = "";
  }
*/
@HostListener("mouseleave") onMouseLeave(){
  if(this.elementType == "type"){
    this.elm.nativeElement.style.textdecoration = "initial";
  }
  else if(this.elementType == "tag"){
    this.elm.nativeElement.style.textdecoration = "normal";
  }
  else if(this.elementType == "card" && this.firstOrLast){
    this.elm.nativeElement.style.border = this.originalElementBorder;
  }
}
}
