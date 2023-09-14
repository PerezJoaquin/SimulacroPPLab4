import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from 'src/app/classes/pelicula';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent {

  @Input() peliList!:Pelicula[];
  @Output() pasarPeli = new EventEmitter<Pelicula>;
  //peliList=[{id:"ID", nombre:"Nombre", tipo:"Tipo", fechaDeEstreno:"Fecha de Estreno", cantidadDePublico:"Publico", foto:"Foto"}];

  constructor(){
    /*for (let index = 0; index < 7; index++) {
      let auxPel = new Pelicula(index, "Pelicula "+index, "Suspenso", "00/00/0000", 50, "1.png");
      this.peliList.push(auxPel)
    }
    localStorage.setItem("listaPeli", JSON.stringify(this.peliList));*/
    /*this.peliList = JSON.parse(localStorage.getItem("peliculas") as string);
    console.log(this.peliList)*/
  }

  mandarDetalle(peliDet:any){
    console.log(peliDet);
    this.pasarPeli.emit(peliDet);
  }
}
