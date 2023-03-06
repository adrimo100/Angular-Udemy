import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) { //Usamo un setter en vez de una propiedad, que se encargará de cambiar el valor de unless.
    if(!condition){
        this.vcRef.createEmbeddedView(this.tempRef);
    }
    else {
      this.vcRef.clear(); //Elimina todo el contenido del elemento html.
    }
  }

  //Recibimos como parámetro el templateRef que será o no renderizado. No confundir con ElementRef
  //ViewContainerRef es donde se va a renderizar. Marca el lugar donde hemos usado la directiva.
  constructor(private tempRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
