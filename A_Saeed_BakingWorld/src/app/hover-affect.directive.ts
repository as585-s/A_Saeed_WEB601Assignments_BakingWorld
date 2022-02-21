import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})

export class HoverAffectDirective {
  @Input() elementType?: string;
  @Input() firstOrLast?: boolean;
  // set to textDecoration if it's operating on the type
  //set to fontWeight if it's operating on the tags
  //set to border if it's operating on a content card
  originalElementBorder: string;

  constructor(private elm: ElementRef) {
    this.originalElementBorder = this.elm.nativeElement.style.border;
  }

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
