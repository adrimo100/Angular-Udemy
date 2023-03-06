import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  //Para poder seleccionar el color desde el html.
  @Input() defaultColor: string = "transparent";
  @Input("appBetterHighlight") highlightColor: string = "blue";

  //Se pasa como argumento al decorador la propiedad que queremos acceder cuando usarmo HostBinding.
  @HostBinding("style.backgroundColor") backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    //this.renderer.setStyle(this.elRef.nativeElement, "background-color", "blue")
    this.backgroundColor = this.defaultColor;
  }

  @HostListener("mouseenter") mouseOver(eventData: Event){ //Para escuchar el evento que indiquemos como argumento en el decorador.
    //this.renderer.setStyle(this.elRef.nativeElement, "background-color", "blue") //USANDO RENDERER2
    this.backgroundColor = this.highlightColor;
  }

  @HostListener("mouseleave") mouseLeave(eventData: Event){ //Para escuchar el evento que indiquemos como argumento en el decorador.
    //this.renderer.setStyle(this.elRef.nativeElement, "background-color", "transparent") //USANDO RENDERER2
    this.backgroundColor = this.defaultColor;
  }
}
