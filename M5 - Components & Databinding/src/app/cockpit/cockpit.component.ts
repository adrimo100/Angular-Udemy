import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  /*Con new EventEmitter<datos_retornados> convertimos un atributo en un evento creando un nuevo objeto de tipo eventEmitter.
  Esto nos permite emitir nuestro propios eventos.
  Para que se pueda escuchar desde el componente padre, usamos el decorador @Output(alias_opcional).
  Solo se puede escuchar desde la etiqueta html donde se llama a este componente en el padre cuando se usa Output.
  Si le pasamos el alias, este deberá ser usado por el padre obligatoriamente para escuchar el evento.*/
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>;
  @Output("bpCreated") blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>;
  //Con el decorador @ViewChield(Local_Reference, {static: true/false}) podemos tener acceso a un objeto de tipo ElementRef, que incluye al tag html que tenía el Local Reference.
  //ElementRef tiene un atributo llamado nativeElement que almacena a la etiqueta html original junto a sus propiedades.
  @ViewChild("serverContentInput", {static: true}) serverContentInput: ElementRef; 

  onAddServer(nameInput: string){
    this.serverCreated.emit({serverName: nameInput, serverContent:this.serverContentInput.nativeElement.value}); //Emitimos el evento y le pasamos los datos necesarios.
  }

  onAddBlueprint(nameInput: string){
    this.blueprintCreated.emit({serverName: nameInput, serverContent:this.serverContentInput.nativeElement.value});
  }

  constructor() { }

  ngOnInit(): void { //Es un hook del ciclo de vida del componente. Se ejecuta una vez el componente se ha instanciado, justo después del constructor.
  }
}
