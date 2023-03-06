import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({ //Decorador para que la clase sea una directiva
    selector: "[appBasicHighLight]" //Con lo [] será reconicidad sin tener que escribir los [].
})
export class BasicHighlightDirective implements OnInit{
    //Los parámetros de este constructor son necesarios, y angular creará las instancias.
    constructor(private elementRef: ElementRef) { 
    }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = "green";
    }
}