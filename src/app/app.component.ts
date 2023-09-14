import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simulacroParcial';
  peliarray='[{"id":"1","nombre":"Scarface","tipo":"drama","fechaDeEstreno":"09/02/1984","cantidadDePublico":"456","foto":"https://m.media-amazon.com/images/I/61EB5FGlA6L.jpg"}'+
            ',{"id":"2","nombre":"Moana","tipo":"infantil","fechaDeEstreno":"23/11/2016","cantidadDePublico":"126","foto":"https://m.media-amazon.com/images/I/91oVbhmJnLL._AC_UF894,1000_QL80_.jpg"}'+
            ',{"id":"3","nombre":"Cisne Negro","tipo":"suspenso","fechaDeEstreno":"17/02/2011","cantidadDePublico":"765","foto":"https://es.web.img2.acsta.net/r_1280_720/medias/nmedia/18/78/85/13/19627031.jpg"}'+
            ',{"id":"4","nombre":"Kill Bill","tipo":"accion","fechaDeEstreno":"27/11/2003","cantidadDePublico":"465","foto":"https://m.media-amazon.com/images/I/61mUJ4Zxc8L.jpg"}]';
  constructor(private rtr:Router){
    localStorage.setItem("peliculas", this.peliarray);
    rtr.navigateByUrl("/busqueda")
  }
}
