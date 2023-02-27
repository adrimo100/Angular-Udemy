import { Component } from "@angular/core";

@Component({ //Con este decorador indicamos que esta clase corresponde a un decorador. Cada vez que llamamos al componente en el html es una instacia distinta de la clase.
    selector: "app-server", //Será la etiquete html que nos permitirá usar el componente.
    templateUrl: './server.component.html' //Archivo .html que tendrá el código del componente.
}) 
export class ServerComponent {
    serverId = 10;
    serverStatus = "offline"
    styles: [`
    .online {
        color: white;
    }
    `]

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === "online" ? "green" : "red";
    }
}