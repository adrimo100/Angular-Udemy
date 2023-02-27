import { Component } from '@angular/core';

@Component({
  selector: '[app-servers]', //Selector de atributo de css.
  templateUrl: './servers.component.html', //Archivo .html que contiene el código.
  /*template: `  //Html directamente en este archivo. Mejor usar `` para poder espaciar.
  <app-server></app-server>
  <app-server></app-server>`,*/
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  servers = ["TextServer", "Textserver 2"];
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  private serversCreated = this.servers.length;
  serverName = "TestServer";
  serverCreated = false;
  

  constructor(){
    console.log("Hola, me he creado!");
      setTimeout(() => {
        this.allowNewServer = true;
      }, 5000)
  }

  ngOnInit(){

  }

  onCreateServer(){
    this.serverCreated = true;
    this.serversCreated++;
    this.servers.push(this.serverName)
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}. Servers created: ${this.serversCreated}`;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value; //Casteo de TS;
  }
}
