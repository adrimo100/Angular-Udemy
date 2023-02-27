//Angular está dividido en módulos que hay que añadir para poder usarlos.
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [ //Declaración de los componentes del proyecto.
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [ //Aquí añadimos los módulos que vamos a usar en el componente.
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //Lista de componentes que debe conocer Angular cuando analiza inicialmente nuestro .html.
})
export class AppModule { }
