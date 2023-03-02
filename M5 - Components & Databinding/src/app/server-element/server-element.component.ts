import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy, ContentChild, ElementRef} from '@angular/core';

//Por defecto, los atributos y métodos de un componente solo son accesibles desde el propio componente.
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //Para cambiar la encapsulación de CSS. Emulates es el por defecto, pero se puede cambiar a None o ShadowDome.
})
export class ServerElementComponent implements OnInit {
  //Con el decorador @Input(alias_opcional), hacemos que los componentes padre (los que usan a este) puedan acceder a un atributo/método.
  //A este decorador, se le puede pasar opcionalmente un string que tendrá que ser usado como alias si se le pasa este string.
  @Input("srvElement") element: {type: string, name: string, content: string};
  //Content child funciona igual que ViewChild, para par el contenido cargado en la etiqueta <ng-content> que nos mande y padre y que
  //contenga algún Local Reference
  @ContentChild("contentParagraph", {static: true}) paragraphContentChild: ElementRef;

  constructor() {
    console.log("constructor called!")
   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called!")
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit called!")
  }

  ngDoCheck(){
    console.log("ngDoCheck Called!");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit called!")
    console.log("ContentChild: " + this.paragraphContentChild.nativeElement.textContent)
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called!")
  }

  ngAfterViewtInit(){
    console.log("ngAfterViewInit called!")
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called!")
  }

  ngOnDestroy(){
    console.log("ngOnDestroyCalled");
  }
}

/*
  HOOKS de Angular:
    -ngOnInit: Se ejecuta una vez el componente se ha instanciado, justo después del constructor. En este punto, los tags de la vista html no esta lista aún.
    -ngOnChanges: Se ejecuta al instanciar el componente y cada vez que un @Input cambia su valor. La primera vez se ejecuta antes que ngOnInit.
    -ngDoCheck: Se ejecuta cada vez que se ejecute la detección de cambios, aunque no haya cambiado nada, incluyendo al inicio.
    -ngAfterContentInit: Se ejecuta cuando <ng-content> ha sido inicializado.
    -ngAfterContentChecked: Se ejecuta cada vez que el contenido ha sido chequeado.
    -ngAfterViewInit: Se llama cuando la vista de este componente (y la de sus hijos) ha terminado de inicializarse.
    -ngAfterViewChecked: Se ejecuta cada vez que la vista (y la de sus hijos) ha sido comprobada.
    -ngOnDestroy: Se ejecuta justo antes de que se elimine el componente.
  */
