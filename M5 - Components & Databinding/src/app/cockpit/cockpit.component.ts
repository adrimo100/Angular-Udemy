import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  /*Con new EventEmitter<datos_retornados> convertimos un atributo en un evento creando un nuevo objeto de tipo eventEmitter.
  Esto nos permite emitir nuestro propios eventos.
  Para que se pueda escuchar desde otro componente, usamos el decorador @Output(alias_opcional).
  Si le pasamos el alias, este deberá ser usado por el padre obligatoriamente para escuchar el evento.*/
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>;
  @Output("bpCreated") blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>;
  newServerName = "";
  newServerContent="";

  onAddServer(){
    this.serverCreated.emit({serverName: this.newServerName, serverContent:this.newServerContent}); //Emitimos el evento y le pasamos los datos necesarios.
  }

  onAddBlueprint(){
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent:this.newServerContent});
  }

  constructor() { }

  ngOnInit(): void {
  }
}
