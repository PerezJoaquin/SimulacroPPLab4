export class Pelicula {

    id:number;
    nombre:string;
    tipo:string;
    fechaDeEstreno:string;
    cantidadDePublico:number;
    foto:string;

    constructor(id:number, nombre:string, tipo:string, fecha:string, publico:number, foto:string){
        this.id=id;
        this.nombre=nombre;
        this.tipo=tipo;
        this.fechaDeEstreno=fecha;
        this.cantidadDePublico=publico;
        this.foto=foto;
    }
}
/*id
b. Nombre
c. tipo { terror , comedia, amor ,otros }
d. fecha de estreno,
e. cantidad de público
f. Foto de la película*/