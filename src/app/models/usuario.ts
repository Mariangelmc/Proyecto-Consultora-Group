export class Usuario {
    nombreUsuario!:string
    clave!:string

    constructor(nombre:string, password:string) {
        this.nombreUsuario = nombre; 
        this.clave = password;
    }
}
