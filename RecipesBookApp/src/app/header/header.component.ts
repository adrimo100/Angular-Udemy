import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})
export class HeaderComponent{
    @Output() featureSelected = new EventEmitter<string>(); //Hay que añadir output para que el evento sea escuchable por otros componentes.

    onSelect(selected: string){
        this.featureSelected.emit(selected);
    }
}