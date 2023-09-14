import { Component } from '@angular/core';
import { Pelicula } from 'src/app/classes/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  peliList:Pelicula[]
  pelidet= new Pelicula(0, "", "", "", 0, "");
  constructor(){
    this.peliList = JSON.parse(localStorage.getItem("peliculas") as string);
  }

  pasarDet(peli:Pelicula){
    this.pelidet=peli;
  }
}
