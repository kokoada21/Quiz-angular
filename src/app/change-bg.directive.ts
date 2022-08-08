import { ThisReceiver } from '@angular/compiler';
import { Directive, ElementRef, HostListener, Input, Renderer2, ɵ_sanitizeUrl } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {
 
 @Input() isCorrect: Boolean  = false;

  constructor(private el : ElementRef, private render : Renderer2) { }

  @HostListener('click') answer(){
    if(this.isCorrect){
      this.render.setStyle(this.el.nativeElement, 'background', '#13ed9d');
      this.render.setStyle(this.el.nativeElement, 'color', '#fff');
    }else{
      this.render.setStyle(this.el.nativeElement, 'background', 'red');
      this.render.setStyle(this.el.nativeElement, 'color', '#fff');
    }
  }
}
