import { Component } from '@angular/core';

//Para iniciar un nuevo proyecto usar comando CLI: "ng new nombre_proyecto --no-strict".
//Para generar un nuevo componente usar comando CLI: "ng g c nombre_componente".

@Component({
  selector: 'app-root', //Nombre del componente. Injectará nuestro componente en los tag html que tengan ese nombre. Funciona como un selector de CSS.
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  styles: [`
    h3{
      color: orange
    }
  `] //Para añadir estilos directamente aquí. Mejor usar `` para poder usar varias líneas.
})
export class AppComponent {
}
