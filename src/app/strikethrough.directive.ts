import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {
  elem!:ElementRef

  constructor(){
   // this.elem.nativeElement.style.textDecoration='line-through';
  }
  @HostListener("click") onClicks(){
    this.textDeco("line-through")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }
  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;

  }

}
