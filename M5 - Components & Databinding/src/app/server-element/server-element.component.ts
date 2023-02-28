import { Component, OnInit, Input} from '@angular/core';

//Por defecto, los atributos y métodos de un componente solo son accesibles desde el propio componente.
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  //Con el decorador @Input(alias_opcional), hacemos que los componentes padre (los que usan a este) puedan acceder a un atributo/método.
  //A este decorador, se le puede pasar opcionalmente un string que tendrá que ser usado como alias si se le pasa este string.
  @Input("srvElement") element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
