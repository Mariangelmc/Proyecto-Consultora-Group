import { Rubro } from "./rubro";
import { Usuario } from "./usuario";


export class Cliente {
    id!:number;
    nombre!:string;
    email!:string;
    telefono!:string;
    direccion!:string;
    fechaCreacion!:Date;
    fechaActualizacion!:Date;
    usuario!:Usuario;
    rubro!:Rubro;

    constructor(id:number,nombre:string,email:string,telefono:string,direccion:string,rubro:Rubro,usuario:Usuario) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.direccion = direccion;
    }
}
